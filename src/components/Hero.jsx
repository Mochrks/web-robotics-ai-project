import { motion } from "framer-motion";
import styles from "../style";
import { robot } from "../assets";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

import ExploreNow from "./ExploreNow";
import Watch from "./Watch";

const Hero = () => {
  return (
    // heroo awal
    <section id="home" className={`flex md:flex-row flex-col sm:py-1 py-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex-1 ${styles.flexStart} flex-row xl:px-0 sm:px-16 px-6 z-[999]`}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`flex-1 ${styles.flexCenter} flex-col md:my-0 my-10 relative`}
        >
          <motion.div
            variants={textVariant(1.1)}
            className="flex flex-row justify-center items-center w-full z-[999] "
          >
            <h1 className="flex-1 font-poppins font-semibold ss:text-[92px] text-[42px] ss:px-1 px-5 sm:pt-[100px] pt-1 text-white ss:leading-[80.8px] leading-[75px] ">
              Smart & <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Technology</span>{" "}
            </h1>
          </motion.div>
          {/* deskripsi */}
          <motion.p
            variants={textVariant(1.1)}
            className={`${styles.paragraph} max-w-[770px] z-[999] text-start text-center sm:mx-1 mx-5  sm:py-16 py-1`}
          >
            Our team of experts is dedicated to creating innovative solutions
            that simplify complex processes, increase productivity, and enhance
            safety. We understand that every industry has its unique challenges,
            and we work closely with our clients to develop customized robotic
            solutions that meet their specific needs
            {/* button */}
            <motion.div
              variants={fadeIn("right", "tween", 0.5, 2)}
              className="flex flex-row "
            >
              <ExploreNow styles={` mt-1`} />
              <Watch styles={` mt-2 ss:mx-5 mx-5`} />
            </motion.div>
          </motion.p>
        </motion.div>
      </motion.div>

      <div
        className={`flex-1 ${styles.flexCenter} flex-col md:my-0 my-10 relative`}
      >
        {/* gambar content */}

        <motion.img
          variants={fadeIn("left", "tween", 0.5, 2)}
          initial="hidden"
          whileInView="show"
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] relative z-[5]"
        ></motion.img>

        {/* gradient start */}
        <div className="absolute z-[1] w-[150%] h-[60%] -left-[74%]  rounded-full  gradient-01-1 bottom-40" />
        <div className="absolute z-[1] w-[40%] h-[40%] -left-[20%] top-[35%]  rounded-full  gradient-02-2 bottom-40" />
        <div className="absolute z-[1] w-[50%] h-[50%] -left-[80%] top-[45%]  rounded-full  gradient-02-2 bottom-40" />
        <div className="absolute z-[0] w-[60%] h-[60%] -left-[104%] top-[45%]  rounded-full  gradient-02 bottom-40" />

        {/* layer atas robot */}
        <div className="absolute z-[5] w-[30%] h-[110%] right-[54%] top-[35%] rounded-[40px]  glass bottom-40" />
        <div className="absolute z-[5] w-[100%] h-[100%] md:right-[20%] right-[1%] top-[85%]  bottom-40">
          <motion.p
            variants={textVariant(1.1)}
            className="font-poppins font-normal text-dimWhite sm:text-[14px] text-[10px] md:max-w-[1770px] max-w-[700px] z-[999]  md:text-center text-end"
          >
            Whether you're looking to streamline your production line, automate
            your warehouse, or enhance your healthcare services, UI Robotics has
            the expertise and experience to help you achieve your goals. Contact
            us today to learn more about our products and services.
          </motion.p>
        </div>
        {/* gradient end */}

        {/* garis panjang 1 */}
        <div className=" absolute z-[0] border-l border-gray-300 h-[300%] -left-[20%] opacity-5" />
        {/* garis panjang 2 */}
        <div className=" absolute z-[0] border-l border-gray-300 h-[300%] -right-[10%] opacity-5" />
        {/* garis panjang 3 */}
        <div className=" absolute z-[0] border-l border-gray-300 h-[300%] right-[53%] opacity-5" />
      </div>
    </section>
  );
};

export default Hero;
