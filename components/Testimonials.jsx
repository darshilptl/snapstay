"use client"

import React, { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Testimonials = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-12 bg-white dark:bg-gray-950 sm:py-16 lg:py-20 relative"
    >
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <motion.div variants={itemVariants} className="text-left mb-20 dark:text-gray-400 text-gray-950">
        <h2 className="text-3xl font-bold flex justify-center items-center dark:text-white text-gray-950">
          Testimonials
        </h2>
        <div className="relative mt-2 flex justify-center items-center">
          <div className="h-1 bg-blue-400 w-1/6 rounded-lg"></div>
        </div>
      </motion.div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj"></p>
            <h2 className="mt-4 text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </motion.div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <motion.div
              variants={containerVariants}
              className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3"
            >
              {[
                {
                  quote: "SnapStay made my vacation unforgettable with seamless booking, secure payments, and top-notch.",
                  author: "Leslie Alexander",
                  role: "Freelance React Developer",
                  avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                },
                {
                  quote: "SnapStay's effortless booking and exceptional service made my trip perfect from start to finish!",
                  author: "Jacob Jones",
                  role: "Digital Marketer",
                  avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                },
                {
                  quote: "With secure payments and outstanding support, SnapStay ensures a stress-free and luxurious stay every time",
                  author: "Jenny Wilson",
                  role: "Graphic Designer",
                  avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                }
              ].map((testimonial, index) => (
                <motion.div key={index} variants={itemVariants} className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-700 lg:py-8 lg:px-7 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-[#FDB241]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 dark:text-white font-pj">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={testimonial.avatar}
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 dark:text-white font-pj">
                          {testimonial.author}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600 dark:text-white">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonials