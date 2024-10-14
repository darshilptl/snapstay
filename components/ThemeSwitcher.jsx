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

    </div>
  ) : null;

};

export default ThemeSwitcher;
