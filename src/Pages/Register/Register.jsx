import React from "react";
import { Zoom } from "react-awesome-reveal";
import { FcGoogle } from "react-icons/fc";

export const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("User registered");
  };

  const handleGoogleSignIn = () => {
    // TODO: Add Firebase Google popup logic here later
    console.log("Google sign-in popup triggered");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <Zoom triggerOnce>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Register for Garden Hub
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-green-800">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-800">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-800">
                Photo URL
              </label>
              <input
                type="url"
                required
                className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="https://your-photo-url.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-800">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center space-x-3">
            <hr className="w-16 border-green-300" />
            <span className="text-green-600 font-semibold">OR</span>
            <hr className="w-16 border-green-300" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="mt-6 w-full flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-2xl mr-3" />
            Continue with Google
          </button>
        </div>
      </Zoom>
    </section>
  );
};
