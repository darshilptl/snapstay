// 'use client'

// import React, { useState, useEffect } from "react";
// import { useRouter } from 'next/navigation';
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { api, setAuthToken } from "../api";
// import Swal from 'sweetalert2';
// import { motion, AnimatePresence } from "framer-motion";
// import { MapPin, DollarSign, Star, Calendar, Eye } from "lucide-react";

// const ListingsPage = () => {
//   const [listings, setListings] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setAuthToken(token);
//       setIsAuthenticated(true);
//     }
//     fetchListings();
//   }, []);

//   const fetchListings = async () => {
//     try {
//       const response = await api.get('/listings');
//       setListings(response.data);
//     } catch (error) {
//       console.error('Error fetching listings:', error);
//     }
//   };

//   const handleCreateListing = () => {
//     if (!isAuthenticated) {
//       Swal.fire({
//         title: 'Authentication Required',
//         text: 'Please sign up or log in to create a listing.',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Sign Up',
//         cancelButtonText: 'Log In',
//       }).then((result) => {
//         if (result.isConfirmed) {
//           router.push('/signup');
//         } else if (result.dismiss === Swal.DismissReason.cancel) {
//           router.push('/login');
//         }
//       });
//     } else {
//       router.push('/create-listing');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="relative">
//         <div
//           className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
//           style={{
//             background:
//               "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
//           }}
//         ></div>

//         <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 md:px-8 relative">
//           <div className="space-y-5 max-w-4xl mx-auto text-center">
//             <h1 className="text-sm text-indigo-600 font-medium">
//               Welcome To SnapStay!
//             </h1>
//             <h2 className="text-4xl text-gray-800 dark:text-white font-extrabold mx-auto md:text-5xl">
//               Choose Your Preferred Destination{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
//                 & Discover Its Wonders
//               </span>
//             </h2>
//             <p className="max-w-2xl mx-auto dark:text-white">
//               Where Comfort Meets Adventure – Book with SnapStay!
//             </p>
//             <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
//               <Button onClick={handleCreateListing}>Create Listing</Button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12">
//         <AnimatePresence>
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {listings.map((listing) => (
//               <motion.div
//                 key={listing._id}
//                 className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="relative">
//                   <img src={listing.image} alt={listing.name} className="w-full h-56 object-cover" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 opacity-0 hover:opacity-100">
//                   </div>
//                     <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
//                       <div className="flex items-center space-x-2">
//                         <Star className="w-5 h-5 text-yellow-400" />
//                         <span className="text-white font-semibold">4.8</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Calendar className="w-5 h-5 text-white" />
//                         <span className="text-white font-semibold">Available</span>
//                       </div>
//                     </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{listing.name}</h3>
//                   <div className="flex items-center mb-2 text-gray-600 dark:text-gray-300">
//                     <MapPin className="w-4 h-4 mr-1" />
//                     <p className="text-sm">{listing.address}</p>
//                   </div>
//                   <div className="flex items-center mb-4 text-indigo-600 dark:text-indigo-400 font-bold">
//                     <DollarSign className="w-5 h-5 mr-1" />
//                     <p>${listing.price} / night</p>
//                   </div>
//                   <Button
//                     className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 flex items-center justify-center"
//                     onClick={() => router.push(`/listings/${listing._id}`)}
//                   >
//                     <Eye className="w-4 h-4 mr-2" />
//                     View Details
//                   </Button>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ListingsPage;

// 'use client'

// import React, { useState, useEffect } from "react";
// import { useRouter } from 'next/navigation';
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Pagination } from "@/components/ui/pagination";
// import { api, setAuthToken } from "../api";
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';
// import { Star, MapPin, DollarSign } from 'lucide-react';

// const ListingsPage = () => {
//   const [listings, setListings] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages,
//  setTotalPages] = useState(1);
//   const [search, setSearch] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setAuthToken(token);
//       setIsAuthenticated(true);
//     }
//     fetchListings();
//   }, [currentPage, search]);

//   const fetchListings = async () => {
//     try {
//       const response = await api.get('/listings', {
//         params: { page: currentPage, limit: 9, search },
//       });
//       setListings(response.data.listings);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error('Error fetching listings:', error);
//       Swal.fire('Error', 'Failed to fetch listings', 'error');
//     }
//   };

//   const handleCreateListing = () => {
//     if (!isAuthenticated) {
//       Swal.fire({
//         title: 'Authentication Required',
//         text: 'Please sign up or log in to create a listing.',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Sign Up',
//         cancelButtonText: 'Log In',
//       }).then((result) => {
//         if (result.isConfirmed) {
//           router.push('/signup');
//         } else if (result.dismiss === Swal.DismissReason.cancel) {
//           router.push('/login');
//         }
//       });
//     } else {
//       router.push('/create-listing');
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setCurrentPage(1);
//     fetchListings();
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="relative">
//         <div
//           className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
//           style={{
//             background:
//               "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
//           }}
//         ></div>

//         <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 md:px-8 relative">
//           <div className="space-y-5 max-w-4xl mx-auto text-center">
//             <h1 className="text-sm text-indigo-600 font-medium">
//               Welcome To SnapStay!
//             </h1>
//             <h2 className="text-4xl text-gray-800 dark:text-white font-extrabold mx-auto md:text-5xl">
//               Choose Your Preferred Destination{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
//                 & Discover Its Wonders
//               </span>
//             </h2>
//             <p className="max-w-2xl mx-auto dark:text-white">
//               Where Comfort Meets Adventure – Book with SnapStay!
//             </p>
//             <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
//               <Button onClick={handleCreateListing}>Create Listing</Button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="max-w-screen-xl mx-auto px-4 py-8">
//         <form onSubmit={handleSearch} className="mb-8">
//           <div className="flex gap-2">
//             <Input
//               type="text"
//               placeholder="Search listings..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <Button type="submit">Search</Button>
//           </div>
//         </form>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {listings.map((listing) => (
//             <motion.div
//               key={listing._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                 <div className="relative">
//                   <img src={listing.image} alt={listing.name} className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-2">
//                     <Star className="text-yellow-400" size={20} />
//                     <span className="text-sm font-semibold">4.5</span>
//                   </div>
//                 </div>
//                 <CardHeader>
//                   <CardTitle className="text-xl">{listing.name}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
//                     <MapPin size={16} className="mr-1" />
//                     <p className="text-sm">{listing.address}</p>
//                   </div>
//                   <div className="flex items-center text-gray-700 dark:text-gray-300">
//                     <DollarSign size={16} className="mr-1" />
//                     <p className="text-lg font-semibold">{listing.price} / night</p>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button onClick={() => router.push(`/listings/${listing._id}`)} className="w-full">
//                     View Details
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ListingsPage;

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { api, setAuthToken } from "../api";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  DollarSign,
  Search,
  Calendar,
  Wifi,
  Tv,
  Coffee,
} from "lucide-react";
import { useTheme } from "next-themes";

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
    }
    fetchListings();
  }, [currentPage]);

  const fetchListings = async () => {
    try {
      const response = await api.get("/listings", {
        params: { page: currentPage, limit: 9, search },
      });
      setListings(response.data.listings);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching listings:", error);
      Swal.fire("Error", "Failed to fetch listings", "error");
    }
  };

  const handleCreateListing = () => {
    if (!isAuthenticated) {
      Swal.fire({
        title: "Authentication Required",
        text: "Please sign up or log in to create a listing.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sign Up",
        cancelButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/signup");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          router.push("/login");
        }
      });
    } else {
      router.push("/create-listing");
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    await fetchListings();
  };

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 2) {
      try {
        const response = await api.get("/listings/suggestions", {
          params: { search: value },
        });
        setSearchSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
    } else {
      setSearchSuggestions([]);
    }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <section className="relative bg-white dark:bg-gray-950 min-h-screen">
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
       <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 dark:text-gray-300 md:px-8">
      <motion.div
        className="space-y-5 max-w-4xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-sm text-indigo-600 font-medium"
          variants={fadeUp}
        >
          Welcome To SnapStay!
        </motion.h1>

        <motion.h2
          className="text-4xl text-gray-800 dark:text-white font-extrabold mx-auto md:text-5xl"
          variants={fadeUp}
        >
          Choose Your Preferred Destination{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
            & Discover Its Wonders
          </span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-gray-950 dark:text-white"
          variants={fadeUp}
        >
          Where Comfort Meets Adventure – Book with SnapStay!
        </motion.p>

        {/* Search form */}
        <motion.form
          onSubmit={handleSearch}
          className="mb-8 relative flex justify-center items-center"
          variants={fadeIn}
        >
          <motion.div className="flex gap-2" initial="hidden" animate="visible">
            <motion.div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search listings..."
                value={search}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 mr-5 w-full"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Search
              </Button>
            </motion.div>
          </motion.div>

          {/* Suggestions dropdown */}
          {searchSuggestions.length > 0 && (
            <motion.ul
              className="absolute z-10 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg mt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {searchSuggestions.map((suggestion) => (
                <li
                  key={suggestion._id}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    setSearch(suggestion.name);
                    setSearchSuggestions([]);
                  }}
                >
                  {suggestion.name}
                </li>
              ))}
            </motion.ul>
          )}
        </motion.form>
      </motion.div>
    </div>
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <AnimatePresence className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listings.map((listing, index) => (
                <motion.div
                  key={listing._id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="relative hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900">
                    <div
                      className="absolute inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[300px]"
                      style={{
                        background:
                          "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,215,0,0.5) 100%)",
                      }}
                    ></div>
                    {/* Original Image Section */}
                    <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl">
                      <img
                        src={listing.image}
                        alt={listing.name}
                        className="w-full h-56 object-cover transition-transform transform hover:scale-110"
                      />
                      {/* Retaining Star Rating */}
                      <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                        <Star className="text-yellow-400" size={20} />
                        <span className="text-sm dark:text-white text-gray-950 font-semibold">
                          4.5
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        <h3 className="text-xl font-bold text-white">
                          {listing.name}
                        </h3>
                      </div>
                    </div>

                    {/* Updated Content Section following Inspired UI */}
                    <CardContent className="p-6 relative">
                      <div
                        className="absolute inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[300px]"
                        style={{
                          background:
                            "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,215,0,0.5) 100%)",
                        }}
                      ></div>

                      <p className="block inline-bfont-sans text-base font-semibold leading-relaxed text-gray-800 dark:text-white mb-4">
                        The place is located at{" "}
                        <p className="flex items-center">
                          <MapPin
                            size={16}
                            className="mr-1 dark:text-white text-gray-950"
                          />
                          {listing.address}
                        </p>
                        <span className="font-semibold text-gray-900 dark:text-gray-300"></span>
                        It offers great amenities and is available for booking.
                      </p>

                      {/* Flex Row for Price and Rating */}
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold  dark:text-white">
                          ${listing.price} / night
                        </span>
                        <span className="text-yellow-500 flex items-center">
                          {/* Retaining Star Icons */}
                          {Array.from({ length: 5 }, (_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09L5.16 12.39 0 7.91l6.12-.54L10 0l3.88 7.37L20 7.91l-5.16 4.48L15.878 18z" />
                            </svg>
                          ))}
                        </span>
                      </div>

                      {/* Updated Available Dates Layout */}
                      <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar
                          size={16}
                          className="mr-1 dark:text-white text-gray-950"
                        />
                        <p className="font-semibold dark:text-white text-gray-950">
                          Available:{" "}
                          <span className="text-gray-900 dark:text-gray-300">
                            {new Date(
                              listing.availableDates[0]
                            ).toLocaleDateString()}{" "}
                            -{" "}
                            {new Date(
                              listing.availableDates[
                                listing.availableDates.length - 1
                              ]
                            ).toLocaleDateString()}
                          </span>
                        </p>
                      </div>

                      {/* Updated Icons Layout */}
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <p className="flex items-center">
                          <Wifi
                            size={16}
                            className="mr-1 dark:text-white text-gray-950"
                          />
                          <span className="font-semibold dark:text-white text-gray-950">
                            Free Wifi
                          </span>
                        </p>
                        <p className="flex items-center">
                          <Tv
                            size={16}
                            className="mr-1 dark:text-white text-gray-950"
                          />
                          <span className="font-semibold dark:text-white text-gray-950">
                            TV
                          </span>
                        </p>
                        <p className="flex items-center">
                          <Coffee
                            size={17}
                            className="mr-1 dark:text-white text-gray-950"
                          />
                          <span className="font-semibold dark:text-white text-gray-950">
                            Coffee
                          </span>
                        </p>
                      </div>
                      <CardFooter className="relative top-5  overflow-hidden ">
                        <Button
                          onClick={() =>
                            router.push(`/listings/${listing._id}`)
                          }
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </CardContent>

                    {/* Footer with Button */}
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* Pagination Section */}
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ListingsPage;
