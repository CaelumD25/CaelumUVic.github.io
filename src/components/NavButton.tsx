import { motion } from "framer-motion";
import { Box } from "@mui/material";

export interface props {
  buttonText: string;
}

function NavButton({ buttonText }: props) {
  return (
    <Box>
      <motion.svg
        width="140"
        height="80"
        viewBox="0 0 140 80"
        id={"home-btn"}
        initial={{ strokeWidth: 1, stroke: "rgb(48,54,67)" }}
        whileHover={{
          strokeWidth: 1,
          stroke: ["#b48ead", "#a3be8c", "#bf616a", "#d08770", "#ebcb8b"],
        }}
        transition={{ duration: 3 }}
      >
        <defs>
          <filter id="ds" width="140" height="80">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.4" />
          </filter>
        </defs>
        <rect
          x="10%"
          y={"20%"}
          rx={12}
          ry={12}
          width={"80%"}
          height={"60%"}
          fill={"#2e3440"}
          filter="url(#ds)"
        />
        <motion.text
          fill={"white"}
          stroke={"none"}
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {buttonText}
        </motion.text>
      </motion.svg>
    </Box>
  );
}

export default NavButton;
