import { assets, workData } from "@/assets/assets";
import Title from "@/shared/Title";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <Title
      pageId={"work"}
      pageHeader={"My Portfolio"}
      subHeader={"My Latest Work"}
      pageDescription={
        "Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full-stack development."
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border border-gray-300"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 border border-gray-300">
              <div className="">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a href={project.link} target="_blank">
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Title>
  );
};

export default Work;
