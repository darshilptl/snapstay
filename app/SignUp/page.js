"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const SignUp = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
        credentials: "include",
      });

      if (response.ok) {
        router.push("/ListingsPage");
      } else {
        const data = await response.json();
        console.error("Signup failed:", data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid min-h-[100dvh] w-full grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block"
        >
          <img
            alt="Signup Image"
            className="h-full w-full object-cover rounded-lg"
            height={1080}
            src="/images/login-img.jpg"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width={1920}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-md space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                Sign Up
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                Create your account
              </p>
            </motion.div>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="username"
                >
                  Username
                </Label>
                <div className="mt-1">
                  <Input
                    autoComplete="username"
                    className="block w-full appearance-none rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-800"
                    id="username"
                    name="username"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="email"
                >
                  Email address
                </Label>
                <div className="mt-1">
                  <Input
                    autoComplete="email"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-800"
                    id="email"
                    name="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="password"
                >
                  Password
                </Label>
                <div className="mt-1">
                  <Input
                    autoComplete="new-password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-800"
                    id="password"
                    name="password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Button
                  className="flex w-full justify-center rounded-md border border-gray-200 border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-800"
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign up
                </Button>
              </motion.div>
            </motion.form>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              <Button
                className="flex w-full items-center justify-center rounded-md border  border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:border-gray-800"
                variant="outline"
                disabled
              >
                <ChromeIcon className="mr-2 h-5 w-5" />
                Google
              </Button>
              <Button
                className="flex w-full items-center justify-center rounded-md border  border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:border-gray-800"
                variant="outline"
                disabled
              >
                <GithubIcon className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="text-center text-sm text-gray-600 dark:text-gray-400"
            >
              Already have an account?{" "}
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href={"/LogIn"}
              >
                Sign in
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// "use client";
// import React from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

// const SignUp = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="grid min-h-[100dvh] w-full grid-cols-1 lg:grid-cols-2">
//         <div className="hidden lg:block">
//           <img
//             alt="Signup Image"
//             className="h-full w-full object-cover rounded-lg"
//             height={1080}
//             src="/images/login-img.jpg"
//             style={{
//               aspectRatio: "1920/1080",
//               objectFit: "cover",
//             }}
//             width={1920}
//           />
//         </div>
//         <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
//           <div className="w-full max-w-md space-y-4">
//             <div>
//               <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
//               Sign Up
//               </h2>
//               <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
//                 Create your account
//               </p>
//             </div>
//             <form action="#" className="space-y-6" method="POST">
//               <div>
//                 <Label
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//                   htmlFor="username"
//                 >
//                   Username
//                 </Label>
//                 <div className="mt-1">
//                   <Input
//                     autoComplete="username"
//                     className="block w-full appearance-none rounded-md border border-gray-200  px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-800"
//                     id="username"
//                     name="username"
//                     required
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Label
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//                   htmlFor="email"
//                 >
//                   Email address
//                 </Label>
//                 <div className="mt-1">
//                   <Input
//                     autoComplete="email"
//                     className="block w-full appearance-none rounded-md border  border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-800"
//                     id="email"
//                     name="email"
//                     required
//                     type="email"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Label
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//                   htmlFor="password"
//                 >
//                   Password
//                 </Label>
//                 <div className="mt-1">
//                   <Input
//                     autoComplete="current-password"
//                     className="block w-full appearance-none rounded-md border  border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-800"
//                     id="password"
//                     name="password"
//                     required
//                     type="password"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Button
//                   className="flex w-full justify-center rounded-md border border-gray-200 border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-800"
//                   type="submit"
//                 >
//                   Sign up
//                 </Button>
//               </div>
//             </form>
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300 dark:border-gray-700" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
//                   Or continue with
//                 </span>
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-3">
//               <Button
//                 className="flex w-full items-center justify-center rounded-md border  border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:border-gray-800"
//                 variant="outline"
//               >
//                 <ChromeIcon className="mr-2 h-5 w-5" />
//                 Google
//               </Button>
//               <Button
//                 className="flex w-full items-center justify-center rounded-md border  border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:border-gray-800"
//                 variant="outline"
//               >
//                 <GithubIcon className="mr-2 h-5 w-5" />
//                 GitHub
//               </Button>
//             </div>
//             <div className="text-center text-sm text-gray-600 dark:text-gray-400">
//               Already have an account?
//               <Link
//                 className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
//                 href={"/LogIn"}
//               >
//                 Sign in
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default SignUp;
// function ChromeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <circle cx="12" cy="12" r="4" />
//       <line x1="21.17" x2="12" y1="8" y2="8" />
//       <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
//       <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
//     </svg>
//   );
// }

// function GithubIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//       <path d="M9 18c-4.51 2-5-2-7-2" />
//     </svg>
//   );
// }
