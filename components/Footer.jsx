import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Footer = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="text-center"
      >
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-20 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <a href="mailto:alchemistlowkey@gmail.com" className="flex gap-2">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail icon"
            className=""
            width={30}
          />
          alchemistlowkey@gmail.com
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          &copy; 2025 Lucky Samuel. All rights reserved
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center gap-10 justify-center mt-4 sm:mt-0"
        >
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/lucky-samuel/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/alchemistlowkey">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/alchemistlowkey">
              Twitter
            </a>
          </li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
