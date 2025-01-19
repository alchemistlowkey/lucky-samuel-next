import { assets } from "@/assets/assets";
import Title from "@/shared/Title";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { ScaleLoader } from "react-spinners";
import { motion } from "motion/react";

const Contact = ({ isDarkMode, setIsDarkMode }) => {
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

  const { register, reset, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Portfolio",
      subject: "Contact form",
    },
    onSuccess: () => {
      toast.success("Thank you for contacting us!");
      reset();
    },
    onError: (msg) => {
      toast.error(msg || "Something went wrong. Please try again.");
    },
  });

  const handleFormSubmit = async (data) => {
    setLoading(true); // Set loading to true before submission
    setResult("Sending...");
    try {
      await onSubmit(data);
      setResult("Form Submitted Successfully");
      reset();
      setTimeout(() => setResult(""), 10000); // Clear result after 10 seconds
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setLoading(false); // Reset loading after submission
    }
  };

  return (
    <Title
      pageId={"contact"}
      pageHeader={"Connect with me"}
      subHeader={"Get in touch"}
      pageDescription={
        "I'd love to hear from you! I’m always open to new opportunities and collaborations. Whether you have a project idea or just want to connect, feel free to reach out! please use the form below"
      }
      pageBg
    >
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={handleSubmit(handleFormSubmit)}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            {...register("Name", { required: true })}
          />
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            {...register("Email", { required: true })}
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          {...register("Message", { required: true })}
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 text-white rounded-full mx-auto duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover ${
            loading
              ? "bg-black/100 cursor-not-allowed"
              : "bg-black/80 hover:bg-black"
          }`}
          disabled={loading}
        >
          {loading ? <ScaleLoader color={isDarkMode ? "white" : "green"} /> : "Submit now"} {""}
          {loading ? (
            ""
          ) : (
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          )}
        </motion.button>
        <p
          className={`mt-4 text-center text-lg ${
            result ? "rounded-full border border-black p-3 w-1/2 mx-auto" : ""
          }`}
        >
          {result}
        </p>
      </motion.form>
    </Title>
  );
};

export default Contact;
