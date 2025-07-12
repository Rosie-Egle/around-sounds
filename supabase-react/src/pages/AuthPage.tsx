import { Container, Box, Typography } from "@mui/material";
import Auth from "../components/Auth";

const AuthPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>
        <Auth />
      </Box>
    </Container>
  );
};

export default AuthPage;
