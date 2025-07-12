import { useState, useEffect, StrictMode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { supabase } from "clients/supabaseClient";
import { Session } from "@supabase/supabase-js";
import AuthPage from "./pages/AuthPage";
import AccountPage from "./pages/AccountPage";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";

const App = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (loading) {
    return (
      <StrictMode>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              Loading...
            </div>
          </StyledThemeProvider>
        </ThemeProvider>
      </StrictMode>
    );
  }

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Router>
            <Navigation session={session} />
            <Routes>
              <Route
                path="/auth"
                element={
                  !session ? <AuthPage /> : <Navigate to="/account" replace />
                }
              />
              <Route
                path="/account"
                element={
                  session ? (
                    <AccountPage session={session} />
                  ) : (
                    <Navigate to="/auth" replace />
                  )
                }
              />
              <Route
                path="/"
                element={
                  <Navigate to={session ? "/account" : "/auth"} replace />
                }
              />
            </Routes>
          </Router>
        </StyledThemeProvider>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
