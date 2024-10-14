"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Swal from "sweetalert2";
import { useTheme } from "next-themes";
import {
  Compass,
  Contact2,
  Moon,
  PlusCircle,
  Sun,
  User2,
  LogOut,
  UserX,
} from "lucide-react";
import { api } from "../app/api";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/");
  };

  const handleDeleteAccount = async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        Swal.fire(
          "Error!",
          "You are not authorized to perform this action.",
          "error"
        );
        return;
      }

      // Use SweetAlert2 for the confirmation prompt
      Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone. Your account will be permanently deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Make the delete request with the token in the headers
          const response = await api.delete("/user", {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request
            },
          });

          if (response.status === 200) {
            Swal.fire("Deleted!", "Your account has been deleted.", "success");
            localStorage.removeItem("token");
            setIsAuthenticated(false);
            setUser(null);
            router.push("/");
          } else {
            throw new Error("Failed to delete account");
          }
        }
      });
    } catch (error) {
      console.error("Error deleting account:", error);
      Swal.fire(
        "Error!",
        "Failed to delete account. Please try again later.",
        "error"
      );
    }
  };

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
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/snapstay.png"
              width={35}
              height={35}
              alt="SnapStay Logo"
              className="rounded-full"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              SnapStay
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {/* Home Link Button  */}
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 ml-[5.2rem]"
                    href={"/ListingsPage"}
                  >
                    <Compass className="w-6 h-6 mr-2" />
                    Explore
                  </Link>
                </NavigationMenuLink>

                {/* Pricing Button  */}
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href={"https://darshilpatel.vercel.app/"}
                  >
                    <User2 className="w-5 h-5 mr-2" />
                    Portfolio
                  </Link>
                </NavigationMenuLink>

                {/* Join Us Button  */}
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href={"/contactus"}
                  >
                    <Contact2 className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Buttons  */}
          {/* <div className="hidden items-center gap-2 lg:flex"> */}
          <div className="hidden sm:ml-[-1rem] sm:flex sm:items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full mr-2"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            {isAuthenticated ? (
              <>
                <Button
                  onClick={() => router.push("/create-listing")}
                  variant="outline"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none mr-2"
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create Listing
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full "
                    >
                      <Avatar className="h-8 w-8 ">
                        <AvatarImage
                          src={user?.profilePicture || `/images/avatar2.png`}
                          alt={user?.username}
                        />
                        <AvatarFallback>
                          {user?.username?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    {/* <DropdownMenuItem onClick={() => router.push("/profile")}>
                    <User2 className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem> */}
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleDeleteAccount}>
                      <UserX className="mr-2 h-4 w-4" />
                      <span>Delete account</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button
                  onClick={() => router.push("/login")}
                  variant="outline"
                  className="mr-2"
                >
                  Login
                </Button>
                <Button
                  onClick={() => router.push("/signup")}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  Sign Up
                </Button>
              </>
            )}
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
                    <CollapsibleTrigger className="flex w-full justify-center items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                      <Compass className="w-6 h-6 mr-2" />
                      <Link href={"/ListingsPage"} className="">
                        Explore
                      </Link>
                    </CollapsibleTrigger>
                  </Collapsible>

                  {/* Portfolio Buttons  */}
                  <Link href={"#"}>
                    <Collapsible className="grid gap-4">
                      <CollapsibleTrigger className="flex w-full justify-center items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                      <User2 className="w-5 h-5 mr-2 ml-2" />
                      <Link href={"https://darshilpatel.vercel.app/"} className="">
                        Portfolio
                      </Link>
                      </CollapsibleTrigger>
                    </Collapsible>
                  </Link>

                  {/* Pricing Button  */}
                  <Link href={"/contactus"}>
                    <Collapsible className="grid gap-4">
                      <CollapsibleTrigger className="flex w-full justify-center items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                      <Contact2 className="w-5 h-5 mr-2 ml-4" />
                      <Link href={"/Contact"} className="">
                        Contact Us
                      </Link>
                      </CollapsibleTrigger>
                    </Collapsible>
                  </Link>
                </div>

                {/* Buttons  */}
                <div className="flex flex-col gap-2 px-6 pb-6">
                  {isAuthenticated ? (
                    <>
                      {/* <Button
                      variant="outline"
                      onClick={() => router.push("/profile")}
                    >
                      Profile
                    </Button> */}
                      <Button variant="outline" onClick={handleLogout}>
                        Logout
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={handleDeleteAccount}
                      >
                        Delete Account
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={() => router.push("/login")}
                        variant="outline"
                        className="mr-2"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={() => router.push("/signup")}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
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

// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import Swal from "sweetalert2";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenu,
// } from "@/components/ui/navigation-menu";
// import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import {
//   Compass,
//   Contact2,
//   Moon,
//   PlusCircle,
//   Sun,
//   User2,
//   LogOut,
//   UserX,
// } from "lucide-react";
// import { api } from "../app/api";

// const Navbar = () => {
//   const { theme, setTheme } = useTheme();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsAuthenticated(true);
//       fetchUser();
//     }
//   }, []);

//   const fetchUser = async () => {
//     try {
//       const response = await api.get("/user");
//       setUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user:", error);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//     setUser(null);
//     router.push("/");
//   };

//   const handleDeleteAccount = async () => {
//     try {
//       // Get the token from localStorage
//       const token = localStorage.getItem("token");

//       if (!token) {
//         Swal.fire(
//           "Error!",
//           "You are not authorized to perform this action.",
//           "error"
//         );
//         return;
//       }

//       // Use SweetAlert2 for the confirmation prompt
//       Swal.fire({
//         title: "Are you sure?",
//         text: "This action cannot be undone. Your account will be permanently deleted!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#d33",
//         cancelButtonColor: "#3085d6",
//         confirmButtonText: "Yes, delete it!",
//       }).then(async (result) => {
//         if (result.isConfirmed) {
//           // Make the delete request with the token in the headers
//           const response = await api.delete("/user", {
//             headers: {
//               Authorization: `Bearer ${token}`, // Include the token in the request
//             },
//           });

//           if (response.status === 200) {
//             Swal.fire("Deleted!", "Your account has been deleted.", "success");
//             localStorage.removeItem("token");
//             setIsAuthenticated(false);
//             setUser(null);
//             router.push("/");
//           } else {
//             throw new Error("Failed to delete account");
//           }
//         }
//       });
//     } catch (error) {
//       console.error("Error deleting account:", error);
//       Swal.fire(
//         "Error!",
//         "Failed to delete account. Please try again later.",
//         "error"
//       );
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white dark:bg-gray-950"
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 1, type: "spring", stiffness: 50 }}
//     >
//       <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 lg:px-12">
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/icons/snapstay.png"
//             width={40}
//             height={40}
//             alt="SnapStay Logo"
//             className="rounded-full"
//           />
//           <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
//             SnapStay
//           </span>
//         </Link>

//         <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuLink asChild>
//                 <Link
//                   className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 ml-[6.2rem]"
//                   href="/ListingsPage"
//                 >
//                   <Compass className="w-6 h-6 mr-2" />
//                   Explore
//                 </Link>
//               </NavigationMenuLink>
//               <NavigationMenuLink asChild>
//                 <Link
//                   className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
//                   href="#"
//                 >
//                   <User2 className="w-5 h-5 mr-2" />
//                   Portfolio
//                 </Link>
//               </NavigationMenuLink>
//               <NavigationMenuLink asChild>
//                 <Link
//                   className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
//                   href="/Contact"
//                 >
//                   <Contact2 className="w-5 h-5 mr-2" />
//                   Contact Us
//                 </Link>
//               </NavigationMenuLink>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </nav>

//         <div className="hidden sm:ml-[-1rem] sm:flex sm:items-center">
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             className="rounded-full mr-2"
//           >
//             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//           {isAuthenticated ? (
//             <>
//               <Button
//                 onClick={() => router.push("/create-listing")}
//                 variant="outline"
//                 className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none mr-2"
//               >
//                 <PlusCircle className="w-4 h-4 mr-2" />
//                 Create Listing
//               </Button>
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     className="relative h-8 w-8 rounded-full "
//                   >
//                     <Avatar className="h-8 w-8 ">
//                       <AvatarImage
//                         src={user?.profilePicture || `/images/avatar2.png`}
//                         alt={user?.username}
//                       />
//                       <AvatarFallback>
//                         {user?.username?.charAt(0).toUpperCase()}
//                       </AvatarFallback>
//                     </Avatar>
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-56" align="end" forceMount>
//                   {/* <DropdownMenuItem onClick={() => router.push("/profile")}>
//                     <User2 className="mr-2 h-4 w-4" />
//                     <span>Profile</span>
//                   </DropdownMenuItem> */}
//                   <DropdownMenuItem onClick={handleLogout}>
//                     <LogOut className="mr-2 h-4 w-4" />
//                     <span>Log out</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem onClick={handleDeleteAccount}>
//                     <UserX className="mr-2 h-4 w-4" />
//                     <span>Delete account</span>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </>
//           ) : (
//             <>
//               <Button
//                 onClick={() => router.push("/login")}
//                 variant="outline"
//                 className="mr-2"
//               >
//                 Login
//               </Button>
//               <Button
//                 onClick={() => router.push("/signup")}
//                 className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
//               >
//                 Sign Up
//               </Button>
//             </>
//           )}
//         </div>

//         <Sheet>
//           <SheetTrigger asChild>
//             <Button className="lg:hidden" size="icon" variant="outline">
//               <MenuIcon className="h-6 w-6" />
//               <span className="sr-only">Toggle navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="right">
//             <div className="flex h-full flex-col justify-between">
//               <div className="grid gap-4 py-6">
//                 <Link
//                   href="/ListingsPage"
//                   className="flex w-full items-center text-lg font-semibold"
//                 >
//                   Explore
//                 </Link>
//                 <Link
//                   href="#"
//                   className="flex w-full items-center text-lg font-semibold"
//                 >
//                   Add Your Listings
//                 </Link>
//                 <Link
//                   href="/Contact"
//                   className="flex w-full items-center text-lg font-semibold"
//                 >
//                   Contact
//                 </Link>
//               </div>
//               <div className="flex flex-col gap-2 px-6 pb-6">
//                 {isAuthenticated ? (
//                   <>
//                     <Button
//                       variant="outline"
//                       onClick={() => router.push("/profile")}
//                     >
//                       Profile
//                     </Button>
//                     <Button variant="outline" onClick={handleLogout}>
//                       Logout
//                     </Button>
//                     <Button variant="destructive" onClick={handleDeleteAccount}>
//                       Delete Account
//                     </Button>
//                   </>
//                 ) : (
//                   <>
//                     <Button
//                       variant="outline"
//                       onClick={() => router.push("/signup")}
//                     >
//                       Sign Up
//                     </Button>
//                     <Button onClick={() => router.push("/login")}>Login</Button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </header>
//     </motion.div>
//   );
// };

// export default Navbar;

// function MenuIcon(props) {
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
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   );
// }
