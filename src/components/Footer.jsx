import { motion } from "framer-motion";
import styles from "../styles/style";
import { favicon } from "../assets";
import { socialMedia, footerLinks } from "../apis";

const Footer = () => (
  <section className={`flex justify-center items-center ${styles.paddingY} flex-col relative overflow-hidden w-full`}>
    {/* Background Glow Effect - Spans full width */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[20%] top-0 blue__gradient opacity-50" />
    <div className="absolute z-[0] w-[60%] h-[60%] -left-[20%] -bottom-[20%] pink__gradient opacity-30" />

    <div className={`${styles.boxWidth} ${styles.paddingX} flex flex-col z-[1]`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row items-center"
          >
            <img
              src={favicon}
              alt="mochrks"
              className="w-[72px] h-[72px] object-contain"
            />
            <span className="ml-3 font-poppins font-bold text-white text-[24px]">
              ROBOTICS<span className="text-gradient"> AI</span>
            </span>
          </motion.div>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to explore and innovate in the world of Robotics and Artificial Intelligence.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors duration-300 ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a href={link.link} target="_blank" rel="noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2023 <span className="text-secondary font-semibold">Mochrks</span>. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <motion.img
              whileHover={{ scale: 1.2, rotate: 5 }}
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;

