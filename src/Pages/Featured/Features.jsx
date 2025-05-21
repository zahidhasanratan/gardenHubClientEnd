import React, { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";

export const Features = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/gardeners") // change URL if deployed
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Zoom direction="up" triggerOnce>
          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
            🌱 Featured Gardeners
          </h2>
        </Zoom>

        <Zoom cascade damping={0.2} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {gardeners.map((gardener) => (
              <div
                key={gardener._id}
                className="bg-green-50 p-6 rounded-lg shadow text-center hover:shadow-md transition"
              >
                <img
                  src={gardener.image}
                  alt={gardener.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="font-semibold text-lg">{gardener.name}</h3>
                <p className="text-sm text-gray-600">{gardener.experience}</p>
              </div>
            ))}
          </div>
        </Zoom>
      </div>
    </section>
  );
};
