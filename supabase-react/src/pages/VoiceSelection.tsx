import { Box } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const voices = [
  {
    name: "Vocals",
    icon: <AccessAlarmIcon />,
    value: "VOCAL",
  },
  {
    name: "Guitar",
    icon: <AccessAlarmIcon />,
    value: "GUITAR",
  },
  {
    name: "Drums",
    icon: <AccessAlarmIcon />,
    value: "DRUMS",
  },
  {
    name: "Bass",
    icon: <AccessAlarmIcon />,
    value: "BASS",
  },
  {
    name: "Keys",
    icon: <AccessAlarmIcon />,
    value: "KEYS",
  },
  {
    name: "Horn",
    icon: <AccessAlarmIcon />,
    value: "HORNS",
  },
];

const VoiceSelection = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={800}
      padding={2}
      border={"solid 1px #615c67"}
      borderRadius={4}
      width={200}
      marginLeft={4}
    >
      {voices.map((voice) => (
        <Box
          key={voice.value}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={1}
          padding={2}
        >
          {voice.icon}
          {voice.name}
        </Box>
      ))}
    </Box>
  );
};

export default VoiceSelection;
