import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { supabase } from "clients/supabaseClient";
import { Session } from "@supabase/supabase-js";

interface NavigationProps {
  session: Session | null;
}

const Navigation = ({ session }: NavigationProps) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Around Sounds
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {session ? (
            <>
              <Button color="inherit" onClick={() => navigate("/account")}>
                Account
              </Button>
              <Button color="inherit" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
