"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImWhatsapp } from "react-icons/im";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const ContactUsPage = () => {
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = ({ name, email, phone, message }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (!name || !email || !phone || !message) {
      return "All fields are required.";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email address.";
    }
    if (!phoneRegex.test(phone)) {
      return "Invalid phone number.";
    }
    if (message.length < 10) {
      return "Message should be at least 10 characters long.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = validateForm(formData);
    if (errorMessage) {
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
      });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Form Submitted",
          text: "Thank you for reaching out to us. We will be in touch with you shortly.",
          icon: "success",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Contact Form Submission Failed",
          text: "An error occurred while submitting the form. Please try again later.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Contact Form Submission Failed",
        text: "An error occurred while submitting the form. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-950 relative">
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
        <div className="grid min-h-[100dvh] w-full grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <motion.div
              className="w-full max-w-md space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Contact Us
                </h2>
                <p className="mt-2 text-center text-sm text-gray-950 dark:text-gray-400">
                  Reach Out, We're Here to Help!
                </p>
              </motion.div>

              <motion.form
                className="space-y-6"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <Label
                    className="block text-sm font-medium text-gray-950 dark:text-gray-300"
                    htmlFor="name"
                  >
                    Name
                  </Label>
                  <div className="mt-1">
                    <Input
                      autoComplete="name"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-800"
                      id="name"
                      name="name"
                      required
                      type="text"
                      placeholder="Name"
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  <Label
                    className="block text-sm font-medium text-gray-950 dark:text-gray-300"
                    htmlFor="email"
                  >
                    Email address
                  </Label>
                  <div className="mt-1">
                    <Input
                      autoComplete="email"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-800"
                      id="email"
                      name="email"
                      required
                      type="email"
                      placeholder="Email address"
                      maxLength={100}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                  <Label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-950 dark:text-gray-300"
                  >
                    Phone Number
                  </Label>
                  <div className="mt-1">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      maxLength={15}
                      autoComplete="tel"
                      placeholder="Phone Number"
                      required
                      pattern="^\d{10}$"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-800"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                  <Label
                    className="block text-sm font-medium text-gray-950 dark:text-gray-300"
                    htmlFor="message"
                  >
                    Project Details
                  </Label>
                  <div className="mt-1">
                    <input
                      className="min-h-[80px] block w-full appearance-none rounded-md border border-gray-300 dark:border-gray-800 px-3 py-2 dark:bg-gray-950 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Creation Or Redesign, Describe your project in detail."
                      required
                      maxLength={1000}
                      value={formData.message}
                      onChange={handleChange}
                    ></input>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                >
                  <Button
                    className="flex w-full justify-center rounded-md border border-gray-200 bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-800"
                    type="submit"
                  >
                    Submit
                  </Button>
                </motion.div>
              </motion.form>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-800" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-950 dark:bg-gray-950 dark:text-gray-400">
                    Or connect with
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                className="grid grid-cols-2 gap-3"
              >
                <Link href="mailto:darshilptl03@gmail.com">
                  <Button
                    className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-950 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:border-gray-800"
                    variant="outline"
                  >
                    <MailIcon className="mr-2 h-5 w-5" />
                    Gmail
                  </Button>
                </Link>

                <Link href="https://wa.me/+918200273346">
                  <Button
                    className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-950 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:border-gray-800"
                    variant="outline"
                  >
                    <ImWhatsapp className="mr-2 h-5 w-5" />
                    Whatsapp
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <Image
              alt="Signup Image"
              className="h-full w-full object-cover"
              height={1080}
              src="/images/contactus.png"
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width={1920}
            />
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUsPage;

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
