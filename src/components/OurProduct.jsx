import styles from "../style";
import { layout } from "../style";
import { defend, health, robot4, robot5, robot6, service } from "../assets";
import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

const OurProduct = () => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px]  `}
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
        OurProduct
      </motion.p>
      <motion.h2
        variants={textVariant(1.1)}
        className="font-poppins font-semibold sm:text-[48px]  sm:max-w-[900px] max-w-full text-[30px] text-white text-gradient text-center sm:leading-[76.8px] leading-[40.8px] w-full "
      >
        Revolutionize Your Life with Our Advanced AI Robot.
      </motion.h2>
      <motion.p
        variants={textVariant(1.1)}
        className={`${styles.paragraph} max-w-full mt-5  text-center text-bold text-white`}
      >
        Our products are designed to simplify complex tasks and improve
        efficiency in a variety of industries, from manufacturing and logistics
        to healthcare and education. With advanced AI technology, our robots can
        learn from their surroundings and adapt to changing situations, making
        them ideal for dynamic and fast-paced environments
      </motion.p>

      <motion.div
        className={`${styles.flexCenter}  flex sm:flex-row flex-col pt-10  `}
      >
        <motion.img
          variants={fadeIn("right", "tween", 0.5, 2)}
          src={service}
          alt="robot4"
          className="sm:w-[30%] w-[80%] relative z-[5] object-contain mx-10 py-10"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.5, 2)}
          src={defend}
          alt="robot4"
          className="sm:w-[30%] w-[80%] relative z-[5] object-contain mx-10 py-10"
        />
        <motion.img
          variants={fadeIn("left", "tween", 0.5, 2)}
          src={health}
          alt="rrobt2"
          className="sm:w-[30%] w-[80%] relative z-[5] object-contain mx-10 py-10"
        />
      </motion.div>
      <motion.div
        className={`${styles.flexCenter}  flex sm:flex-row flex-col pt-10  `}
      >
        <motion.img
          variants={fadeIn("right", "tween", 0.5, 2)}
          src={service}
          alt="robot4"
          className="sm:w-[40%] w-[80%] relative z-[5] object-contain mx-10 py-10"
        />

        <motion.img
          variants={fadeIn("left", "tween", 0.5, 2)}
          src={health}
          alt="rrobt2"
          className="sm:w-[40%] w-[80%] relative z-[5] object-contain mx-10 py-10"
        />
      </motion.div>
    </motion.div>
  </motion.section>
);

export default OurProduct;
