import { robot2 } from "../assets";
import styles, { layout } from "../style";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const SecureData = () => (
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
      <img src={robot2} alt="robot2" className=" w-[80%] md:mr-[200px] mr-2" />
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={layout.sectionInfo}
    >
      <motion.h2
        variants={textVariant(1.1)}
        className={`${styles.heading2} text-end text-gradient`}
      >
        Secure Data, <br className="sm:block hidden" /> Secure data AI is
        crucial.
      </motion.h2>
      <motion.p
        variants={fadeIn("left", "tween", 0.5, 2)}
        className={`${styles.paragraph} max-w-[1470px] mt-5 text-end`}
      >
        Secure data AI involves implementing measures to safeguard sensitive
        information used in AI models, such as encryption, access controls, and
        data anonymization techniques
      </motion.p>
    </motion.div>
  </motion.section>
);

export default SecureData;
