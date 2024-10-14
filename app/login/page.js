'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api, setAuthToken } from '../api';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setAuthToken(response.data.token);
      Swal.fire('Success', 'Logged in successfully!', 'success');
      router.push('/');
    } catch (error) {
      Swal.fire('Error', 'Invalid credentials', 'error');
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-950 transition-colors">
    <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-4xl sm:h-[500px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm"
      >
        <Card className="shadow-lg dark:bg-gray-950">
          <CardHeader>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <CardTitle className="text-2xl font-bold text-gray-700 dark:text-white">SnapStay - Log In</CardTitle>
            </motion.div>
            <CardDescription className="text-center text-gray-950 dark:text-white">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email field with Lucide icon */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-950 dark:text-white">Email</Label>
                <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg p-2">
                  <Mail className="h-5 w-5 text-gray-950 dark:text-white" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ml-2 bg-transparent text-gray-950 dark:text-white"
                    required
                  />
                </div>
              </div>

              {/* Password field with toggle icon for show/hide password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-950 dark:text-white">Password</Label>
                <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg p-2">
                  <Lock className="h-5 w-5 text-gray-950 dark:text-white" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="ml-2 bg-transparent text-gray-950 dark:text-white"
                    required
                  />
                  <motion.div
                    whileTap={{ scale: 0.9 }} // Animation for click
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-auto cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="ml-1 h-5 w-5 text-gray-950 dark:text-white" />
                    ) : (
                      <Eye className="ml-1 h-5 w-5 text-gray-950 dark:text-white" />
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Log in button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all">
                  Log In
                </Button>
              </motion.div>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center items-center text-center text-sm  text-gray-950 dark:text-white">
            Don’t have an account yet?{" "} 
            <Link href="/signup" className="underline hover:text-indigo-600 dark:hover:text-indigo-400">
              Sign up
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default LogIn;
