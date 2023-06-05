import { motion } from "framer-motion";
import { PropTypes } from "prop-types";

const AnimatedPage = ({ children }) => {
  const pageAnimation = {
    initial: { opacity: 0, x: "-100%" },
    animate: {
      opacity: 1,
      x: "0%",
      transition: {
        ease: [0.38, 0.62, 0.14, 1.2],
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      display: "none",
      x: "100%",
    },
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

AnimatedPage.propTypes = {
  children: PropTypes.node,
};

export default AnimatedPage;
