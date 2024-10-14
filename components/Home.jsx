"use client";
import React from "react";
import "/styles/globals.css";
import { motion } from "framer-motion";

// Variants for animations
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const parallax = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 2, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const HomeSection = () => {
  return (
    <>
      <section className="relative">
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>

        <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 md:px-8 relative">
          <motion.div
            className="space-y-5 max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-sm text-indigo-600 font-medium"
              variants={fadeUp}
            >
              Snap Your Perfect Stay!
            </motion.h1>
            <motion.h2
              className="text-4xl text-gray-800 dark:text-white font-extrabold mx-auto md:text-5xl"
              variants={fadeUp}
            >
              Stay Anywhere, Anytime{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                Snap Your Perfect Stay!
              </span>
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto dark:text-white text-gray-950"
              variants={fadeUp}
            >
              Where Comfort Meets Adventure – Book with SnapStay!
            </motion.p>
          </motion.div>

          {/* Image section */}
          <motion.div
            className="relative mt-14"
            variants={parallax}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src="/images/bg.jpg"
              className="w-full shadow-lg rounded-lg border"
              alt=""
              whileHover={{ scale: 1.1, rotate: 2 }} // Added zoom and slight rotation on hover
              transition={{ duration: 0.6 }}
            />
            {/* Text overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <motion.div
                className="mt-7 flex-none space-y-5 max-w-xl"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href="#"
                  className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-zinc-400"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, rotate: 5 }} // Adds rotation and scale effect on hover
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
                    What's New
                  </span>
                  <p className="text-white flex items-center">
                    Read About Our Latest Launches!
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                </motion.a>
                <motion.h1
                  className="relative top-2 text-4xl text-white font-extrabold sm:text-3xl"
                  variants={fadeUp}
                >
                  From Booking to Check-Out, Our Services Have You Covered!
                </motion.h1>
                <motion.p className="text-white" variants={fadeUp}>
                  Your Journey, Our Priority – Discover Our Exceptional
                  Services!
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
          {/* End of Image section */}
        </div>
      </section>
    </>
  );
};

export default HomeSection;
