import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => () => (
  <motion.section
    variants={staggerContainer(0.2, 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    // Adjusted max width to 6xl to match our grid container
    className={`${styles.padding} w-full max-w-6xl mx-auto relative z-10`}
  >
    <span className="hash-span" id={idName}>
      &nbsp;
    </span>
    <Component />
  </motion.section>
);

export default SectionWrapper;
