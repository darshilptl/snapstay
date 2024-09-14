"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
  CollapsibleTrigger,
  Collapsible,
} from "/components/ui/collaspsible.jsx";
import { motion } from "framer-motion"; // Ensure you have this icon or replace it with your preferred icon
import { FaCompass } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      {/* Navbar Declaration */}
      <motion.div
        className="bg-white dark:bg-gray-950"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }} // Slower animation
      >
        <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 lg:px-12">
          {/* Snapstay Logo  */}
          <Link className="flex items-center gap-2" href="/">
            {/* <FaCompass className="h-8 w-8 " style={{ color: "#fc5a4e" }} /> */}
            <Image
              src="/icons/snapstay.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <span className="text-xl font-semibold">SnapStay</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {/* Home Link Button  */}
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href={"/ListingsPage"}
                  >
                    Explore
                  </Link>
                </NavigationMenuLink>

                {/* Portfolio Button  */}
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href={"/"}
                  >
                    Services
                  </Link>
                </NavigationMenuLink>

                {/* Pricing Button  */}
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href={"/ListingsPage"}
                  >
                    Add Your Listings
                  </Link>
                </NavigationMenuLink>

                {/* Join Us Button  */}
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href={"/Contact"}
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Buttons  */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* Community Button  */}
            <Link href={"/SignUp"}>
              <Button variant="outline">Sign Up</Button>
            </Link>
            <Link href={"/LogIn"}>
              <Button>LogIn</Button>
            </Link>
          </div>
          {/* End Buttons  */}

          {/* Navbar Code For Small Devices */}
          <Sheet>
            {/* Toggle Menu Icon  */}
            <SheetTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            {/* Menu Option  */}
            <SheetContent side="right">
              <div className="flex h-full flex-col justify-between">
                <div className="grid gap-4 py-6">
                  {/* Service Buttons  */}
                  <Collapsible className="grid gap-4">
                    <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                      <Link href={"/ListingsPage"}>Explore</Link>
                    </CollapsibleTrigger>
                  </Collapsible>

                  {/* Portfolio Buttons  */}
                  <Link href={"#"}>
                    <Collapsible className="grid gap-4">
                      <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                        Add Your Listings
                      </CollapsibleTrigger>
                    </Collapsible>
                  </Link>

                  {/* Pricing Button  */}
                  <Link href={"/Contact"}>
                    <Collapsible className="grid gap-4">
                      <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                        Contact
                      </CollapsibleTrigger>
                    </Collapsible>
                  </Link>
                </div>

                {/* Buttons  */}
                <div className="flex flex-col gap-2 px-6 pb-6">
                  <Button variant="outline">
                    <Link href={"/SignUp"}>SignUp</Link>
                  </Button>
                  <Button>
                    <Link href={"/LogIn"}>LogIn</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </header>
      </motion.div>
      {/* End of Navbar Declaration */}
    </>
  );
};

export default Navbar;

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
