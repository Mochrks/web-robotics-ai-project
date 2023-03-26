import styles from "../style";
import { favicon } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <img
        src={favicon}
        alt="mochrks"
        className="w-[60px] h-[72.14px]  object-contain"
      />
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white md:mr-[620px] mr-0 sm:py-0 py-5">
        Copyright Ⓒ 2023 Mochrks. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 sm:mr-5 mr-0">
        {socialMedia.map((social, index) => (
          <img
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
  </section>
);

export default Footer;
