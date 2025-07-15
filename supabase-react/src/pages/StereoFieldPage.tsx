// import { Container, Box, Typography } from "@mui/material";

// const StereoFieldPage = () => {
//   console.log("StereoFieldPage");
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-end",
//         alignItems: "center",
//         backgroundColor: "tomato",
//         width: 1200,
//       }}
//     >
//       <svg
//         width={"95%"}
//         height={"auto"}
//         display={"block"}
//         viewBox="-30 -30 260 140"
//         preserveAspectRatio="xMidYMax meet"
//       >
//         {/* Concentric semicircles */}
//         {[75, 140, 250].map((r, i) => (
//           <path
//             key={i}
//             d={`
//         M ${100 - r / 2},100
//         a ${r / 2},${r / 2} 0 0,1 ${r},0
//       `}
//             fill="none"
//             stroke={["#6c6176", "#6c6176", "#6c6176"][i]}
//             strokeWidth={1}
//           />
//         ))}

//         {/* Bisecting horizontal line */}
//         <line
//           x1={-25}
//           y1={100}
//           x2={225}
//           y2={100}
//           stroke="#6c6176"
//           strokeWidth={1}
//         />

//         {/* Bisecting vertical line */}
//         <line
//           x1={100}
//           y1={-25}
//           x2={100}
//           y2={100}
//           stroke="#6c6176"
//           strokeWidth={1}
//         />

//         {/* Diagonal up-left 45° */}
//         <line
//           x1={100}
//           y1={100}
//           x2={0}
//           y2={0}
//           stroke="#6c6176"
//           strokeWidth={0.5}
//           strokeDasharray="5,5"
//         />

//         {/* Diagonal up-right 45° */}
//         <line
//           x1={100}
//           y1={100}
//           x2={200}
//           y2={0}
//           stroke="#6c6176"
//           strokeWidth={0.5}
//           strokeDasharray="5,5"
//         />
//       </svg>
//     </Box>
//   );
// };

// export default StereoFieldPage;

import { Box } from "@mui/material";

const StereoFieldPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "tomato",
        width: 1200,
      }}
    >
      <svg
        width="95%"
        height="auto"
        viewBox="-30 -30 260 140"
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
            stroke="#6c6176"
            strokeWidth={1}
          />
        ))}

        {/* Bisecting horizontal line */}
        <line
          x1={-25}
          y1={99.5}
          x2={225}
          y2={99.5}
          stroke="#6c6176"
          strokeWidth={1}
        />

        {/* Bisecting vertical line */}
        <line
          x1={100}
          y1={-25}
          x2={100}
          y2={100}
          stroke="#6c6176"
          strokeWidth={1}
        />

        {/* Diagonal up-left (stops at radius=125 circle) */}
        <line
          x1={100}
          y1={100}
          x2={11.61}
          y2={11.61}
          stroke="#6c6176"
          strokeWidth={0.5}
          strokeDasharray="5,5"
        />

        {/* Diagonal up-right (stops at radius=125 circle) */}
        <line
          x1={100}
          y1={100}
          x2={188.39}
          y2={11.61}
          stroke="#6c6176"
          strokeWidth={0.5}
          strokeDasharray="5,5"
        />
      </svg>
    </Box>
  );
};

export default StereoFieldPage;
