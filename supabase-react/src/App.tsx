import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { CircularProgress, Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthPage from "./pages/AuthPage";
import AccountPage from "./pages/AccountPage";
import StereoFieldPage from "./pages/StereoFieldPage";
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
        {/* <Route path="/" element={<AccountPage session={session} />} /> */}
        <Route path="/" element={<StereoFieldPage />} />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <StyledThemeProvider theme={theme}>
            <Box
              bgcolor="background.default"
              sx={{ padding: 0, margin: 0, width: "100%" }}
            >
              <AppRoutes />
            </Box>
          </StyledThemeProvider>
        </CssBaseline>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
