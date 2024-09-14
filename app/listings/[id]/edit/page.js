"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { Edit, DollarSign, MapPin, Flag } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EditListing() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!listing) return;

    try {
      const formData = new FormData();
      formData.append("listing[title]", listing.title);
      formData.append("listing[description]", listing.description);
      formData.append("listing[price]", listing.price.toString());
      formData.append("listing[location]", listing.location);
      formData.append("listing[country]", listing.country);

      const response = await fetch(`/listings/${id}`, {
        method: "PUT",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update listing");
      }

      await Swal.fire({
        title: 'Success!',
        text: 'Listing updated successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      router.push(`/listings/${id}`);
    } catch (error) {
      console.error("Error updating listing:", error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to update listing: ' + error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
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
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold flex items-center gap-2">
            <Edit className="w-8 h-8 text-blue-500" />
            Edit Listing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={listing.title}
                onChange={(e) => setListing({ ...listing, title: e.target.value })}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={listing.description}
                onChange={(e) => setListing({ ...listing, description: e.target.value })}
                className="w-full"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price" className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                Price per night
              </Label>
              <Input
                type="number"
                id="price"
                value={listing.price}
                onChange={(e) => setListing({ ...listing, price: Number(e.target.value) })}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Location
              </Label>
              <Input
                id="location"
                value={listing.location}
                onChange={(e) => setListing({ ...listing, location: e.target.value })}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country" className="flex items-center gap-2">
                <Flag className="w-5 h-5 text-purple-500" />
                Country
              </Label>
              <Input
                id="country"
                value={listing.country}
                onChange={(e) => setListing({ ...listing, country: e.target.value })}
                className="w-full"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={handleSubmit} className="w-full">
            Update Listing
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
    <Footer />
    </>
  );
}