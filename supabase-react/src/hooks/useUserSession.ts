import { useQuery } from "@tanstack/react-query";
import { Session } from "@supabase/supabase-js";

import { supabase } from "clients/supabaseClient";

export const useUserSession = () => {
  return useQuery<Session | null>({
    queryKey: ["userSession"],
    queryFn: async () => {
      const { data } = await supabase.auth.getSession();

      return data.session;
    },
  });
};
