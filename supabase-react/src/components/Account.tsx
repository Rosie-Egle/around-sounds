import { useState, useEffect } from "react";
import { supabase } from "clients/supabaseClient";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Session } from "@supabase/supabase-js";

const CustomButton = styled(Button)<{ $primary?: boolean }>`
  --accent-color: white;

  /* This renders the buttons above... Edit me! */
  background: transparent;
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) =>
    props.$primary &&
    `
    background: var(--accent-color);
    color: black;
  `}
`;

interface AccountProps {
  session: Session;
}

const Account = ({ session }: AccountProps) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      setLoading(true);
      const { user } = session;
      const { data, error } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();
      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setUsername(data.username);
          setWebsite(data.website);
          setAvatarUrl(data.avatar_url);
        }
      }
      setLoading(false);
    }
    getProfile();
    return () => {
      ignore = true;
    };
  }, [session]);
  async function updateProfile(
    event: React.FormEvent<HTMLFormElement>,
    avatarUrl?: string
  ) {
    event.preventDefault();
    setLoading(true);
    const { user } = session;
    const updates = {
      id: user.id,
      username,
      website,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    };
    const { error } = await supabase.from("profiles").upsert(updates);
    if (error) {
      alert(error.message);
    } else if (avatarUrl) {
      setAvatarUrl(avatarUrl);
    }
    setLoading(false);
  }
  return (
    <form onSubmit={updateProfile} className="form-widget">
      <CustomButton $primary>Custom</CustomButton>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          required
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="url"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div>
        <button
          className="button block primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>
    </form>
  );
};

export default Account;
