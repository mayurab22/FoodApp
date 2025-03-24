import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import dal from "../../images/dal.jpg";

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
    { id: 1, name: "Butter Paneer Masala", price: 300, image: "🍛" },
    { id: 2, name: "Hakka Noodles", price: 200, image: "🍜" },
    { id: 3, name: "Jeera Rice", price: 150, image: "🍚" },
    { id: 4, name: "Mushroom Fried Rice", price: 300, image: "🥘" },
    { id: 5, name: "Dal Tadka", price: 180, image: "🍲" },
    { id: 6, name: "White Sauce Pasta", price: 500, image: "🍝" },
    { id: 7, name: "Laccha Paratha", price: 80, image: "🥞" },
    { id: 8, name: "Vegetable Cheese Sandwich", price: 170, image: "🥪" },
  ];

  // Dummy specialty items
  const specialties = [
    { name: "Blueberry Cheesecake", image: "🫐🍰" },
    { name: "Honey Chilli Potato", image: "🍯🥔" },
    { name: "Lecha Paratha", image: "🥞" },
    { name: "Veg Steam Momos", image: "🥟" },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:p-20">
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
          <p className="text-red-500">📅 {restaurant.timings}</p>
          <p className="text-blue-500">📞 {restaurant.phone}</p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 my-4">
          <button className="border px-3 py-1 rounded-md">Filter ⚙</button>
          <button className="border px-3 py-1 rounded-md bg-green-200">
            Veg
          </button>
          <button className="border px-3 py-1 rounded-md bg-red-200">
            Non-Veg
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-3">
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
              className="border px-4 py-2 rounded-md hover:bg-gray-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {menu.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl">{item.image}</div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-700">₹{item.price}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-2">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Specialties Section */}
        <div className="mt-6 bg-[#a70000] text-white p-4 rounded-lg flex overflow-x-auto justify-evenly">
          {specialties.map((item) => (
            <div key={item.name} className="text-center">
              <div className="text-4xl">{item.image}</div>
              <p className="font-semibold">{item.name}</p>
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
