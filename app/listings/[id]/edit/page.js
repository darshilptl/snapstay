// 'use client'

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { api } from '../../../api';
// import Swal from 'sweetalert2';
// import { Button } from "@/components/ui/button";

// const EditListing = ({ params }) => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const router = useRouter();
//   const { id } = params;

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     }
//     fetchListing();
//   }, [id]);

//   const fetchListing = async () => {
//     try {
//       const response = await api.get(`/listings/${id}`);
//       const { name, address, price, image } = response.data;
//       setName(name);
//       setAddress(address);
//       setPrice(price);
//       setImage(image);
//     } catch (error) {
//       console.error('Error fetching listing:', error);
//       Swal.fire('Error', 'Failed to fetch listing details', 'error');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.put(`/listings/${id}`, { name, address, price: Number(price), image });
//       Swal.fire('Success', 'Listing updated successfully!', 'success');
//       router.push(`/listings/${id}`);
//     } catch (error) {
//       console.error('Error updating listing:', error);
//       if (error.response && error.response.status === 401) {
//         Swal.fire('Error', 'You are not authorized to update this listing', 'error');
//       } else {
//         Swal.fire('Error', 'Failed to update listing', 'error');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Edit listing</h2>
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
//               <label htmlFor="price" className="sr-only">Price</label>
//               <input
//                 id="price"
//                 name="price"
//                 type="number"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
//                 className="appearance-none rounded-none relative block w-full  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Image URL"
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//               />
//             </div>
//           </div>

//           <div>
//             <Button type="submit" className="w-full">
//               Update Listing
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditListing;

// 'use client'

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { api } from '../../../api';
// import Swal from 'sweetalert2';
// import { Button } from "../../../../components/ui/button"
// import { Input } from "../../../../components/ui/input"
// import { Label } from "../../../../components/ui/label"
// import { Textarea } from "../../../../components/ui/textarea"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from 'framer-motion';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const EditListing = ({ params }) => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [amenities, setAmenities] = useState('');
//   const [availableDates, setAvailableDates] = useState('');
//   const [image, setImage] = useState(null);
//   const [currentImage, setCurrentImage] = useState('');
//   const router = useRouter();
//   const { id } = params;

//   useEffect(() => {
//     fetchListing();
//   }, [id]);

//   const fetchListing = async () => {
//     try {
//       const response = await api.get(`/listings/${id}`);
//       const { name, address, price, description, amenities, availableDates, image } = response.data;
//       setName(name);
//       setAddress(address);
//       setPrice(price);
//       setDescription(description);
//       setAmenities(amenities.join(', '));
//       setAvailableDates(availableDates.map(date => new Date(date).toISOString().split('T')[0]).join(', '));
//       setCurrentImage(image);
//     } catch (error) {
//       console.error('Error fetching listing:', error);
//       Swal.fire('Error', 'Failed to fetch listing details', 'error');
//     }
//   };

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
//       if (image) {
//         formData.append('image', image);
//       }

//       await api.put(`/listings/${id}`, formData, {
//         headers: {
//           'Content-Type':
//  'multipart/form-data',
//         },
//       });
//       Swal.fire('Success', 'Listing updated successfully!', 'success');
//       router.push(`/listings/${id}`);
//     } catch (error) {
//       console.error('Error updating listing:', error);
//       Swal.fire('Error', 'Failed to update listing', 'error');
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
//             <CardTitle className="text-2xl font-bold">Edit Listing</CardTitle>
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
//                 <Label htmlFor="image">Current Image</Label>
//                 <img src={currentImage} alt="Current listing image" className="w-full h-48 object-cover rounded-md" />
//                 <Input
//                   id="image"
//                   type="file"
//                   onChange={(e) => setImage(e.target.files[0])}
//                   accept="image/*"
//                 />
//               </div>
//               <Button type="submit" className="w-full">
//                 Update Listing
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </motion.div>
//       <Footer />
//     </div>
//   );
// };

// export default EditListing;

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../../api";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../../../../components/ui/card";
import { Skeleton } from "../../../../components/ui/skeleton";
import Swal from "sweetalert2";
import {
  Home,
  DollarSign,
  Image,
  Sun,
  Moon,
  FileText,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EditListing = ({ params }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [amenities, setAmenities] = useState("");
  const [availableDates, setAvailableDates] = useState("");
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = params;
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    fetchListing();
  }, [id]);

  const fetchListing = async () => {
    try {
      const response = await api.get(`/listings/${id}`);
      const {
        name,
        address,
        price,
        description,
        amenities,
        availableDates,
        image,
      } = response.data;
      setName(name);
      setAddress(address);
      setPrice(price);
      setDescription(description);
      setAmenities(amenities.join(", "));
      setAvailableDates(
        availableDates
          .map((date) => new Date(date).toISOString().split("T")[0])
          .join(", ")
      );
      setCurrentImage(image);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching listing:", error);
      Swal.fire("Error", "Failed to fetch listing details", "error");
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      if (image) {
        formData.append("image", image);
      }

      await api.put(`/listings/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire("Success", "Listing updated successfully!", "success");
      router.push(`/listings/${id}`);
    } catch (error) {
      console.error("Error updating listing:", error);
      Swal.fire("Error", "Failed to update listing", "error");
    }
  };

  const inputFields = [
    {
      id: "name",
      label: "Listing Name",
      value: name,
      onChange: setName,
      icon: <Home className="h-4 w-4" />,
    },
    {
      id: "address",
      label: "Address",
      value: address,
      onChange: setAddress,
      icon: <Home className="h-4 w-4" />,
    },
    {
      id: "price",
      label: "Price per Night",
      value: price,
      onChange: setPrice,
      type: "number",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      id: "description",
      label: "Description",
      value: description,
      onChange: setDescription,
      icon: <FileText className="h-4 w-4" />,
      isTextarea: true,
    },
    {
      id: "amenities",
      label: "Amenities (comma-separated)",
      value: amenities,
      onChange: setAmenities,
      icon: <Home className="h-4 w-4" />,
    },
    {
      id: "availableDates",
      label: "Available Dates (comma-separated)",
      value: availableDates,
      onChange: setAvailableDates,
      icon: <Calendar className="h-4 w-4" />,
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-8 w-3/4" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-4 w-1/2" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 relative">
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="bg-white dark:bg-gray-900 text-gray-950 dark:text-white shadow">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                  Edit Listing
                </CardTitle>
              </div>
              <CardDescription>
                Update the details of your listing
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
                      className="space-y-2"
                    >
                      <Label
                        htmlFor={field.id}
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {field.label}
                      </Label>
                      <div className="relative">
                        {field.isTextarea ? (
                          <Textarea
                            id={field.id}
                            required
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="pl-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all duration-200"
                          />
                        ) : (
                          <Input
                            id={field.id}
                            type={field.type || "text"}
                            required
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="pl-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all duration-200"
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
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="image"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Current Image
                    </Label>
                    <img
                      src={currentImage}
                      alt="Current listing image"
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <Input
                      id="image"
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      accept="image/*"
                      className="pl-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all duration-200"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                      <Image className="h-4 w-4" />
                    </div>
                  </motion.div>
                </AnimatePresence>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200"
                  >
                    Update Listing
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default EditListing;
