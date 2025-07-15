import { Box } from "@mui/material";
import StereoFieldSvg from "./StereoFieldSvg";
import VoiceSelection from "./VoiceSelection";

const StereoFieldPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"flex-end"}
      justifyContent={"center"}
      height={"100vh"}
      padding={"50px"}
    >
      <StereoFieldSvg />
      <VoiceSelection />
    </Box>
  );
};

export default StereoFieldPage;
