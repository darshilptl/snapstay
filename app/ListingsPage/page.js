
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import NewListingForm from "./NewListingForm/page";
import { motion, AnimatePresence } from "framer-motion";

export default function ListingsPage() {
  const [listings, setListings] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      }
    };

    fetchListings();
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newListing = await response.json();
        setListings((prev) => [...prev, newListing]);
        setIsFormVisible(false);
      } else {
        console.error("Failed to create listing");
      }
    } catch (error) {
      console.error("Error creating listing:", error);
    }
  };

  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>

        <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 md:px-8 relative">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 max-w-4xl mx-auto text-center"
          >
            <h1 className="text-sm text-indigo-600 font-medium">
              Welcome To SnapStay!
            </h1>
            <h2 className="text-4xl text-gray-800 dark:text-white font-extrabold mx-auto md:text-5xl">
              Choose Your Preferred Destination{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                & Discover Its Wonders
              </span>
            </h2>
            <p className="max-w-2xl mx-auto dark:text-white">
              Where Comfort Meets Adventure – Book with SnapStay!
            </p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
            >
              <Button onClick={() => setIsFormVisible(true)}>
                Create Listing
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {listings.map((listing, index) => (
                <motion.div
                  key={listing._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={`/listings/${listing._id}`}>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                      <div className="relative h-48">
                        <Image
                          src={listing.image.url}
                          alt={listing.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">
                          {listing.title}
                        </h2>
                        <p className="text-gray-600">
                          ₹{listing.price.toLocaleString("en-IN")}night
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.section>

      <AnimatePresence>
        {isFormVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <NewListingForm
              onClose={() => setIsFormVisible(false)}
              onSubmit={handleFormSubmit}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
