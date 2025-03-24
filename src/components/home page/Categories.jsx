import React from "react";
import img1 from "../../images/breakfast.png";
import img2 from "../../images/maincourse.png";
import img3 from "../../images/drinks.png";
import img4 from "../../images/dessert.png";
console.log("Image Paths:", img1, img2, img3, img4);

const categories = [
  {
    title: "Breakfast",
    description:
      "Start your day right with our delicious breakfast options—fresh, flavorful, and ready to fuel your morning!",
    image: img1,
  },
  {
    title: "Main Course",
    description:
      "Savor every bite with our mouthwatering main course dishes—hearty, flavorful, and crafted to satisfy your cravings!",
    image: img2,
  },
  {
    title: "Drinks",
    description:
      "Quench your thirst with our refreshing drinks—cool, energizing, and the perfect complement to any meal!",
    image: img3,
  },
  {
    title: "Desserts",
    description:
      "Indulge in sweet delights with our decadent desserts—rich, irresistible, and the perfect way to treat yourself!",
    image: img4,
  },
];

function Categories() {
  return (
    <section className="mt-10 py-10 md:px-10 bg-white mb-20">
        <h2 className="text-4xl  text-gray-800 mb-6 font-[Montserrat] text-left pl-10">
          Categories
        </h2>
      <div className="px-5 container mx-auto md:px-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition-all duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0  group-hover:bg-opacity-50 transition-all duration-300 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-black text-2xl font-bold">
                  {category.title}
                </h3>
                <p className="text-black mt-2 text-sm">
                  {category.description}
                </p>
                <button className="mt-4 bg-[#a70000] text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
