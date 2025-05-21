import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";

export const TipDetails = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const res = await fetch(`http://localhost:5000/tips/${id}`);
        const data = await res.json();
        if (res.ok) {
          setTip(data);
        } else {
          setTip(null);
        }
      } catch (err) {
        console.error("Error loading tip:", err);
        setTip(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTip();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

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
