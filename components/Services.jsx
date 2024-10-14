"use client";

import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const ServicesSection = () => {
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

  const smoothHoverEffect = {
    whileHover: { scale: 1.08, transition: { type: "spring", stiffness: 300 } },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="relative overflow-hidden bg-zinc-200 dark:bg-gray-950 rounded-t-[100px] pt-16 pb-32 space-y-24"
        initial="initial"
        animate={controls}
        variants={staggerChildren}
      >
        <motion.div
          className="absolute inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[300px]"
          style={{
            background:
              "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,215,0,0.5) 100%)",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="text-left mb-20 dark:text-gray-400 text-gray-950"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl font-bold flex justify-center items-center dark:text-white text-gray-950"
            {...smoothHoverEffect} // Smoother hover interaction
          >
            Services
          </motion.h2>
          <motion.div
            className="relative mt-2 flex justify-center items-center"
            {...smoothHoverEffect}
          >
            <div className="h-1 bg-blue-400 w-1/6 rounded-lg"></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[350px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* First feature section */}
        <motion.div className="relative" variants={fadeInUp}>
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <motion.div
              className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-8 w-8 text-gray-950 dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </span>
              </motion.div>
              <div className="mt-6 relative">
                <motion.h2
                  className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white"
                  variants={fadeInUp}
                >
                  Unparalleled Services for Your Perfect Stay
                </motion.h2>
                <motion.p
                  className="mt-4 text-lg text-gray-950 dark:text-white"
                  variants={fadeInUp}
                >
                  At SnapStay, we offer more than just a place to stay – we
                  provide a seamless and personalized experience from easy
                  bookings to responsive support.
                </motion.p>
                <motion.div className="mt-6" variants={fadeInUp}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-gray-950 dark:text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700 transition-all duration-200"
                      href="#"
                    >
                      Learn More
                    </a>
                  </motion.div>
                </motion.div>
                <div
                  className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
                  style={{
                    background:
                      "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                  }}
                ></div>
                <div
                  className="absolute inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[300px]"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,215,0,0.5) 100%)",
                  }}
                ></div>
              </div>
            </motion.div>
            <motion.div
              className="mt-12 sm:mt-16 lg:mt-0"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <motion.img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/bg-3.jpg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Second feature section */}
        <motion.div className="relative" variants={fadeInUp}>
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <motion.div
              className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2"
              variants={fadeInUp}
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-8 w-8 text-gray-950 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </span>
                </motion.div>
                <div className="mt-6 relative">
                  <motion.h2
                    className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white"
                    variants={fadeInUp}
                  >
                    Safe, Secure, and Hassle-Free Payments
                  </motion.h2>
                  <motion.p
                    className="mt-4 text-lg text-gray-950 dark:text-white"
                    variants={fadeInUp}
                  >
                    At SnapStay, we prioritize your safety with secure,
                    encrypted payment processing, ensuring your personal and
                    financial information is always protected.
                  </motion.p>
                  <motion.div className="mt-6" variants={fadeInUp}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-gray-950 dark:text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700 transition-all duration-200"
                        href="#"
                      >
                        Learn More
                      </a>
                    </motion.div>
                  </motion.div>
                  <div
                    className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
                    style={{
                      background:
                        "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[300px]"
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,215,0,0.5) 100%)",
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="mt-12 sm:mt-16 lg:mt-0"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <motion.img
                  alt="Inbox user interface"
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/bg-4.jpg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ServicesSection;
