import { robot3 } from "../assets";
import styles, { layout } from "../style";

import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const DataAnalys = () => (
  <motion.section
    id="features"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${layout.section}`}
  >
    <motion.div
      variants={fadeIn("right", "tween", 0.5, 2)}
      className={layout.sectionInfo}
    >
      <h2 className={`${styles.heading2} text-gradient`}>
        Data Analyses, <br className="sm:block hidden" /> Effective data
        analysis requires careful planning
      </h2>
      <p className={`${styles.paragraph} max-w-[1470px] mt-5`}>
        Data analysis can help identify areas for improvement, detect anomalies
        or errors in data, and provide insights into the behavior or preferences
        of individuals or groups. However, it also requires careful
        consideration of ethical and privacy concerns related to data collection
        and use..
      </p>
    </motion.div>

    <motion.div
      variants={fadeIn("left", "tween", 0.5, 2)}
      className={`${layout.sectionImg} flex-col `}
    >
      <img src={robot3} alt="robot2" />
    </motion.div>
    <div className="absolute z-[0] w-[30%] h-[40%] -left-[12%] top-[235%]  rounded-full  gradient-02-3 bottom-40" />
  </motion.section>
);

export default DataAnalys;
