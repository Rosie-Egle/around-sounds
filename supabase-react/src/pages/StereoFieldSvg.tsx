import { Box } from "@mui/material";

const StereoFieldSvg = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      bgcolor={"#342d3a"}
      width={1300}
      maxHeight={700}
      borderRadius={4}
      padding={"32px"}
      boxShadow={"0 3px 6px rgba(0,0,0,0.6)"}
    >
      <svg
        width="95%"
        viewBox="-30 -30 260 135"
        preserveAspectRatio="xMidYMax meet"
        style={{ display: "block" }}
      >
        {/* Concentric semicircles */}
        {[100, 175, 250].map((r, i) => (
          <path
            key={i}
            d={`
              M ${100 - r / 2},100
              a ${r / 2},${r / 2} 0 0,1 ${r},0
            `}
            fill="none"
            stroke="#615c67"
            strokeWidth={1}
          />
        ))}

        {/* Bisecting horizontal line */}
        <line
          x1={-25}
          y1={99.5}
          x2={225}
          y2={99.5}
          stroke="#615c67"
          strokeWidth={1}
        />

        {/* Bisecting vertical line */}
        <line
          x1={100}
          y1={-25}
          x2={100}
          y2={100}
          stroke="#615c67"
          strokeWidth={1}
        />

        {/* Diagonal up-left (stops at radius=125 circle) */}
        <line
          x1={101}
          y1={100}
          x2={11.61}
          y2={11.61}
          stroke="#615c67"
          strokeWidth={0.5}
          strokeDasharray="5,5"
        />

        {/* Diagonal up-right (stops at radius=125 circle) */}
        <line
          x1={99}
          y1={100}
          x2={188.39}
          y2={11.61}
          stroke="#615c67"
          strokeWidth={0.5}
          strokeDasharray="5,5"
        />
      </svg>
    </Box>
  );
};

export default StereoFieldSvg;
