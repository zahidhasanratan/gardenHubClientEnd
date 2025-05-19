import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../Components/Header/Header";

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-20">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 mb-6">
            404
          </h1>
          <p className="text-2xl mb-4">Oops! Page Not Found</p>
          <p className="text-gray-400 mb-8">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Go Home
          </Link>
        </div>
      </section>
    </div>
  );
};
