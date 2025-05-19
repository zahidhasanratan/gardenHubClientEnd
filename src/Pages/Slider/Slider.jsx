import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Slider = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center"
              style={{
                backgroundImage: "url('https://i.ibb.co/7TCjZyJ/1.jpg')",
              }}
            >
              <div className="bg-black/50 p-6 rounded-lg max-w-lg">
                <h2 className="text-4xl font-bold mb-2">
                  <Typewriter
                    words={["Grow Together"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <p className="mb-4">Share your green passion with the world</p>
                <button className="bg-green-500 px-6 py-2 rounded hover:bg-green-600 transition">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center"
              style={{
                backgroundImage: "url('https://i.ibb.co/dw9zYQc1/2.jpg')",
              }}
            >
              <div className="bg-black/50 p-6 rounded-lg max-w-lg">
                <h2 className="text-4xl font-bold mb-2">
                  <Typewriter
                    words={["Tips & Tricks"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <p className="mb-4">
                  Get gardening tips from experienced growers
                </p>
                <button className="bg-green-500 px-6 py-2 rounded hover:bg-green-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center"
              style={{
                backgroundImage: "url('https://i.ibb.co/20NQXnh0/3.png')",
              }}
            >
              <div className="bg-black/50 p-6 rounded-lg max-w-lg">
                <h2 className="text-4xl font-bold mb-2">
                  <Typewriter
                    words={["Join the Community"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <p className="mb-4">Connect with local gardeners near you</p>
                <button className="bg-green-500 px-6 py-2 rounded hover:bg-green-600 transition">
                  Join Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
