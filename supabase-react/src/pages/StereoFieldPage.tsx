import { Container, Box, Typography } from "@mui/material";

const StereoFieldPage = () => {
  console.log("StereoFieldPage");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        // backgroundColor: "tomato",
        width: 1000,
      }}
    >
      <svg
        width={"95%"}
        height={"auto"}
        display={"block"}
        // viewBox="0 0 200 100"
        viewBox="-5 -5 210 110"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Concentric semicircles */}
        {[75, 140, 200].map((r, i) => (
          <path
            key={i}
            d={`
        M ${100 - r / 2},100
        a ${r / 2},${r / 2} 0 0,1 ${r},0
      `}
            fill="none"
            stroke={["#6c6176", "#6c6176", "#6c6176"][i]}
            strokeWidth={1}
          />
        ))}

        {/* Bisecting horizontal line */}
        <line
          x1={0}
          y1={99}
          x2={200}
          y2={99}
          stroke="#6c6176"
          strokeWidth={1}
        />

        {/* Bisecting vertical line */}
        <line
          x1={100}
          y1={0}
          x2={100}
          y2={100}
          stroke="#6c6176"
          strokeWidth={1}
        />

        {/* Diagonal up-left 45° */}
        <line
          x1={100}
          y1={99}
          x2={0}
          y2={0}
          stroke="#6c6176"
          strokeWidth={0.5}
          strokeDasharray="5,5"
        />

        {/* Diagonal up-right 45° */}
        <line
          x1={100}
          y1={99}
          x2={200}
          y2={0}
          stroke="#6c6176"
          strokeWidth={0.5}
          strokeDasharray="5,5"
        />
      </svg>
    </Box>
  );
};

export default StereoFieldPage;
