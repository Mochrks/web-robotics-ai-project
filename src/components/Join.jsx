import { lets, peace } from "../assets";
import styles, { layout } from "../style";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const Join = () => (
  <motion.section
    id="features"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={layout.section}
  >
    <motion.div
      variants={fadeIn("right", "tween", 0.5, 2)}
      className={`${layout.sectionImg} flex-col `}
    >
      <img src={peace} alt="peace" className=" w-[80%] md:mr-[200px] mr-2" />
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={layout.sectionInfo}
    >
      <motion.h2
        variants={textVariant(1.1)}
        className={`${styles.heading2} sm:text-end text-center `}
      >
        Join, The <br className="sm:block hidden" /> Community.
      </motion.h2>
      <motion.p
        variants={fadeIn("left", "tween", 0.5, 2)}
        className={`${styles.paragraph} max-w-[1470px] mt-5 text-end`}
      >
        Secure data AI involves implementing measures to safeguard sensitive
        information used in AI models, such as encryption, access controls, and
        data anonymization techniques
      </motion.p>

      <motion.img
        variants={fadeIn("left", "tween", 0.5, 2)}
        src={lets}
        alt="lets"
        className="py-10 sm:ml-[380px] ml-[70px] cursor-pointer"
      />
    </motion.div>
  </motion.section>
);

export default Join;
