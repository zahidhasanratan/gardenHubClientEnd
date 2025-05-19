import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-950 to-green-800 text-white px-6 py-20">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 mb-6">
            404
          </h1>
          <p className="text-2xl mb-4">Oops! Page Not Found</p>
          <p className="text-green-200 mb-8">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Go Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
