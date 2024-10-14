// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { api } from "../../api";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "next-themes";
// import { Button } from "../../../components/ui/button";
// import { Card, CardContent } from "../../../components/ui/card";
// import { Badge } from "../../../components/ui/badge";
// import { Skeleton } from "../../../components/ui/skeleton";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../../../components/ui/dialog";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
// import { Calendar } from "../../../components/ui//calendar";
// import { ScrollArea } from "../../../components/ui//scroll-area";
// import { Sun, Moon, Edit, Trash2, User, MapPin, DollarSign, Calendar as CalendarIcon, Star, Info } from "lucide-react";
// import Swal from "sweetalert2";

// const ListingDetails = ({ params }) => {
//   const [listing, setListing] = useState(null);
//   const [isOwner, setIsOwner] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const router = useRouter();
//   const { id } = params;
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     }
//     fetchListing();
//   }, [id]);

//   const fetchListing = async () => {
//     try {
//       const response = await api.get(`/listings/${id}`);
//       setListing(response.data);
//       const token = localStorage.getItem("token");
//       if (token) {
//         const payload = JSON.parse(atob(token.split(".")[1]));
//         setIsOwner(payload.id === response.data.user?._id);
//       }
//     } catch (error) {
//       console.error("Error fetching listing:", error);
//       Swal.fire("Error", "Failed to fetch listing details", "error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await api.delete(`/listings/${id}`);
//       Swal.fire("Success", "Listing deleted successfully!", "success");
//       router.push("/");
//     } catch (error) {
//       console.error("Error deleting listing:", error);
//       if (error.response && error.response.status === 401) {
//         Swal.fire("Error", "You are not authorized to delete this listing", "error");
//       } else {
//         Swal.fire("Error", "Failed to delete listing", "error");
//       }
//     }
//   };

//   const MotionCard = motion(Card);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
//         <MotionCard
//           className="max-w-4xl mx-auto overflow-hidden"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Skeleton className="w-full h-96" />
//           <CardContent className="p-6">
//             <Skeleton className="h-8 w-3/4 mb-4" />
//             <Skeleton className="h-4 w-1/2 mb-4" />
//             <Skeleton className="h-6 w-1/4 mb-6" />
//             <Skeleton className="h-4 w-3/4 mb-6" />
//           </CardContent>
//         </MotionCard>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
//       <MotionCard
//         className="max-w-4xl mx-auto overflow-hidden"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.div
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="relative"
//         >
//           <img
//             src={listing.image}
//             alt={listing.name}
//             className="w-full h-96 object-cover"
//           />
//           <motion.div
//             className="absolute top-4 right-4"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//           </motion.div>
//         </motion.div>
//         <CardContent className="p-8">
//           <div className="flex justify-between items-start mb-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
//                 {listing.name}
//               </h1>
//               <div className="flex items-center text-gray-600 dark:text-gray-300">
//                 <MapPin className="mr-2 h-4 w-4" />
//                 <p>{listing.address}</p>
//               </div>
//             </motion.div>
//             <motion.div
//               className="text-3xl font-bold text-purple-600 dark:text-purple-400 flex items-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               <DollarSign className="mr-1 h-8 w-8" />
//               <span>{listing.price}</span>
//               <span className="text-base font-normal ml-2 text-gray-600 dark:text-gray-300">/ night</span>
//             </motion.div>
//           </div>

//           <Tabs defaultValue="details" className="w-full">
//             <TabsList className="mb-4">
//               <TabsTrigger value="details">Details</TabsTrigger>
//               <TabsTrigger value="calendar">Calendar</TabsTrigger>
//               <TabsTrigger value="reviews">Reviews</TabsTrigger>
//             </TabsList>
//             <TabsContent value="details">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.5 }}
//                 className="space-y-4"
//               >
//                 <div className="flex items-center text-gray-700 dark:text-gray-200">
//                   <User className="mr-2 h-5 w-5" />
//                   <p>
//                     Hosted by:{" "}
//                     <Badge variant="outline" className="ml-2">
//                       {listing.user && listing.user.username
//                         ? listing.user.username
//                         : "Unknown"}
//                     </Badge>
//                   </p>
//                 </div>
//                 <div className="flex items-center text-gray-700 dark:text-gray-200">
//                   <Info className="mr-2 h-5 w-5" />
//                   <p>
//                     {listing.description || "No description provided."}
//                   </p>
//                 </div>
//                 <div className="flex items-center text-gray-700 dark:text-gray-200">
//                   <Star className="mr-2 h-5 w-5" />
//                   <p>
//                     Rating: {listing.rating || "N/A"}
//                   </p>
//                 </div>
//               </motion.div>
//             </TabsContent>
//             <TabsContent value="calendar">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.5 }}
//               >
//                 <Calendar
//                   mode="single"
//                   selected={selectedDate}
//                   onSelect={setSelectedDate}
//                   className="rounded-md border"
//                 />
//               </motion.div>
//             </TabsContent>
//             <TabsContent value="reviews">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.5 }}
//               >
//                 <ScrollArea className="h-[200px] w-full rounded-md border p-4">
//                   {listing.reviews && listing.reviews.length > 0 ? (
//                     listing.reviews.map((review, index) => (
//                       <div key={index} className="mb-4 last:mb-0">
//                         <p className="font-semibold">{review.user}</p>
//                         <p className="text-sm text-gray-600 dark:text-gray-300">{review.comment}</p>
//                       </div>
//                     ))
//                   ) : (
//                     <p>No reviews yet.</p>
//                   )}
//                 </ScrollArea>
//               </motion.div>
//             </TabsContent>
//           </Tabs>

//           <AnimatePresence>
//             {isOwner && (
//               <motion.div
//                 className="flex space-x-4 mt-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//               >
//                 <Button
//                   onClick={() => router.push(`/listings/${id}/edit`)}
//                   className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200"
//                 >
//                   <Edit className="mr-2 h-4 w-4" /> Edit Listing
//                 </Button>
//                 <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
//                   <DialogTrigger asChild>
//                     <Button variant="destructive">
//                       <Trash2 className="mr-2 h-4 w-4" /> Delete Listing
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Are you sure you want to delete this listing?</DialogTitle>
//                       <DialogDescription>
//                         This action cannot be undone. This will permanently delete your listing.
//                       </DialogDescription>
//                     </DialogHeader>
//                     <DialogFooter>
//                       <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
//                         Cancel
//                       </Button>
//                       <Button variant="destructive" onClick={handleDelete}>
//                         Delete
//                       </Button>
//                     </DialogFooter>
//                   </DialogContent>
//                 </Dialog>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </CardContent>
//       </MotionCard>
//     </div>
//   );
// };

// export default ListingDetails;

// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { api } from "../../api";
// import Swal from "sweetalert2";
// import { Button } from "../../../components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../../../components/ui/card";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "../../../components/ui/tabs";
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "../../../components/ui/avatar";
// import { Calendar } from "../../../components/ui/calendar";
// import { Input } from "../../../components/ui/input";
// import { Textarea } from "../../../components/ui/textarea";
// import { Star, Edit, Trash2, CheckCircle } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../../../components/ui/dialog";

// const ListingDetails = ({ params }) => {
//   const [listing, setListing] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(0);
//   const [reviewText, setReviewText] = useState("");
//   const [selectedDates, setSelectedDates] = useState([]);
//   const router = useRouter();
//   const { id } = params;
//   const [isOwner, setIsOwner] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     }
//     fetchListing();
//   }, [id]);

//   const fetchListing = async () => {
//     try {
//       const response = await api.get(`/listings/${id}`);
//       setListing(response.data);
//       const token = localStorage.getItem("token");
//       if (token) {
//         const payload = JSON.parse(atob(token.split(".")[1]));
//         setIsOwner(payload.id === response.data.user?._id);
//       }
//     } catch (error) {
//       console.error("Error fetching listing:", error);
//       Swal.fire("Error", "Failed to fetch listing details", "error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchReviews = async () => {
//     try {
//       const response = await api.get(`/reviews/${id}`);
//       setReviews(response.data);
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//       Swal.fire("Error", "Failed to fetch reviews", "error");
//     }
//   };

//   const handleEdit = () => {
//     router.push(`/listings/${id}/edit`);
//   };

//   const handleDelete = async () => {
//     try {
//       const result = await Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//       });

//       if (result.isConfirmed) {
//         await api.delete(`/listings/${id}`);
//         Swal.fire("Deleted!", "Your listing has been deleted.", "success");
//         router.push("/");
//       }
//     } catch (error) {
//       console.error("Error deleting listing:", error);
//       Swal.fire("Error", "Failed to delete listing", "error");
//     }
//   };

//   const handleReviewSubmit = async (e) => {
//     e.preventDefault();
//     if (!isAuthenticated) {
//       Swal.fire("Error", "You must be logged in to submit a review", "error");
//       return;
//     }
//     try {
//       await api.post("/reviews", {
//         listingId: id,
//         rating,
//         comment: reviewText,
//       });
//       Swal.fire("Success", "Review submitted successfully!", "success");
//       fetchReviews();
//       setRating(0);
//       setReviewText("");
//     } catch (error) {
//       console.error("Error submitting review:", error);
//       Swal.fire("Error", "Failed to submit review", "error");
//     }
//   };

//   const handleBooking = async () => {
//     if (!isAuthenticated) {
//       Swal.fire("Error", "You must be logged in to book", "error");
//       return;
//     }
//     if (selectedDates.length !== 2) {
//       Swal.fire("Error", "Please select check-in and check-out dates", "error");
//       return;
//     }
//     try {
//       await api.post("/bookings", {
//         listingId: id,
//         startDate: selectedDates[0],
//         endDate: selectedDates[1],
//       });
//       Swal.fire("Success", "Booking confirmed!", "success");
//     } catch (error) {
//       console.error("Error booking:", error);
//       Swal.fire("Error", "Failed to book", "error");
//     }
//   };

//   if (!listing) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
//       <Navbar />
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
//       >
//         <Card className="overflow-hidden">
//           <CardHeader>
//             <CardTitle className="text-3xl font-bold">{listing.name}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <motion.img
//                   src={listing.image}
//                   alt={listing.name}
//                   className="w-full h-96 object-cover rounded-lg shadow-lg"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </div>
//               <div>
//                 <p className="text-2xl font-semibold mb-4">
//                   ${listing.price} / night
//                 </p>
//                 <p className="text-lg mb-4">{listing.address}</p>
//                 <p className="mb-6">{listing.description}</p>
//                 <div className="mb-6">
//                   <h3 className="font-semibold text-lg mb-2">Amenities:</h3>
//                   <ul className="grid grid-cols-2 gap-2">
//                     {listing.amenities.map((amenity, index) => (
//                       <li key={index} className="flex items-center">
//                         <CheckCircle
//                           className="mr-2 text-green-500"
//                           size={16}
//                         />
//                         {amenity}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <AnimatePresence>
//                   {isOwner && (
//                     <motion.div
//                       className="flex space-x-4 mt-8"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       transition={{ delay: 0.6, duration: 0.5 }}
//                     >
//                       <Button
//                         onClick={() => router.push(`/listings/${id}/edit`)}
//                         className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200"
//                       >
//                         <Edit className="mr-2 h-4 w-4" /> Edit Listing
//                       </Button>
//                       <Dialog
//                         open={showDeleteDialog}
//                         onOpenChange={setShowDeleteDialog}
//                       >
//                         <DialogTrigger asChild>
//                           <Button variant="destructive">
//                             <Trash2 className="mr-2 h-4 w-4" /> Delete Listing
//                           </Button>
//                         </DialogTrigger>
//                         <DialogContent>
//                           <DialogHeader>
//                             <DialogTitle>
//                               Are you sure you want to delete this listing?
//                             </DialogTitle>
//                             <DialogDescription>
//                               This action cannot be undone. This will
//                               permanently delete your listing.
//                             </DialogDescription>
//                           </DialogHeader>
//                           <DialogFooter>
//                             <Button
//                               variant="outline"
//                               onClick={() => setShowDeleteDialog(false)}
//                             >
//                               Cancel
//                             </Button>
//                             <Button
//                               variant="destructive"
//                               onClick={handleDelete}
//                             >
//                               Delete
//                             </Button>
//                           </DialogFooter>
//                         </DialogContent>
//                       </Dialog>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//             <Tabs defaultValue="calendar" className="mt-12">
//               <TabsList>
//                 <TabsTrigger value="calendar">Availability</TabsTrigger>
//                 <TabsTrigger value="reviews">Reviews</TabsTrigger>
//               </TabsList>
//               <TabsContent value="calendar">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <div>
//                     <Calendar
//                       mode="range"
//                       selected={selectedDates}
//                       onSelect={setSelectedDates}
//                       className="rounded-md border"
//                       minDate={new Date()}
//                       disabled={(date) => {
//                         const dateString = date.toISOString().split("T")[0];
//                         return !listing.availableDates.includes(dateString);
//                       }}
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       Book your stay
//                     </h3>
//                     <div className="space-y-4">
//                       <div>
//                         <label
//                           htmlFor="checkIn"
//                           className="block text-sm font-medium"
//                         >
//                           Check-in
//                         </label>
//                         <Input
//                           id="checkIn"
//                           type="date"
//                           value={
//                             selectedDates[0]?.toISOString().split("T")[0] || ""
//                           }
//                           onChange={(e) =>
//                             setSelectedDates([
//                               new Date(e.target.value),
//                               selectedDates[1],
//                             ])
//                           }
//                           min={new Date().toISOString().split("T")[0]}
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="checkOut"
//                           className="block text-sm font-medium"
//                         >
//                           Check-out
//                         </label>
//                         <Input
//                           id="checkOut"
//                           type="date"
//                           value={
//                             selectedDates[1]?.toISOString().split("T")[0] || ""
//                           }
//                           onChange={(e) =>
//                             setSelectedDates([
//                               selectedDates[0],
//                               new Date(e.target.value),
//                             ])
//                           }
//                           min={
//                             selectedDates[0]
//                               ? new Date(selectedDates[0].getTime() + 86400000)
//                                   .toISOString()
//                                   .split("T")[0]
//                               : ""
//                           }
//                         />
//                       </div>
//                       <Button onClick={handleBooking} className="w-full">
//                         Book Now
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </TabsContent>
//               <TabsContent value="reviews">
//                 <div className="space-y-8">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       Leave a Review
//                     </h3>
//                     <form onSubmit={handleReviewSubmit} className="space-y-4">
//                       <div className="flex items-center">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <Star
//                             key={star}
//                             size={24}
//                             onClick={() => setRating(star)}
//                             className={`cursor-pointer ${
//                               star <= rating
//                                 ? "text-yellow-400"
//                                 : "text-gray-300"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <Textarea
//                         value={reviewText}
//                         onChange={(e) => setReviewText(e.target.value)}
//                         placeholder="Write your review here..."
//                         rows={4}
//                       />
//                       <Button type="submit">Submit Review</Button>
//                     </form>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Reviews</h3>
//                     <AnimatePresence>
//                       {reviews.map((review, index) => (
//                         <motion.div
//                           key={review._id}
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -20 }}
//                           transition={{ duration: 0.3, delay: index * 0.1 }}
//                           className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4"
//                         >
//                           <div className="flex items-center mb-2">
//                             <Avatar className="mr-2">
//                               <AvatarImage
//                                 src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.user.username}`}
//                               />
//                               <AvatarFallback>
//                                 {review.user.username.charAt(0)}
//                               </AvatarFallback>
//                             </Avatar>
//                             <span className="font-semibold">
//                               {review.user.username}
//                             </span>
//                           </div>
//                           <div className="flex items-center mb-2">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                               <Star
//                                 key={star}
//                                 size={16}
//                                 className={`${
//                                   star <= review.rating
//                                     ? "text-yellow-400"
//                                     : "text-gray-300"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                           <p>{review.comment}</p>
//                         </motion.div>
//                       ))}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//         </Card>
//       </motion.div>
//       <Footer />
//     </div>
//   );
// };

// export default ListingDetails;

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../api";
import Swal from "sweetalert2";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Calendar } from "../../../components/ui/calendar";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import {
  Star,
  Edit,
  Trash2,
  CheckCircle,
  MapPin,
  DollarSign,
  Calendar as CalendarIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { enUS } from "date-fns/locale";

// Set locale to English US, or you can use other locales
registerLocale("en-US", enUS);
setDefaultLocale("en-US");

const ListingDetails = ({ params }) => {
  const [listing, setListing] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);
  const router = useRouter();
  const { id } = params;
  const [isOwner, setIsOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuthenticated(true);
    }
    fetchListing();
    fetchReviews();
  }, [id]);

  const fetchListing = async () => {
    try {
      const response = await api.get(`/listings/${id}`);
      setListing(response.data);
      const token = localStorage.getItem("token");
      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setIsOwner(payload.id === response.data.user?._id);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching listing:", error);
      Swal.fire("Error", "Failed to fetch listing details", "error");
      setIsLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await api.get(`/reviews/${id}`);
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      Swal.fire("Error", "Failed to fetch reviews", "error");
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/listings/${id}`);
      Swal.fire("Deleted!", "Your listing has been deleted.", "success");
      router.push("/");
    } catch (error) {
      console.error("Error deleting listing:", error);
      Swal.fire("Error", "Failed to delete listing", "error");
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      Swal.fire("Error", "You must be logged in to submit a review", "error");
      return;
    }
    try {
      await api.post("/reviews", {
        listingId: id,
        rating,
        comment: reviewText,
      });
      Swal.fire("Success", "Review submitted successfully!", "success");
      fetchReviews();
      setRating(0);
      setReviewText("");
    } catch (error) {
      console.error("Error submitting review:", error);
      Swal.fire("Error", "Failed to submit review", "error");
    }
  };

  const handleBooking = async () => {
    if (!isAuthenticated) {
      Swal.fire("Error", "You must be logged in to book", "error");
      return;
    }
    if (selectedDates.length !== 2) {
      Swal.fire("Error", "Please select check-in and check-out dates", "error");
      return;
    }
    try {
      await api.post("/bookings", {
        listingId: id,
        startDate: selectedDates[0],
        endDate: selectedDates[1],
      });
      Swal.fire("Success", "Booking confirmed!", "success");
    } catch (error) {
      console.error("Error booking:", error);
      Swal.fire("Error", "Failed to book", "error");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <Card className=" bg-white dark:bg-gray-900 shadow-xl">
          <CardHeader className="relative h-96">
            <motion.img
              src={listing.image}
              alt={listing.name}
              className="absolute inset-0 w-full h-full object-cove -mt-6 rounded-xl"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0  bg-opacity-50 flex items-end">
              <div className="p-6 text-white">
                <motion.h1
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {listing.name}
                </motion.h1>
                <motion.p
                  className="text-xl flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <MapPin className="mr-2" /> {listing.address}
                </motion.p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 relative">
                <div
                  className="absolute inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[300px]"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,215,0,0.5) 100%)",
                  }}
                ></div>
                <div
                  className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[350px]"
                  style={{
                    background:
                      "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                  }}
                ></div>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-2">Description</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {listing.description}
                  </p>
                </motion.div>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
                  <ul className="grid grid-cols-2 gap-2">
                    {listing.amenities.map((amenity, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle
                          className="mr-2 text-green-500"
                          size={16}
                        />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <AnimatePresence>
                  {isOwner && (
                    <motion.div
                      className="flex space-x-4 mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <Button
                        onClick={() => router.push(`/listings/${id}/edit`)}
                        className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200"
                      >
                        <Edit className="mr-2 h-4 w-4" /> Edit Listing
                      </Button>
                      <Dialog
                        open={showDeleteDialog}
                        onOpenChange={setShowDeleteDialog}
                      >
                        <DialogTrigger asChild>
                          <Button variant="destructive">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete Listing
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="dark:bg-gray-950 bg-white">
                          <DialogHeader>
                            <DialogTitle>
                              Are you sure you want to delete this listing?
                            </DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will
                              permanently delete your listing.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button
                              variant="outline"
                              onClick={() => setShowDeleteDialog(false)}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="destructive"
                              onClick={handleDelete}
                            >
                              Delete
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div>
                <motion.div
                  className="bg-gray-100 dark:bg-gray-950 p-6 relative top-12 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-4 flex items-center">
                    <DollarSign className="mr-2" />
                    {listing.price}{" "}
                    <span className="text-lg font-normal ml-2">/ night</span>
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="checkIn"
                        className="block text-sm font-medium mb-1"
                      >
                        Check-in
                      </label>
                      <Input
                        id="checkIn"
                        type="date"
                        value={
                          selectedDates[0]?.toISOString().split("T")[0] || ""
                        }
                        onChange={(e) =>
                          setSelectedDates([
                            new Date(e.target.value),
                            selectedDates[1],
                          ])
                        }
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="checkOut"
                        className="block text-sm font-medium mb-1"
                      >
                        Check-out
                      </label>
                      <Input
                        id="checkOut"
                        type="date"
                        value={
                          selectedDates[1]?.toISOString().split("T")[0] || ""
                        }
                        onChange={(e) =>
                          setSelectedDates([
                            selectedDates[0],
                            new Date(e.target.value),
                          ])
                        }
                        min={
                          selectedDates[0]
                            ? new Date(selectedDates[0].getTime() + 86400000)
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        className="w-full"
                      />
                    </div>
                    <Button onClick={handleBooking} className="w-full">
                      Book Now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
            <Tabs defaultValue="calendar" className="mt-12">
              <TabsList className="mb-4">
                <TabsTrigger value="calendar" className="flex items-center">
                  <CalendarIcon className="mr-2" /> Availability
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex items-center">
                  <Star className="mr-2" /> Reviews
                </TabsTrigger>
              </TabsList>
              <TabsContent value="calendar">
                <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-md flex justify-center relative items-center ">
                  <div
                    className="absolute inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[300px]"
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,215,0,0.5) 100%)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[350px]"
                    style={{
                      background:
                        "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                    }}
                  ></div>
                  {/* <Calendar
                    mode="range"
                    selected={selectedDates}
                    onSelect={setSelectedDates}
                    className="rounded-md border"
                    minDate={new Date()}
                    disabled={(date) => {
                      const dateString = date.toISOString().split("T")[0];
                      return !listing.availableDates.includes(dateString);
                    }}
                  /> */}
                  <DatePicker
                    minDate={new Date()}
                    inline // Shows the calendar inline
                    locale="en-US"
                    className=" rounded-md"
                    disabled={(date) => {
                      const dateString = date.toISOString().split("T")[0];
                      return !listing.availableDates.includes(dateString);
                    }}
                  />
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">
                      Leave a Review
                    </h3>
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={24}
                            onClick={() => setRating(star)}
                            className={`cursor-pointer transition-colors duration-200 ${
                              star <= rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <Textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Write your review here..."
                        rows={4}
                        className="w-full"
                      />
                      <Button type="submit">Submit Review</Button>
                    </form>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
                    <AnimatePresence>
                      {reviews.map((review, index) => (
                        <motion.div
                          key={review._id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md mb-4 relative"
                        >
                          <div
                            className="absolute inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[300px]"
                            style={{
                              background:
                                "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,215,0,0.5) 100%)",
                            }}
                          ></div>
                          <div
                            className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[350px]"
                            style={{
                              background:
                                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                            }}
                          ></div>
                          <div className="flex items-center mb-2">
                            <Avatar className="mr-2">
                              <AvatarImage
                                src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.user.username}`}
                              />
                              <AvatarFallback>
                                {review.user.username.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-semibold">
                              {review.user.username}
                            </span>
                          </div>
                          <div className="flex items-center mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={16}
                                className={`${
                                  star <= review.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {review.comment}
                          </p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ListingDetails;
