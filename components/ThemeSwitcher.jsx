"use client";

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

import Link from "next/link";

import { FaXTwitter } from "react-icons/fa6";

import { FiLinkedin } from "react-icons/fi";


const ThemeSwitcher = () => {


  const [mount, setMount] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMount(true);
  }, []);

  console.log(currentTheme);

  return mount ? (

    <div className="fixed right-5 z-[10000000000] max-lg:bottom-2.5 lg:top-1/3">

      {/* Theme Switcher Button */} 
      <button

        onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        type="button"
        className="flex h-10 w-10 p-2 items-center justify-center rounded-md border border-gray-800 text-gray-800 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-slate-300 dark:text-white"
      >

        <svg
          className="dark:hidden"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg
          className="hidden dark:block"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>

      </button>
      {/* End of Theme Switcher Button */}

      {/* Linkdin Button  */}
      <Link href={'https://www.linkedin.com/in/darshil-patel-42307a257/'}>
      <button
        type="button"
        className="flex h-10 w-10 p-2 mt-1 items-center justify-center rounded-md border border-gray-800 text-gray-800 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-slate-300 dark:text-white"
      >
         <FiLinkedin className="h-5 w-5 " />
      </button>
      </Link>
      {/* End of Linkedin Button */}

      {/* Twitter Button */}
      <Link href={'https://x.com/darshilptl03?t=dtVGKJ1YYZb1WwuLRSEp1g&s=09'}>
      <button
        type="button"
        className="flex h-10 w-10 p-2 mt-1 items-center justify-center rounded-md border border-gray-800 text-gray-800 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-slate-300 dark:text-white"
      >
         <FaXTwitter className="h-4 w-4 " />
      </button>
      </Link>
      {/* End of Twitter Button */}
 
    </div>
  ) : null;

};

export default ThemeSwitcher;
