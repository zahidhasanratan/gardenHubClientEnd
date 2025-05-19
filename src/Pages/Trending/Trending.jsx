import React from "react";

export const Trending = () => {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          🔥 Top Trending Tips
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <img
              src="https://source.unsplash.com/featured/?plant"
              alt="How I Grow Tomatoes"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg">How I Grow Tomatoes</h3>
            <p className="text-sm text-gray-600">Likes: 150</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <img
              src="https://source.unsplash.com/featured/?organic"
              alt="Natural Fertilizers You Can Make"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg">
              Natural Fertilizers You Can Make
            </h3>
            <p className="text-sm text-gray-600">Likes: 230</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <img
              src="https://source.unsplash.com/featured/?flowers"
              alt="Bloom All Year Round"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg">Bloom All Year Round</h3>
            <p className="text-sm text-gray-600">Likes: 98</p>
          </div>
        </div>
      </div>
    </section>
  );
};
