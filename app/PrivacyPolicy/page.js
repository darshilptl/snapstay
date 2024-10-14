import React from "react";

import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-950">
        <Navbar />

        <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="relative top-5 text-4xl text-gray-950 dark:text-gray-200 font-extrabold mx-auto md:text-5xl">
              Privacy Policy
            </h2>
          </div>
        </div>

        <p className="text-xl m-2 p-2 flex justify-center items-center font-bold text-gray-950 dark:text-white">
          This Privacy Policy outlines how we collect, use, and protect the
          information you provide us during your interaction with our website
          and services.
        </p>

        <div className="flex justify-center items-center flex-col">
          <section className=" w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Personal Information Collection
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  SnapStay collects personal data such as name, email, and
                  contact information during signup and login processes. This
                  data is necessary for account creation, managing listings, and
                  facilitating bookings.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Use of Personal Data
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  Your personal data is used to provide and improve the
                  services, such as verifying user identities, enabling listing
                  management, and processing bookings. SnapStay will not sell
                  your data to third parties.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  User Authentication & Security
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  SnapStay uses secure protocols for login and signup. Passwords
                  are hashed and stored securely, and additional security
                  measures (like session management) are in place to prevent
                  unauthorized access.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Cookies and Tracking
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  SnapStay uses cookies to enhance the user experience, such as
                  remembering login sessions and personal preferences. You can
                  manage cookie preferences through your browser settings.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Third-Party Services
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  SnapStay may share data with trusted third-party services for
                  payment processing, identity verification, or analytics. These
                  services are contractually obligated to keep your information
                  secure.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Data Retention
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  Personal data is retained as long as necessary for operational
                  purposes or legal requirements. You can request data deletion
                  by contacting support.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  User Rights
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  Users have the right to access, correct, or delete their
                  personal information. You can manage your personal data
                  through your account settings or by contacting support.
                </p>
              </div>
            </div>
          </section>

          <p className="text-lg m-2 p-2 font-medium text-body-color dark:text-dark-6">
            By using our website and services, you agree to the terms outlined
            in this Privacy Policy. Thank you for choosing SnapStay
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
