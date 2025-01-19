import React from "react";
import { motion } from "motion/react";

const Title = ({
  pageId,
  pageHeader,
  subHeader,
  pageDescription,
  pageBg,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id={pageId}
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        pageBg
          ? "bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]"
          : ""
      }`}
    >
      <motion.h4
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg font-Ovo">{pageHeader}</motion.h4>
      <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-Ovo">{subHeader}</motion.h2>
      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        {pageDescription}
      </motion.p>
      {children}
    </motion.div>
  );
};

export default Title;
