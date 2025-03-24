import React from 'react'
import h1 from '../../../src/images/h1.jpg'
import { Link } from "react-router-dom";

function RestoList() {
    const restaurants = [
        {
            id:1,
          name: "Sahyadri Darshini",
          time: "43 - 105 mins",
          cuisines: "South Indian, North Indian, Chinese",
          location: "Hassan Locality",
          image: h1,
          discount: "Flat 30% off on walk-in",
        },
        {
            id:2,
          name: "House of Candy",
          time: "5 - 10 mins",
          cuisines: "Candies, Sweets",
          location: "Vittal Mallya Road, Bangalore",
          image: h1,
          discount: "Flat 30% off on delivery",
        },
        {
            id:3,
          name: "Domino's Pizza",
          time: "6 - 25 mins",
          cuisines: "Pizza, Desserts",
          location: "Pizza Street",
          image: h1,
          discount: "Flat 40% off on delivery",
        },
        {
            id:4,
          name: "Domino's Pizza",
          time: "6 - 25 mins",
          cuisines: "Pizza, Desserts",
          location: "Pizza Street",
          image: h1,
          discount: "Flat 40% off on delivery",
        },
      ];
  return (
    <div><div className="px-5 md:px-10 py-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {restaurants.map((restaurant, index) => (
        <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          {/* Image */}
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-40 object-cover"
          />

          {/* Card Content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {restaurant.name}
            </h3>

            {/* Time & Cuisine */}
            <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
              ⏳ {restaurant.time}
            </p>
            <p className="text-gray-500 text-sm">{restaurant.cuisines}</p>
            <p className="text-gray-400 text-xs">{restaurant.location}</p>

            {/* Discount Badge */}
            <div className="mt-3 ">
              <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48 " className="h-5 w-5" fill="white" stroke='white' stroke-width='1px'>
            <path d="m40.43 23.92 3.33-4.49a1 1 0 0 0 .17-.86 1 1 0 0 0-.58-.66l-5.12-2.18.66-5.44a1 1 0 0 0-1.11-1.11l-5.6.65-2.26-5.23a1 1 0 0 0-.66-.6 1 1 0 0 0-.86.17l-4.48 3.4-4.49-3.33a1 1 0 0 0-.86-.16 1 1 0 0 0-.66.57l-2.2 5.17-5.56-.64a1 1 0 0 0-.82.29 1 1 0 0 0-.29.82l.67 5.5L4.6 18a1 1 0 0 0-.57.66 1.05 1.05 0 0 0 .17.86L7.55 24 4.2 28.49a1 1 0 0 0-.16.86 1 1 0 0 0 .57.66L9.7 32.2 9 37.79a1 1 0 0 0 1.11 1.12l5.62-.67L18 43.4a1 1 0 0 0 .66.57 1.15 1.15 0 0 0 .26 0 1 1 0 0 0 .6-.2L24 40.45l4.49 3.35a1 1 0 0 0 1.51-.41l2.21-5.14 5.56.66a1 1 0 0 0 1.11-1.12l-.66-5.64 5.17-2.23a1 1 0 0 0 .57-.66 1.05 1.05 0 0 0-.17-.86zm-3.68 6.69a1 1 0 0 0-.6 1l.61 5.12-5-.59a1 1 0 0 0-1 .6l-2 4.66-4.07-3a1 1 0 0 0-1.19 0l-4.08 3-2-4.67a1 1 0 0 0-.92-.61h-.12l-5.1.6.59-5.08a1 1 0 0 0-.59-1l-4.62-2 3-4.07a1 1 0 0 0 0-1.19l-3-4.08 4.63-2a1 1 0 0 0 .6-1l-.61-5 5 .59a1 1 0 0 0 1-.61l2-4.69 4.07 3a1 1 0 0 0 1.2 0l4.07-3.06 2.05 4.74a1 1 0 0 0 1 .6l5.08-.59-.6 4.92a1 1 0 0 0 .6 1.05l4.65 2-3 4.07a1 1 0 0 0 0 1.2l3.06 4.07z" />
            <path d="M27.5 25a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5zm0 3a.5.5 0 0 1-.5-.5.5.5 0 0 1 1 0 .5.5 0 0 1-.5.5zM20.5 23a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zm0-3a.5.5 0 0 1 .5.5.5.5 0 0 1-1 0 .5.5 0 0 1 .5-.5zM28.29 18.29l-10 10a1 1 0 1 0 1.42 1.41l10-10a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0z" />
          </svg>{restaurant.discount}
              </span>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  </div></div>
  )
}

export default RestoList