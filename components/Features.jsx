"use client";

import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger animation when in view
  const controls = useAnimation();

  if (isInView) {
    controls.start("animate"); // Start animations when component is in view
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };


  const smoothHoverEffect = {
    whileHover: { scale: 1.08, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <>
      <motion.section
        className="lg:pt-20 pt-0 h-full"
        ref={ref} // Attach ref to the section to monitor its visibility
        initial="initial"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.div
          className="rounded-2xl bg-white dark:bg-gray-950 py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8 lg:rounded-tl-2xl lg:rounded-bl-2xl"
          variants={fadeInUp}
        >
          {/* Heading Section */}
          <motion.div
            className="text-left mb-20 dark:text-gray-400 text-gray-950"
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl font-bold flex justify-center items-center dark:text-white text-gray-950"
              {...smoothHoverEffect} // Smoother hover interaction
            >
              Features
            </motion.h2>
            <motion.div
              className="relative mt-2 flex justify-center items-center"
              {...smoothHoverEffect}
            >
              <div className="h-1 bg-blue-400 w-1/6 rounded-lg"></div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[300px]"
              style={{
                background:
                  "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,215,0,0.5) 100%)",
              }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[350px]"
              style={{
                background:
                  "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
              }}
              animate={{ opacity: [0.3, 0.7, 0.3], rotate: [0, 10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap-32">
              <motion.div
                className="w-full xl:col-span-5 lg:col-span-6"
                variants={fadeInUp}
              >
                <motion.div
                  className="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start"
                  {...smoothHoverEffect}
                >
                  <span className="bg-indigo-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3">
                    #1
                  </span>
                  <p className="dark:text-white text-gray-950">Investment</p>
                </motion.div>
                <motion.h1
                  className="py-8 text-center text-gray-950 dark:text-white font-bold font-manrope text-5xl lg:text-left leading-[70px]"
                  variants={fadeInUp}
                >
                  The new standard for{" "}
                  <motion.span
                    className="text-indigo-600"
                    whileHover={{
                      scale: 1.1,
                      color: "#4F46E5",
                      transition: { duration: 0.3 },
                    }}
                  >
                    Modern investor
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="dark:text-white text-gray-950 text-lg text-center lg:text-left"
                  variants={fadeInUp}
                >
                  When you're ready to book your next stay, effortlessly connect
                  with hosts and guests through our seamless platform.
                </motion.p>
                <motion.div
                  className="flex items-center flex-col lg:flex-row mt-5"
                  variants={staggerContainer}
                >
                  <div className="flex items-center">
                    <motion.img
                      src="https://pagedone.io/asset/uploads/1694846673.png"
                      alt="Rounded image"
                      className="border-2 border-solid border-indigo-50 rounded-full relative z-50 object-cover"
                      {...smoothHoverEffect}
                    />
                    <motion.img
                      src="https://pagedone.io/asset/uploads/1694846691.png"
                      alt="Rounded image"
                      className="border-2 border-solid border-indigo-50 rounded-full relative z-30 -ml-3 object-cover"
                      {...smoothHoverEffect}
                    />
                    <motion.img
                      src="https://pagedone.io/asset/uploads/1694846704.png"
                      alt="Rounded image"
                      className="border-2 border-solid border-indigo-50 rounded-full relative z-20 -ml-3 object-cover"
                      {...smoothHoverEffect}
                    />
                    <motion.span
                      className="text-base text-gray-950 dark:text-white font-medium lg:ml-3"
                      variants={fadeInUp}
                    >
                      +3k People have joined
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="w-full xl:col-span-7 ml-10 lg:col-span-6 block"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                  <motion.img
                    src="/images/c2.png"
                    alt="Dashboard image"
                    className="rounded-l-3xl object-cover w-[60%] lg:h-auto"
                    {...smoothHoverEffect}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default FeaturesSection;
