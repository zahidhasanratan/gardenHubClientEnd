import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaTrashAlt, FaPen } from "react-icons/fa";

export const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserTips = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/tips?userEmail=${user.email}`
        );

        const data = await res.json();
        setTips(data);
      } catch (err) {
        console.error("Failed to fetch tips:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchUserTips();
    }
  }, [user]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
        🌿 My Garden Tips
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading tips...</p>
      ) : tips.length === 0 ? (
        <p className="text-center text-gray-600">No tips shared yet.</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tips.map((tip) => (
                <tr key={tip._id} className="hover:bg-green-50 border-b">
                  <td className="px-6 py-4">
                    <img
                      src={tip.imageUrl}
                      alt={tip.title}
                      className="w-24 h-16 object-cover rounded-md shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {tip.title}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{tip.category}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                        tip.availability === "Public"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {tip.availability}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-3">
                    <Link to={`/update-tip/${tip._id}`}>
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition">
                        <FaPen /> <span>Edit</span>
                      </button>
                    </Link>
                    <button className="flex items-center gap-1 text-red-600 hover:text-red-800 transition">
                      <FaTrashAlt /> <span>Delete</span>
                    </button>
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
