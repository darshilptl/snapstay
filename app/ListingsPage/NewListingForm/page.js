"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload } from "lucide-react";

export default function NewListingForm({ onClose, onSubmit }) {
  const [listing, setListing] = useState({
    title: "",
    description: "",
    price: "",
    country: "",
    location: "",
  });
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListing((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(listing).forEach(([key, value]) => {
      formData.append(`listing[${key}]`, value);
    });
    if (image) {
      formData.append("listing[image]", image);
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newListing = await response.json();
        onSubmit(formData);

        Swal.fire({
          title: "Success!",
          text: "Listing was created successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        onClose();
      } else {
        throw new Error("Failed to create listing");
      }
    } catch (error) {
      console.error("Error creating listing:", error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem creating the listing.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md w-full shadow-2xl overflow-y-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Create a New Listing</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {/* <X className="h-5 w-5" /> */}
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                value={listing.title}
                onChange={handleChange}
                required
                placeholder="Add a Catchy Title"
                className="mt-1 w-full px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white text-sm"
              />
            </div>
            <div>
              <Label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={listing.description}
                onChange={handleChange}
                required
                placeholder="Enter Description"
                className="mt-1 w-full px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white text-sm"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Price
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={listing.price}
                  onChange={handleChange}
                  required
                  placeholder="1200"
                  className="mt-1 w-full px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white text-sm"
                />
              </div>
              <div>
                <Label htmlFor="country" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Country
                </Label>
                <Input
                  id="country"
                  name="country"
                  value={listing.country}
                  onChange={handleChange}
                  required
                  placeholder="India"
                  className="mt-1 w-full px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white text-sm"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="location" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Location
              </Label>
              <Input
                id="location"
                name="location"
                value={listing.location}
                onChange={handleChange}
                required
                placeholder="Jaipur, Rajasthan"
                className="mt-1 w-full px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white text-sm"
              />
            </div>
            <div>
              <Label htmlFor="image" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Upload Image
              </Label>
              <div
                className={`mt-1 border-2 border-dashed rounded-md p-3 text-center ${
                  dragActive ? "border-indigo-500" : "border-gray-300 dark:border-gray-600"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Input
                  id="image"
                  name="image"
                  type="file"
                  onChange={handleImageChange}
                  required
                  accept="image/*"
                  className="hidden"
                />
                <label
                  htmlFor="image"
                  className="cursor-pointer flex flex-col items-center justify-center text-gray-500 dark:text-gray-400"
                >
                  <Upload className="w-6 h-6 mb-1" />
                  <span className="text-xs">Drag and drop or click to upload</span>
                </label>
              </div>
              {image && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{image.name}</p>}
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Listing
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}