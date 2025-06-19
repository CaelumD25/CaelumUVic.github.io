import { motion } from "framer-motion";

function Background() {
  const cascadingTransition = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        type: "linear",
        delay: 0.25 * i,
        duration: 2,
      },
    }),
    hide: {
      opacity: 0,
    },
  };

  return (
    <footer className={"background-layer"}>
      <svg
        className={"background-svg-toggle-big"}
        id="visual1"
        viewBox="0 0 100 20"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <motion.path
          custom={6}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="M0 6L9 6L18 6L27 10L36 9L45 9L55 7L64 10L73 2L82 8L91 11L100 2L100 21L91 21L82 21L73 21L64 21L55 21L45 21L36 21L27 21L18 21L9 21L0 21Z"
          fill="#5f6676"
        ></motion.path>
        <motion.path
          custom={5}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="M0 12L9 10L18 9L27 6L36 11L45 7L55 11L64 5L73 12L82 8L91 6L100 10L100 21L91 21L82 21L73 21L64 21L55 21L45 21L36 21L27 21L18 21L9 21L0 21Z"
          fill="#535a6a"
        ></motion.path>
        <motion.path
          custom={4}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="M0 7L9 13L18 13L27 8L36 10L45 9L55 7L64 10L73 11L82 8L91 12L100 9L100 21L91 21L82 21L73 21L64 21L55 21L45 21L36 21L27 21L18 21L9 21L0 21Z"
          fill="#474e5e"
        ></motion.path>
        <motion.path
          custom={3}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="M0 15L9 13L18 13L27 11L36 10L45 11L55 12L64 12L73 11L82 10L91 12L100 14L100 21L91 21L82 21L73 21L64 21L55 21L45 21L36 21L27 21L18 21L9 21L0 21Z"
          fill="#3b4252"
        ></motion.path>
        <motion.path
          custom={2}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="M0 13L9 14L18 14L27 16L36 13L45 12L55 14L64 14L73 13L82 13L91 12L100 13L100 21L91 21L82 21L73 21L64 21L55 21L45 21L36 21L27 21L18 21L9 21L0 21Z"
          fill="#353c4b"
        ></motion.path>
        <motion.path
          custom={1}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="M0 15L9 16L18 16L27 16L36 14L45 15L55 15L64 15L73 14L82 15L91 17L100 13L100 21L91 21L82 21L73 21L64 21L55 21L45 21L36 21L27 21L18 21L9 21L0 21Z"
          fill="#303743"
        ></motion.path>
        <motion.path
          custom={0}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="M0 15L9 17L18 18L27 18L36 17L45 18L55 18L64 16L73 16L82 17L91 17L100 18L100 21L91 21L82 21L73 21L64 21L55 21L45 21L36 21L27 21L18 21L9 21L0 21Z"
          fill="#2b313c"
        ></motion.path>
      </svg>
      <svg
        id="visual2"
        className={"background-svg-toggle-small"}
        viewBox="0 0 610 541"
        height="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs5" />
        <motion.path
          custom={4}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="m 0,421 87,32 88,-36 87,8 87,21 87,-8 88,14 87,-41 87,45 87,-16 88,-19 87,-15 V 541 H 873 785 698 611 524 436 349 262 175 87 0 Z"
          fill="#5f6676"
          id="path1"
        />
        <motion.path
          custom={3}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="m 0,447 87,7 88,-7 87,-15 87,22 87,3 88,4 87,-7 87,11 87,-28 88,1 87,16 v 87 H 873 785 698 611 524 436 349 262 175 87 0 Z"
          fill="#4d5464"
          id="path2"
        />
        <motion.path
          custom={2}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="m 0,474 87,-11 88,3 87,21 87,-19 87,-16 88,10 87,20 87,-2 87,-26 88,14 87,-9 v 82 H 873 785 698 611 524 436 349 262 175 87 0 Z"
          fill="#3b4252"
          id="path3"
        />
        <motion.path
          custom={1}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="m 0,497 87,-17 88,18 h 87 l 87,-16 87,26 88,-17 87,-3 87,12 87,-6 88,-8 87,3 v 52 H 873 785 698 611 524 436 349 262 175 87 0 Z"
          fill="#333947"
          id="path4"
        />
        <motion.path
          custom={0}
          animate={"visible"}
          initial={"hide"}
          variants={cascadingTransition}
          d="m 0,525 87,-12 88,-7 87,8 87,3 87,-10 88,9 87,-15 h 87 87 l 88,4 87,-2 v 38 H 873 785 698 611 524 436 349 262 175 87 0 Z"
          fill="#2b313c"
          id="path5"
        />
      </svg>
    </footer>
  );
}

export default Background;
