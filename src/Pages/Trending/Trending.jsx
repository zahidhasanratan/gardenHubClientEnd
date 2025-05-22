import React, { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";

export const Trending = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingTips = async () => {
      try {
        const res = await fetch(
          "https://gardenhub.vercel.app/tips?limit=6&sort=likes"
        );
        const data = await res.json();
        setTips(data);
      } catch (error) {
        console.error("Failed to fetch trending tips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingTips();
  }, []);

  if (loading) {
    return (
      <section className="bg-base-200 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            🔥 Top Trending Tips
          </h2>
          <p className="text-center text-muted">Loading tips...</p>
        </div>
      </section>
    );
  }

  if (!tips.length) {
    return (
      <section className="bg-base-200 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            🔥 Top Trending Tips
          </h2>
          <p className="text-center text-muted">No tips found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Zoom triggerOnce>
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            🔥 Top Trending Tips
          </h2>
        </Zoom>
        <Zoom cascade damping={0.2} triggerOnce>
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div
                key={tip._id}
                className="bg-base-100 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src={
                    tip.imageUrl ||
                    "https://source.unsplash.com/featured/?plant"
                  }
                  alt={tip.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="font-semibold text-lg text-base-content">
                  {tip.title}
                </h3>
                <p className="text-sm text-muted">
                  Likes:{" "}
                  {typeof tip.totalLiked === "number" ? tip.totalLiked : 0}
                </p>
              </div>
            ))}
          </div>
        </Zoom>
      </div>
    </section>
  );
};
