import React from "react";
import hotel1 from "../../images/h1.jpg";
import hotel2 from "../../images/h1.jpg";
import hotel3 from "../../images/h1.jpg";
import hotel4 from "../../images/h1.jpg";
import hotel5 from "../../images/h1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Star, MapPin, Bookmark } from "lucide-react"; // Lucide icons

const restaurants = [
  {
    name: "Le Gourmet",
    image: hotel1,
    category: "Fine Dining",
    rating: 4.8,
    location: "Paris, France",
    description: "Exquisite flavors and premium service at Le Gourmet."
  },
  {
    name: "Spice Symphony",
    image: hotel2,
    category: "Indian Cuisine",
    rating: 4.6,
    location: "Mumbai, India",
    description: "A symphony of spices bringing you authentic Indian flavors."
  },
  {
    name: "Ocean Breeze",
    image: hotel3,
    category: "Seafood Special",
    rating: 4.7,
    location: "Miami, USA",
    description: "Fresh seafood dishes with a coastal view."
  },
  {
    name: "Urban Bites",
    image: hotel4,
    category: "Casual Dining",
    rating: 4.5,
    location: "New York, USA",
    description: "Delicious comfort food in a modern setting."
  },
  {
    name: "Urban Bites1",
    image: hotel5,
    category: "Casual Dining",
    rating: 4.5,
    location: "New York, USA",
    description: "Delicious comfort food in a modern setting."
  }
];

function RestoCards() {
  return (
    <div className="mt-20 px-5 md:px-20 bg-[#F9F9F7] p-10">
      {/* Section Title */}
      <div className="mb-10 flex items-center justify-between">
        <p className="font-[Montserrat] text-2xl md:text-4xl">Top Restaurants</p>
        {/* Navigation Icons */}
        <div className="flex space-x-4">
          <button className="prev-button p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-gray-800">
              <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
            </svg>
          </button>
          <button className="next-button p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-gray-800">
              <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={15}
        loop={true}
        autoplay={{delay: 3000}}
        navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
      >
        {restaurants.map((restaurant, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 rounded-lg shadow-lg sh bg-white dark:bg-gray-800 text-gray-900 dark:text-white h-100">
              {/* Image */}
              <div className="relative">
                <img src={restaurant.image} alt={restaurant.name} className="object-cover w-full rounded-md h-56" />
                {/* Bookmark Icon */}
                {/* <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <Bookmark size={20} className="text-gray-700" />
                </button> */}
              </div>

              {/* Content */}
              <div className="mt-4">
                {/* Category */}
                <span className="block text-xs font-medium uppercase text-violet-600">{restaurant.category}</span>
                {/* Name & Rating */}
                <div className="flex items-center justify-between mt-1">
                  <h2 className="text-lg font-semibold">{restaurant.name}</h2>
                  <div className="flex items-center">
                    <Star size={18} className="text-[#1BA672] fill-[#1BA672]" />
                    <span className="ml-1 text-sm">{restaurant.rating}</span>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <MapPin size={16} className="text-red-500" />
                  <span className="ml-1">{restaurant.location}</span>
                </div>
                {/* Description */}
                <p className="text-sm mt-2">{restaurant.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RestoCards
