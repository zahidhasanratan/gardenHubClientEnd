import React, { useEffect, useState } from "react";

export const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://gardenhub.vercel.app/api/gardeners")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch gardeners");
        return res.json();
      })
      .then((data) => {
        setGardeners(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading gardeners...</p>;
  if (error)
    return <p className="text-center py-10 text-red-600">Error: {error}</p>;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-10">
        🌼 Explore Gardeners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gardeners.map((gardener) => (
          <div
            key={gardener._id}
            className="bg-white rounded-2xl p-5 shadow-md ring-1 ring-green-100 hover:ring-green-400 hover:shadow-xl transition duration-300"
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-200"
            />
            <div className="text-center mt-4 space-y-1">
              <h3 className="text-xl font-bold text-green-700">
                {gardener.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {gardener.gender}, Age: {gardener.age}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-green-600">Status:</span>{" "}
                {gardener.status}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-green-600">
                  Experience:
                </span>{" "}
                {gardener.experience}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-green-600">
                  Shared Tips:
                </span>{" "}
                {gardener.tipsCount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
