import { motion } from "framer-motion";

const AnimatedDiv = ({ children, initial, animate, transition }) => {
  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;