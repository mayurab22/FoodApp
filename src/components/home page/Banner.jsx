import React from "react";
import heroimg from "../../images/heroimg.png";

function Banner() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <img
        src={heroimg}
        className="absolute inset-0 object-cover w-full h-full"
        alt="Delicious Food"
      />

      {/* Overlay Content */}
      <div className="relative flex items-center justify-center h-full px-6 md:px-12 lg:px-20">
        <div className="text-center md:text-center max-w-2xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Best food for <br className="hidden md:block" />
            your taste
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            Discover delectable cuisine and unforgettable moments in our welcoming culinary haven.
          </p>

          {/* CTA Button */}
          <button className="mt-6 bg-[#a70000] hover:bg-red-800 text-white font-semibold rounded-full px-6 py-3 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
