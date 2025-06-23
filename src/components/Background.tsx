import {motion} from "framer-motion";
import {useEffect, useState} from "react";

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

  useEffect(() => {
    function handleResize() {
      const {innerWidth: width} = window;
      if (width < 728) {
        console.log("SMALLLL")
        setViewBox(`0 0 40 20`);
      } else {
        setViewBox(`0 0 100 20`);
      }

    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [viewBox, setViewBox] = useState<string>(`0 0 ${window.innerWidth < 728 ? 40 : 100} 20`)

  return (
    <footer className={"background-layer"}>
      <svg
        className={""}
        id="visual1"
        viewBox={viewBox}
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        preserveAspectRatio="none"
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

    </footer>
  );
}

export default Background;
