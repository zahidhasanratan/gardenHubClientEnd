import React from "react";
import { Zoom } from "react-awesome-reveal";

export const Weekly_Garden_Tips = () => {
  return (
    <section className="bg-gradient-to-r from-green-100 to-green-200 py-16">
      <Zoom triggerOnce>
        <div className="max-w-xl mx-auto px-6 text-center shadow-lg rounded-lg bg-white p-10">
          <h2 className="text-3xl font-extrabold text-green-800 mb-4">
            📬 Stay Connected with Weekly Garden Tips
          </h2>
          <p className="text-green-700 mb-8 text-lg">
            Get curated gardening ideas, seasonal reminders, and exclusive
            community updates—straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 pl-12 rounded-full border border-green-400 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm transition"
                required
              />
              <svg
                className="w-5 h-5 text-green-400 absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m0 0l4-4m-4 4l4 4"
                ></path>
              </svg>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 shadow-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Zoom>
    </section>
  );
};
