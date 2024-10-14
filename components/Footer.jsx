"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all", once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const footerItems = [
    { text: "Explore", link: "/" },
    { text: "Portfolio", link: "https://darshilpatel.vercel.app/" },
    { text: "Contact Us", link: "/Contact" },
    { text: "Terms & Conditions", link: "/Terms-Conditions" },
    { text: "Privacy Policy", link: "/PrivacyPolicy" },
  ];

  const socialLinks = [
    {
      Icon: FaXTwitter,
      link: "https://x.com/darshilptl03?t=dtVGKJ1YYZb1WwuLRSEp1g&s=09",
    }, // Replace with your Twitter URL
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/pateldarshil__/?__pwa=1",
    }, // Replace with your Instagram URL
    { Icon: GithubIcon, link: "https://github.com/darshilptl" }, // Replace with your GitHub URL
    {
      Icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/darshil-patel-42307a257",
    }, // Replace with your LinkedIn URL
  ];

  return (
    <>
      <footer
        ref={ref}
        className="relative py-16 mt-2 w-full bg-zinc-100 dark:bg-gray-900 rounded-t-[100px]"
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0 blur-[118px] max-w-lg mx-auto sm:max-w-3xl sm:h-[400px] opacity-70"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="absolute inset-0 blur-[118px] max-w-lg mx-auto sm:max-w-3xl sm:h-[400px]"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
          <Link className="flex items-center justify-center gap-2" href="/">
            {/* <FaCompass className="h-8 w-8 " style={{ color: "#fc5a4e" }} /> */}
            <Image
              src="/icons/snapstay.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <span className="text-xl font-semibold">SnapStay</span>
          </Link>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-screen-lg mx-auto"
          >
            {/* Navigation Links */}
            <motion.ul
              variants={containerVariants}
              className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-950 dark:border-gray-100 "
            >
              {footerItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="cursor-pointer"
                >
                  <Link
                    href={item.link}
                    className="text-gray-950 dark:text-white hover:text-indigo-600 transition-all duration-300"
                  >
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Social Media Icons */}
            <motion.div
              variants={containerVariants}
              className="flex space-x-10 justify-center items-center mb-14"
            >
              {socialLinks.map(({ Icon, link }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  target="_blank" // Opens link in new tab
                  rel="noopener noreferrer" // Security best practices
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="block text-gray-900 dark:text-white transition-all duration-500 hover:text-indigo-600"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* Footer Credits */}
            <motion.span
              variants={itemVariants}
              className="text-lg text-gray-950 dark:text-white text-center block"
            >
              ©{" "}
              <Link href="/" className="hover:text-indigo-600 transition-all">
                SnapStay
              </Link>{" "}
              2024, All rights reserved.
            </motion.span>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// "use client";
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   FaTwitter,
//   FaInstagram,
//   FaFacebookF,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import { FaCompass } from "react-icons/fa6";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: "all", once: true });

//   const containerVariants = {
//     hidden: { opacity: 0, y: 100 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, staggerChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const footerItems = [
//     { text: "Explore", link: "/" },
//     { text: "Add Your Listings", link: "/LisitingsPage" },
//     { text: "Contact Us", link: "/Contact" },
//     { text: "Terms & Conditions", link: "/Terms-Conditions" },
//     { text: "Privacy Policy", link: "/PrivacyPolice" },
//   ];
//   return (
//     <>
//       <footer
//         ref={ref}
//         className="relative py-16 mt-2 w-full bg-zinc-100 dark:bg-gray-900 rounded-t-[100px]"
//       >
//         {/* Background Gradient */}
//         <div
//           className="absolute inset-0 blur-[118px] max-w-lg mx-auto sm:max-w-3xl sm:h-[400px] opacity-70"
//           style={{
//             background:
//               "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
//           }}
//         ></div>

//         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           {/* <div
//           className="absolute inset-0 blur-[118px] max-w-lg mx-auto sm:max-w-3xl sm:h-[400px]"
//           style={{
//             background:
//               "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
//           }}
//         ></div> */}
//           <Link className="flex items-center justify-center gap-2" href="/">
//             {/* <FaCompass className="h-8 w-8 " style={{ color: "#fc5a4e" }} /> */}
//             <Image
//               src="/icons/snapstay.png"
//               width={30}
//               height={30}
//               alt="Picture of the author"
//             />
//             <span className="text-xl font-semibold">SnapStay</span>
//           </Link>
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={containerVariants}
//             className="max-w-screen-lg mx-auto"
//           >
//             {/* Navigation Links */}
//             <motion.ul
//               variants={containerVariants}
//               className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-950 dark:border-gray-100 "
//             >
//               {footerItems.map((item, idx) => (
//                 <motion.li
//                   key={idx}
//                   variants={itemVariants}
//                   className="cursor-pointer"
//                 >
//                   <Link
//                     href={item.link}
//                     className="text-gray-950 dark:text-white hover:text-indigo-600 transition-all duration-300"
//                   >
//                     {item.text}
//                   </Link>
//                 </motion.li>
//               ))}
//             </motion.ul>

//             {/* Social Media Icons */}
//             <motion.div
//               variants={containerVariants}
//               className="flex space-x-10 justify-center items-center mb-14"
//             >
//               {[FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn].map(
//                 (Icon, idx) => (
//                   <motion.a
//                     key={idx}
//                     href="#"
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.2, rotate: 10 }}
//                     className="block text-gray-900 dark:text-white transition-all duration-500 hover:text-indigo-600"
//                   >
//                     <Icon size={24} />
//                   </motion.a>
//                 )
//               )}
//             </motion.div>

//             {/* Footer Credits */}
//             <motion.span
//               variants={itemVariants}
//               className="text-lg text-gray-950 dark:text-white text-center block"
//             >
//               ©{" "}
//               <Link href="/" className="hover:text-indigo-600 transition-all">
//                 SnapStay
//               </Link>{" "}
//               2024, All rights reserved.
//             </motion.span>
//           </motion.div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
