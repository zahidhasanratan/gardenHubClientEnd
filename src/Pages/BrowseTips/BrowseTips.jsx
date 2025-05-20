import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

// Dummy data
const dummyTips = [
  {
    _id: "1",
    title: "How I Grow Tomatoes Indoors",
    category: "Plant Care",
    imageUrl: "https://via.placeholder.com/100x70?text=Tomato",
    availability: "Public",
  },
  {
    _id: "2",
    title: "Composting 101: Turn Waste into Gold",
    category: "Composting",
    imageUrl: "https://via.placeholder.com/100x70?text=Compost",
    availability: "Public",
  },
  {
    _id: "3",
    title: "Vertical Gardening in Small Spaces",
    category: "Vertical Gardening",
    imageUrl: "https://via.placeholder.com/100x70?text=Vertical",
    availability: "Hidden",
  },
];

export const BrowseTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const publicTips = dummyTips.filter((tip) => tip.availability === "Public");
    setTips(publicTips);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
        📋 Browse Tips
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm text-sm">
          <thead>
            <tr className="bg-green-50 text-green-800 uppercase text-xs">
              <th className="px-5 py-3 text-left">Image</th>
              <th className="px-5 py-3 text-left">Title</th>
              <th className="px-5 py-3 text-left">Category</th>
              <th className="px-5 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr
                key={tip._id}
                className="border-b last:border-none hover:bg-green-50 transition duration-150"
              >
                <td className="px-5 py-4">
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-20 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-5 py-4 font-medium text-gray-800">
                  {tip.title}
                </td>
                <td className="px-5 py-4 text-gray-600">{tip.category}</td>
                <td className="px-5 py-4">
                  <Link to={`/tips/${tip._id}`}>
                    <button className="inline-flex items-center gap-1 text-sm text-green-700 hover:text-green-900 transition">
                      <FaEye className="text-base" /> See More
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
