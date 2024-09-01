import styles from "../style";
import { layout } from "../style";
import { robot4, robot5, robot6 } from "../assets";
import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

const Services = () => (
  <motion.section
    variants={textVariant(1.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col glass2  rounded-[20px] box-shadow `}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${layout.sectionImg} flex-col`}
    >
      <motion.p
        variants={textVariant(1.1)}
        className={`${styles.paragraph} max-w-full mt-5  text-center text-bold text-white`}
      >
        Services
      </motion.p>
      <motion.h2
        variants={textVariant(1.1)}
        className="font-poppins font-semibold sm:text-[48px] text-[30px] text-white text-gradient text-center sm:leading-[76.8px] leading-[40.8px] w-full "
      >
        Our Purpose Is To Delivery Excellence In Service And Execution
      </motion.h2>

      <motion.div
        className={`${styles.flexCenter}  flex sm:flex-row flex-col  `}
      >
        <motion.img
          variants={fadeIn("right", "tween", 0.5, 2)}
          src={robot4}
          alt="robot4"
          className="sm:w-[30%] w-[80%] relative z-[5] object-contain "
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.5, 2)}
          src={robot5}
          alt="robot4"
          className="sm:w-[30%] w-[80%] relative z-[5] object-contain"
        />
        <motion.img
          variants={fadeIn("left", "tween", 0.5, 2)}
          src={robot6}
          alt="rrobt2"
          className="sm:w-[30%] w-[80%] relative z-[5] object-contain"
        />
      </motion.div>
    </motion.div>
  </motion.section>
);

export default Services;
