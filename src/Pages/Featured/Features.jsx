import React from "react";
import { Zoom } from "react-awesome-reveal";

export const Features = () => {
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
            {/* Gardener 1 */}
            <div className="bg-green-50 p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <img
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt="Alex Bloom"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">Alex Bloom</h3>
              <p className="text-sm text-gray-600">Vertical Gardening Expert</p>
            </div>

            {/* Gardener 2 */}
            <div className="bg-green-50 p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt="Lily Greens"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">Lily Greens</h3>
              <p className="text-sm text-gray-600">Balcony Garden Enthusiast</p>
            </div>

            {/* Gardener 3 */}
            <div className="bg-green-50 p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Chris Roots"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">Chris Roots</h3>
              <p className="text-sm text-gray-600">
                Compost & Sustainability Advocate
              </p>
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
};
