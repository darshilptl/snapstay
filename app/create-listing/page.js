// 'use client'

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { api } from '../api';
// import Swal from 'sweetalert2';
// import { Button } from "@/components/ui/button";

// const CreateListing = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/listings', { name, address, price: Number(price), image });
//       Swal.fire('Success', 'Listing created successfully!', 'success');
//       router.push('/');
//     } catch (error) {
//       Swal.fire('Error', 'Failed to create listing', 'error');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create a new listing</h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="name" className="sr-only">Listing Name</label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Listing Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="address" className="sr-only">Address</label>
//               <input
//                 id="address"
//                 name="address"
//                 type="text"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="price" className="sr-only ">Price</label>
//               <input
//                 id="price"
//                 name="price"
//                 type="number"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
//                 placeholder="Price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="image" className="sr-only">Image URL</label>
//               <input
//                 id="image"
//                 name="image"
//                 type="text"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-100 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Image URL"
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//               />
//             </div>
//           </div>

//           <div>
//             <Button type="submit" className="w-full">
//               Create Listing
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateListing;

// 'use client'

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { api } from '../api';
// import Swal from 'sweetalert2';
// import { Button } from "../../components/ui/button"
// import { Input } from "../../components/ui/input"
// import { Textarea } from "../../components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
// import { Label } from "@/components/ui/label";
// import { motion } from 'framer-motion';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const CreateListing = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [amenities, setAmenities] = useState('');
//   const [availableDates, setAvailableDates] = useState('');
//   const [image, setImage] = useState(null);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('address', address);
//       formData.append('price', price);
//       formData.append('description', description);
//       formData.append('amenities', JSON.stringify(amenities.split(',').map(item => item.trim())));
//       formData.append('availableDates', JSON.stringify(availableDates.split(',').map(date => new Date(date.trim()))));
//       formData.append('image', image);

//       const response = await api.post('/listings', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       Swal.fire('Success', 'Listing created successfully!', 'success');
//       router.push('/');
//     } catch (error) {
//       console.error('Error creating listing:', error);
//       Swal.fire('Error', 'Failed to create listing', 'error');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
//       <Navbar />
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
//       >
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold">Create a New Listing</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Listing Name</Label>
//                 <Input
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="address">Address</Label>
//                 <Input
//                   id="address"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="price">Price per Night</Label>
//                 <Input
//                   id="price"
//                   type="number"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea
//                   id="description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="amenities">Amenities (comma-separated)</Label>
//                 <Input
//                   id="amenities"
//                   value={amenities}
//                   onChange={(e) => setAmenities(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="availableDates">Available Dates (comma-separated)</Label>
//                 <Input
//                   id="availableDates"
//                   value={availableDates}
//                   onChange={(e) => setAvailableDates(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="image">Image</Label>
//                 <Input
//                   id="image"
//                   type="file"
//                   onChange={(e) => setImage(e.target.files[0])}
//                   required
//                   accept="image/*"
//                 />
//               </div>
//               <Button type="submit" className="w-full">
//                 Create Listing
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </motion.div>
//       <Footer />
//     </div>
//   );
// };

// export default CreateListing;

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../api";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import {
  Home,
  DollarSign,
  Image as ImageIcon,
  Loader2,
  Sun,
  Moon,
  FileText,
  Calendar,
} from "lucide-react";
import { useTheme } from "next-themes";
import Swal from "sweetalert2";
import { Textarea } from "../../components/ui/textarea";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CreateListing() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [amenities, setAmenities] = useState("");
  const [availableDates, setAvailableDates] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("address", address);
      formData.append("price", price);
      formData.append("description", description);
      formData.append(
        "amenities",
        JSON.stringify(amenities.split(",").map((item) => item.trim()))
      );
      formData.append(
        "availableDates",
        JSON.stringify(
          availableDates.split(",").map((date) => new Date(date.trim()))
        )
      );
      formData.append("image", image);

      await api.post("/listings", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire("Success", "Listing created successfully!", "success");
      router.push("/");
    } catch (error) {
      console.error("Error creating listing:", error);
      Swal.fire("Error", "Failed to create listing", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const inputFields = [
    {
      id: "name",
      label: "Listing Name",
      value: name,
      onChange: setName,
      placeholder: "Cozy Downtown Apartment",
      icon: <Home className="h-4 w-4" />,
    },
    {
      id: "address",
      label: "Address",
      value: address,
      onChange: setAddress,
      placeholder: "123 Main St, City, Country",
      icon: <Home className="h-4 w-4" />,
    },
    {
      id: "price",
      label: "Price",
      value: price,
      onChange: setPrice,
      placeholder: "1000",
      type: "number",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      id: "description",
      label: "Description",
      value: description,
      onChange: setDescription,
      placeholder: "Describe your listing...",
      icon: <FileText className="h-4 w-4" />,
      isTextarea: true,
    },
    {
      id: "amenities",
      label: "Amenities",
      value: amenities,
      onChange: setAmenities,
      placeholder: "WiFi, Pool, Parking (comma-separated)",
      icon: <Home className="h-4 w-4" />,
    },
    {
      id: "availableDates",
      label: "Available Dates",
      value: availableDates,
      onChange: setAvailableDates,
      placeholder: "YYYY-MM-DD, YYYY-MM-DD (comma-separated)",
      icon: <Calendar className="h-4 w-4" />,
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center relative p-4 transition-colors duration-500">
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[700px]"
        style={{
          background:
            "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,215,0,0.5) 100%)",
        }}
      ></div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[1050px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[350px] sm:w-[450px] bg-white dark:bg-gray-900 text-gray-950 dark:text-white shadow-xl transition-colors duration-500">
          <CardHeader>
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Create a New Listing
              </CardTitle>
            </motion.div>
            <CardDescription className="text-center text-gray-900 dark:text-gray-100">
              Fill in the details for your new property listing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence>
                {inputFields.map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Label
                      htmlFor={field.id}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {field.label}
                    </Label>
                    <div className="relative mt-1">
                      {field.isTextarea ? (
                        <Textarea
                          id={field.id}
                          required
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          placeholder={field.placeholder}
                          className="pl-10 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all duration-200"
                        />
                      ) : (
                        <Input
                          id={field.id}
                          type={field.type || "text"}
                          required
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          placeholder={field.placeholder}
                          className="pl-10 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all duration-200"
                        />
                      )}
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                        {field.icon}
                      </div>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    delay: inputFields.length * 0.1,
                  }}
                >
                  <Label
                    htmlFor="image"
                    className="text-gray-900 dark:text-gray-100"
                  >
                    Image
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="image"
                      type="file"
                      required
                      onChange={(e) => setImage(e.target.files[0])}
                      accept="image/*"
                      className="pl-10 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all duration-200"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                      <ImageIcon className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white transition-all duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create Listing"
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-center text-gray-900 dark:text-gray-100">
              Your listing will be reviewed before publishing
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
    <Footer />
    </>
  );
}
