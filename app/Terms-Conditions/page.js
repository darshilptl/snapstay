import React from "react";

import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

const TermsConditionsPage = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-950">
        <Navbar />

        <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="relative top-5 text-4xl text-gray-950 dark:text-gray-200 font-extrabold mx-auto md:text-5xl">
              Terms And Conditions
            </h2>
          </div>
        </div>

        <p className="text-xl m-2 p-2 flex justify-center items-center font-bold text-gray-950 dark:text-white">
          By engaging our sxlervices, you agree to comply with and be bound by
          the terms outlined below
        </p>

        <div className="flex justify-center items-center flex-col">
          <section className=" w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Account Responsibilities
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  Users are responsible for maintaining the confidentiality of
                  their login information and for any activity under their
                  account. Misuse of the platform can result in suspension or
                  termination.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Listing Creation and Management
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  Hosts are responsible for ensuring that their listings are
                  accurate and comply with local regulations. SnapStay is not
                  liable for inaccuracies or legal issues related to listings.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Booking Conditions
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  Guests must adhere to the booking terms set by hosts,
                  including check-in times, house rules, and cancellation
                  policies. Hosts have the right to decline or cancel bookings
                  under specific conditions.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Payments and Fees
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  SnapStay facilitates payments between guests and hosts,
                  deducting a service fee for each booking. Hosts are
                  responsible for reporting their earnings to tax authorities as
                  required.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Cancellation and Refund Policy
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  Cancellations are subject to the terms set by the host.
                  Refunds are issued according to the host’s cancellation policy
                  and SnapStay’s processing timelines.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Prohibited Activities
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  Users must not engage in illegal activities, fraud, abuse, or
                  misuse of the platform. Violation of these rules may result in
                  account suspension or legal action.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Platform Changes and Availability
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  SnapStay reserves the right to modify or discontinue services
                  at any time. While we strive for uptime, we are not liable for
                  interruptions or downtime due to technical issues.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Limitation of Liability
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  SnapStay is not responsible for direct or indirect damages
                  resulting from the use of the platform, including disputes
                  between hosts and guests.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Dispute Resolution
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  In case of disputes between users, SnapStay encourages
                  resolution through communication. If necessary, SnapStay will
                  mediate in accordance with the terms set forth in our dispute
                  resolution policy.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-gray-950 py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
              <div className="border-l-[5px] border-primary pl-5">
                <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                  Governing Law
                </h2>
                <p className="text-lg font-medium text-body-color dark:text-dark-6">
                  These Terms & Conditions are governed by the laws of [Your
                  Country], and any legal disputes will be resolved in courts
                  located within that jurisdiction.
                </p>
              </div>
            </div>
          </section>

          <p className="text-lg m-2 p-2 font-medium text-body-color dark:text-dark-6">
            By engaging our services, you acknowledge that you have read,
            understood, and agree to be bound by these terms and conditions.
            SnapStay reserves the right to modify these terms at any time
            without prior notice. It is the client's responsibility to check for
            updates.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TermsConditionsPage;
