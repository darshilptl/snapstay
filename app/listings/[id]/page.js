"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { MapPin, DollarSign, User, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ListingDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${id}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setListing(data);
      } catch (error) {
        console.error("Failed to fetch listing:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchListing();
    }
  }, [id]);

  const handleEdit = () => {
    router.push(`/listings/${id}/edit`);
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this listing!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${id}`, {
          method: "DELETE",
          credentials: "include",
        });

        if (response.ok) {
          await Swal.fire(
            "Deleted!",
            "Your listing has been deleted.",
            "success"
          );
          router.push("/ListingsPage");
        } else {
          throw new Error("Failed to delete listing");
        }
      } catch (error) {
        console.error("Error deleting listing:", error);
        await Swal.fire("Error!", "Failed to delete the listing.", "error");
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-64 w-full mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-2" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent>
            <p className="text-center text-gray-500">Listing not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              {listing.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={listing.image.url}
                alt={listing.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <User
                    className="text-blue-500 dark:text-blue-300"
                    size={24}
                  />
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-300 font-semibold">
                      Owner
                    </p>
                    <p className="text-lg font-bold text-blue-800 dark:text-blue-100">
                      {listing.owner?.username || "Unknown"}
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-green-50 dark:bg-green-900 p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <DollarSign
                    className="text-green-500 dark:text-green-300"
                    size={24}
                  />
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-300 font-semibold">
                      Price per night
                    </p>
                    <p className="text-lg font-bold text-green-800 dark:text-green-100">
                      ₹{listing.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg shadow-md"
            >
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-purple-500 dark:text-purple-300 mt-1"
                  size={24}
                />
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-300 font-semibold">
                    Location
                  </p>
                  <p className="text-lg font-bold text-purple-800 dark:text-purple-100">
                    {listing.location}
                  </p>
                  <Badge variant="secondary" className="mt-2">
                    {listing.country}
                  </Badge>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start space-x-3">
                <Info
                  className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-2">
                    Description
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {listing.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </CardContent>
          <CardFooter className="space-x-4">
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={handleDelete} variant="destructive">
              Delete
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <Footer />
    </>
  );
}
