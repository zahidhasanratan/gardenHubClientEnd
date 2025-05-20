import React from "react";
import { useParams } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";

// Dummy data
const dummyTips = [
  {
    _id: "1",
    title: "How I Grow Tomatoes Indoors",
    topic: "Indoor Gardening",
    category: "Plant Care",
    difficulty: "Easy",
    description:
      "This is a complete guide on how to grow tomatoes indoors using limited space and natural light.",
    imageUrl: "https://via.placeholder.com/600x350?text=Tomatoes",
    availability: "Public",
    userName: "Alice Green",
    userEmail: "alice@example.com",
  },
  {
    _id: "2",
    title: "Composting 101: Turn Waste into Gold",
    topic: "Composting",
    category: "Composting",
    difficulty: "Medium",
    description:
      "Learn how to start composting in your backyard and reduce kitchen waste naturally.",
    imageUrl: "https://via.placeholder.com/600x350?text=Compost",
    availability: "Public",
    userName: "Bob Soil",
    userEmail: "bob@example.com",
  },
];

export const TipDetails = () => {
  const { id } = useParams();
  const tip = dummyTips.find((t) => t._id === id);

  if (!tip) {
    return (
      <div className="text-center py-10 text-red-600 font-semibold">
        Tip not found.
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-green-200 hover:shadow-2xl transition-all duration-300">
        <img
          src={tip.imageUrl}
          alt={tip.title}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            {tip.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Posted by{" "}
            <span className="font-semibold text-green-700">{tip.userName}</span>{" "}
            ({tip.userEmail})
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              Topic: {tip.topic}
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Category: {tip.category}
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              Difficulty: {tip.difficulty}
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              {tip.availability}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed">{tip.description}</p>
          </div>

          <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
            <FaThumbsUp /> Like
          </button>
        </div>
      </div>
    </section>
  );
};
