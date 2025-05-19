import React from "react";

export const Weekly_Garden_Tips = () => {
  return (
    <section className="bg-green-100 py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          📬 Stay Connected with Weekly Garden Tips
        </h2>
        <p className="text-gray-700 mb-6">
          Get curated gardening ideas, seasonal reminders, and exclusive
          community updates—straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded border border-green-400 w-full sm:w-auto focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
