import React from "react";

export const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        🌿 About Garden Hub
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>Garden Hub</strong> is a community-driven web application built
        for gardening enthusiasts. Whether you're a seasoned gardener or just
        starting out, Garden Hub offers a space to:
      </p>
      <ul className="list-disc list-inside text-left text-gray-600 my-4">
        <li>Share your favorite gardening tips</li>
        <li>Explore advice and inspiration from other green thumbs</li>
        <li>Connect over sustainable and eco-friendly practices</li>
      </ul>
      <p className="text-lg text-gray-700">
        Our platform makes it easy to create, update, and manage tips, with
        personalized content visibility and secure user authentication. Join the
        movement toward greener living—one plant at a time!
      </p>
    </div>
  );
};
