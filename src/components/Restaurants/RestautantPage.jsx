import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import dal from "../../images/dal.jpg";
import paneer from "../../../src/images/paneer2.jpg";

function RestautantPage() {
  // Dummy restaurant details
  const restaurant = {
    name: "Sahyadri Darshini",
    rating: 4.5,
    cuisine: "South Indian, North Indian, Chinese",
    location: "Bangalore Locality",
    timings: "7:30 am to 9:30 pm on Weekdays",
    phone: "+91 9900743643",
  };

  // Dummy menu items
  const menu = [
    {
      id: 1,
      name: "Butter Paneer Masala",
      price: 300,
      image: paneer,
      description:
        "Delicious blend of soft paneer cheese and green peas in a creamy tomato sauce.",
    },
    {
      id: 2,
      name: "Hakka Noodles",
      price: 200,
      image: paneer,
      description:
        "Delicious blend of soft paneer cheese and green peas in a creamy tomato sauce.",
    },
    {
      id: 3,
      name: "Jeera Rice",
      price: 150,
      image: paneer,
      description:
        "Delicious blend of soft paneer cheese and green peas in a creamy tomato sauce.",
    },
    {
      id: 4,
      name: "Mushroom Fried Rice",
      price: 300,
      image: paneer,
      description:
        "Delicious blend of soft paneer cheese and green peas in a creamy tomato sauce.",
    },
    {
      id: 5,
      name: "Dal Tadka",
      price: 180,
      image: paneer,
      description:
        "Delicious blend of soft paneer cheese and green peas in a creamy tomato sauce.",
    },
    {
      id: 6,
      name: "White Sauce Pasta",
      price: 500,
      image: paneer,
      description:
        "Delicious blend of soft paneer cheese and green peas in a creamy tomato sauce.",
    },
    {
      id: 7,
      name: "Laccha Paratha",
      price: 80,
      image: paneer,
      description:
        "Delicious blend of soft paneer cheese and green peas in a creamy tomato sauce.",
    },
    {
      id: 8,
      name: "Vegetable Cheese Sandwich",
      price: 170,
      image: paneer,
      description:
        "Delicious blend of soft paneer cheese and green peas in a creamy tomato sauce.",
    },
  ];

  // Dummy specialty items
  const specialties = [
    { name: "Blueberry Cheesecake", image: paneer },
    { name: "Honey Chilli Potato", image: paneer },
    { name: "Lecha Paratha", image: paneer },
    { name: "Veg Steam Momos", image: paneer },
    { name: "Veg Steam Momos", image: paneer },
  ];
  const filters = [
    {
      label: "Filter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6h18M6 12h12M10 18h4"
          />
        </svg>
      ),
    },
    { label: "Sort By ⌃" },
    { label: "Within 5km" },
    { label: "Rating 4+" },
    { label: "Pure veg" },
    { label: "Non-veg" },
    { label: "Serves Alcohol" },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-5 md:p-20">
        {/* Restaurant Details */}
        <div className="text-left  leading-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            {restaurant.name}{" "}
            <span className="bg-[#1BA672] text-xs md:text-sm text-white px-3 py-1 rounded-md">
              {restaurant.rating} ★
            </span>
          </h1>
          <p className="text-gray-600">{restaurant.cuisine}</p>
          <p className="text-gray-500">{restaurant.location}</p>
          <div className="md:flex">
            <p className="text-[#676A6D] flex border-1 w-fit rounded-full pr-3">
              <svg
                className="ml-2 mr-2 my-auto"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#CC3333"
                  stroke-width="2"
                  fill="#CC3333"
                />
                <line
                  x1="12"
                  y1="6"
                  x2="12"
                  y2="12"
                  stroke="white"
                  stroke-width="2"
                />
                <line
                  x1="12"
                  y1="12"
                  x2="16"
                  y2="14"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              {restaurant.timings}
            </p>
            {/* Vertical Line */}
            <svg
              className="ml-3 mr-3 invisible md:visible "
              width="2"
              height="30"
              viewBox="0 0 2 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="black"
                stroke-width="2"
              />
            </svg>
            <div className="flex">
              <svg
                className="w-5 h-5 mr-2 my-auto"
                fill="#CC3333"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
              </svg>
              <p className="text-gray-500 py-0"> {restaurant.phone}</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-5 px-5 md:px-0 md:mt-10 sm:mt-20">
          <div className="pb-4">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className="flex items-center gap-1 border border-gray-400 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
                >
                  {filter.icon && <span>{filter.icon}</span>}
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-3 mt-3 ml-10">
          {[
            "All",
            "Main Dishes",
            "Salad",
            "Appetizers",
            "Drinks",
            "Sides",
            "Desserts",
          ].map((category) => (
            <button
              key={category}
              className="flex items-center gap-1 border border-gray-400 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#CC3333] hover:text-[#CC3333] transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 w-fit mx-auto sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-4">
          {menu.map((item) => (
            <div
              key={item.id}
              className="border mx-5 rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              <div className="rounded-md h-30">
                <img
                  className="object-cover mx-auto rounded-full w-31 h-31"
                  src={item.image}
                ></img>
              </div>
              <h3 className="font-semibold mt-2">{item.name}</h3>
              <p className="text-left text-sm"> {item.description}</p>
              <div className="flex mx-auto mt-2">
                <p className="text-gray-700 mr-5 my-auto">₹{item.price}</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Specialties Section */}
        <div className="grid grid-cols-2 mx-auto w-80 md:w-full mt-6 bg-[#AD343E] text-white p-4 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {specialties.map((item) => (
            <div key={item.name} className="text-center">
              <div className="md:flex mx-auto ">
                <div className="text-4xl p-0">
                  <img
                    className="h-15 w-15 rounded-full mx-auto mt-0"
                    src={item.image}
                  ></img>
                </div>
                <p className="mx-auto justify-center font-semibold w-15 md:ml-5 mt-0">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialty Heading */}
        <div className="mt-10">
          <h2 className="text-center text-2xl font-bold mt-6">Our Specialty</h2>
          <div className="max-w-80 md:max-w-4xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row items-center">
              {/* Right Side: Image */}
              <div className="lg:w-1/2">
                <img
                  src={dal}
                  alt="Daal Makhni"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Left Side: Text */}
              <div className="p-6 lg:w-1/2">
                <h2 className="text-2xl font-bold">Daal Makhni</h2>
                <p className="text-gray-600 mt-2">
                  Discover the star of our menu: Dal Makhni! Slow-cooked lentils
                  infused with aromatic spices create a rich, creamy stew that’s
                  both comforting and flavorful. Served with fragrant basmati
                  rice, it’s a delicious journey for your taste buds that you
                  won’t want to miss. Taste the tradition, experience the magic
                  – only at our restaurant!
                </p>
                <button className="mt-4 px-4 py-2 bg-[#a70000] text-white rounded-md hover:bg-red-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default RestautantPage;
