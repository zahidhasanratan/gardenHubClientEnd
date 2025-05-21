import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const difficultyOrder = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
};

export const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await fetch("http://localhost:5000/tips");
        if (!res.ok) throw new Error("Failed to fetch tips");

        const data = await res.json();

        const publicTips = data.filter((tip) => tip.availability === "Public");
        setTips(publicTips);
      } catch (error) {
        console.error("Error fetching tips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  const sortedTips = React.useMemo(() => {
    let filtered = tips;
    if (difficultyFilter !== "All") {
      filtered = tips.filter((tip) => tip.difficulty === difficultyFilter);
    }

    return filtered.slice().sort((a, b) => {
      const diffA = difficultyOrder[a.difficulty] || 99;
      const diffB = difficultyOrder[b.difficulty] || 99;
      return diffA - diffB;
    });
  }, [tips, difficultyFilter]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
        📋 Browse Tips
      </h2>

      <div className="flex justify-center mb-6">
        <select
          className="border border-green-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading tips...</p>
      ) : sortedTips.length === 0 ? (
        <p className="text-center text-red-500">
          No tips found for selected difficulty.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm text-sm">
            <thead>
              <tr className="bg-green-50 text-green-800 uppercase text-xs">
                <th className="px-5 py-3 text-left">Image</th>
                <th className="px-5 py-3 text-left">Title</th>
                <th className="px-5 py-3 text-left">Category</th>
                <th className="px-5 py-3 text-left">Difficulty</th>
                <th className="px-5 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedTips.map((tip) => (
                <tr
                  key={tip._id}
                  className="border-b last:border-none hover:bg-green-50 transition duration-150"
                >
                  <td className="px-5 py-4">
                    <img
                      src={
                        tip.imageUrl ||
                        "https://source.unsplash.com/featured/?plant"
                      }
                      alt={tip.title}
                      className="w-20 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-5 py-4 font-medium text-gray-800">
                    {tip.title}
                  </td>
                  <td className="px-5 py-4 text-gray-600">{tip.category}</td>
                  <td className="px-5 py-4 text-gray-600">
                    {tip.difficulty || "N/A"}
                  </td>
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
      )}
    </section>
  );
};
