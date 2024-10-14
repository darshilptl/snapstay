"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { api } from "../api";
import Swal from "sweetalert2";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [userListings, setUserListings] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
          return;
        }
        await fetchUserData();
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire("Error", "Failed to fetch user data", "error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [router]);

  // Fetch user data
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      // Update this endpoint to match your API
      const response = await api.get('/user', config); // Make sure this is the correct endpoint
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        router.push('/login');
      }
      throw error;
    }
  };
  

  // Fetch user listings
  const fetchUserListings = async (userId) => {
    if (!userId) return;
    try {
      const response = await api.get("/listings", { params: { user: userId } });
      setUserListings(response.data.listings);
    } catch (error) {
      console.error("Error fetching user listings:", error);
      throw error;
    }
  };

  // Fetch user bookings
  const fetchUserBookings = async (userId) => {
    if (!userId) return;
    try {
      const response = await api.get("/bookings", { params: { user: userId } });
      setUserBookings(response.data);
    } catch (error) {
      console.error("Error fetching user bookings:", error);
      throw error;
    }
  };

  // Handle profile update
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      await api.put(`/user/${user._id}`, formData, config);
      Swal.fire("Success", "Profile updated successfully!", "success");
      await fetchUserData();
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire("Error", "Failed to update profile", "error");
    }
  };

  // Show loading spinner
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // User not found
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <Card>
          <CardContent>
            <p className="text-center">User not found. Please log in again.</p>
            <Button onClick={() => router.push("/login")} className="mt-4">
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile form */}
        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileUpdate}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage
                      src={user.profilePicture || "/placeholder-avatar.png"}
                      alt={user.username}
                    />
                    <AvatarFallback>
                      {user.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <label
                      htmlFor="profilePicture"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Update Profile Picture
                    </label>
                    <Input
                      id="profilePicture"
                      name="profilePicture"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Username
                  </label>
                  <Input
                    id="username"
                    name="username"
                    defaultValue={user.username}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={user.email}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Bio
                  </label>
                  <Textarea id="bio" name="bio" defaultValue={user.bio} />
                </div>
                <Button type="submit">Update Profile</Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Listings</CardTitle>
          </CardHeader>
          <CardContent>
            {userListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userListings.map((listing) => (
                  <Card key={listing._id} className="overflow-hidden">
                    <Image
                      src={listing.image}
                      alt={listing.name}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                    <CardContent>
                      <h3 className="font-bold">{listing.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {listing.address}
                      </p>
                      <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                        ${listing.price} / night
                      </p>
                      <Button
                        onClick={() => router.push(`/listing/${listing._id}`)}
                        className="mt-2"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p>You haven't created any listings yet.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            {userBookings.length > 0 ? (
              <div className="space-y-4">
                {userBookings.map((booking) => (
                  <Card key={booking._id}>
                    <CardContent>
                      <h3 className="font-bold">{booking.listing.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {booking.listing.address}
                      </p>
                      <p className="text-sm">
                        {new Date(booking.startDate).toLocaleDateString()} -{" "}
                        {new Date(booking.endDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                        Total: ${booking.totalPrice}
                      </p>
                      <p className="text-sm">Status: {booking.status}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p>You haven't made any bookings yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
