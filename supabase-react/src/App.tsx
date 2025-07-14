import { useState, useEffect, StrictMode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { CircularProgress, Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthPage from "./pages/AuthPage";
import AccountPage from "./pages/AccountPage";
import { useUserSession } from "hooks/useUserSession";

import theme from "./theme";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { data: session, isLoading } = useUserSession();

  if (isLoading) {
    return <CircularProgress color="secondary" size={100} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/account" element={<AccountPage session={session} />} />
        <Route
          path="/"
          element={<Navigate to={session ? "/account" : "/auth"} replace />}
        />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <AppRoutes />
          </StyledThemeProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
