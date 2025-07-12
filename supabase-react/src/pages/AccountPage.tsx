import { Container, Box, Typography } from "@mui/material";
import Account from "../components/Account";
import { Session } from "@supabase/supabase-js";

interface AccountPageProps {
  session: Session;
}

const AccountPage = ({ session }: AccountPageProps) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          py: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Profile Settings
        </Typography>
        <Account session={session} />
      </Box>
    </Container>
  );
};

export default AccountPage;
