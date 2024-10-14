"use client"

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Component() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const gradientVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-12 bg-white dark:bg-gray-950 sm:py-16 lg:py-20 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
        variants={gradientVariants}
      ></motion.div>
      <motion.div 
        className="text-left mb-20 dark:text-gray-400 text-gray-950"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-3xl font-bold flex justify-center items-center dark:text-white text-gray-950"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Testimonials
        </motion.h2>
        <motion.div 
          className="relative mt-2 flex justify-center items-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="h-1 bg-blue-400 w-1/6 rounded-lg"
            variants={{
              hidden: { width: 0 },
              visible: { width: "20%" }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
        </motion.div>
      </motion.div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <p className="text-lg font-medium text-gray-600 font-pj"></p>
            <motion.h2 
              className="mt-4 text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl xl:text-5xl font-pj"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Our happy clients say about us
            </motion.h2>
          </motion.div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <motion.div 
              className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6"
              variants={gradientVariants}
            >
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </motion.div>

            <motion.div 
              className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3"
              variants={containerVariants}
            >
              {[
                {
                  quote: "SnapStay made my vacation unforgettable with seamless booking, secure payments, and top-notch.",
                  name: "Leslie Alexander",
                  title: "Freelance React Developer",
                  avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                },
                {
                  quote: "SnapStay's effortless booking and exceptional service made my trip perfect from start to finish!",
                  name: "Jacob Jones",
                  title: "Digital Marketer",
                  avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                },
                {
                  quote: "With secure payments and outstanding support, SnapStay ensures a stress-free and luxurious stay every time",
                  name: "Jenny Wilson",
                  title: "Graphic Designer",
                  avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col overflow-hidden shadow-xl"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-900 lg:py-8 lg:px-7 rounded-lg">
                    <div className="flex-1">
                      <motion.div 
                        className="flex items-center"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className="w-5 h-5 text-[#FDB241]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            variants={{
                              hidden: { opacity: 0, scale: 0 },
                              visible: { opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </motion.div>

                      <motion.blockquote 
                        className="flex-1 mt-8"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 }
                        }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <p className="text-lg leading-relaxed text-gray-900 dark:text-white font-pj">
                          "{testimonial.quote}"
                        </p>
                      </motion.blockquote>
                    </div>

                    <motion.div 
                      className="flex items-center mt-8"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <motion.img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={testimonial.avatar}
                        alt=""
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 dark:text-white font-pj">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600 dark:text-white">
                          {testimonial.title}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}