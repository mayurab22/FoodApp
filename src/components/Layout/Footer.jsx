import React from "react";
import logo from "../../images/3.png"; // Replace with actual logo path
import img1 from "../../images/breakfast.png";
import img2 from "../../images/maincourse.png";
import img3 from "../../images/drinks.png";
import img4 from "../../images/dessert.png";
function Footer() {
  return (
    <footer className="bg-[#a70000] text-white pt-10 pb-3 mt-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3  gap-5">
        
        {/* Logo & Description */}
        <div className="space-y-4 ">
          <img src={logo} alt="BiteXpress Logo" className="w-70" />
          <p className="text-sm leading-relaxed">
            We bring you the finest flavors, delivering delicious meals right to your 
            doorstep with speed and quality. Whether you're craving breakfast, a hearty 
            main course, refreshing drinks, or indulgent desserts, we've got something to 
            satisfy every taste!
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 rounded-full hover:bg-opacity-40 transition">
              {/* Twitter SVG */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10.004 10.004 0 01-2.825.775 4.93 4.93 0 002.165-2.725 9.75 9.75 0 01-3.127 1.184A4.92 4.92 0 0016.616 3c-2.737 0-4.958 2.205-4.958 4.924 0 .386.045.76.127 1.12C7.725 8.845 4.1 6.92 1.67 4.149a4.822 4.822 0 00-.666 2.475c0 1.707.87 3.216 2.188 4.096a4.893 4.893 0 01-2.237-.617v.06c0 2.385 1.693 4.374 3.946 4.827a4.997 4.997 0 01-2.224.085c.624 1.956 2.444 3.379 4.598 3.42A9.86 9.86 0 010 19.524a13.945 13.945 0 007.548 2.211c9.058 0 14.01-7.5 14.01-14.01 0-.213-.006-.426-.017-.637a10.06 10.06 0 002.412-2.518z"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-opacity-40 transition">
              {/* Facebook SVG */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.07c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.94 3.6 9.06 8.28 9.87v-6.99h-2.5v-2.88h2.5v-2.2c0-2.48 1.5-3.84 3.72-3.84 1.08 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54v1.88h2.72l-.44 2.88h-2.28v6.99C18.4 21.13 22 17.01 22 12.07z"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-opacity-40 transition">
              {/* Instagram SVG */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0-2A7.5 7.5 0 000 7.5v9A7.5 7.5 0 007.5 24h9A7.5 7.5 0 0024 16.5v-9A7.5 7.5 0 0016.5 0h-9z"/>
                <path d="M12 6.5A5.5 5.5 0 1017.5 12 5.5 5.5 0 0012 6.5zm0 9A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5zM18 5a1.5 1.5 0 10-1.5-1.5A1.5 1.5 0 0018 5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Pages Links */}
        <div className="text-left pl-15 ">
          <h3 className="font-semibold text-xl mb-3">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline text-lg">Home</a></li>
            <li><a href="#" className="hover:underline text-lg">Offers</a></li>
            <li><a href="#" className="hover:underline text-lg">Offers</a></li>
            <li><a href="#" className="hover:underline text-lg">Offers</a></li>
            <li><a href="#" className="hover:underline text-lg">Offers</a></li>
          </ul>
        </div>

        {/* Instagram Images */}
        <div className="mx-auto md:m-10">
          <h3 className="font-semibold text-lg mb-3 md:text-center">Follow Us On Instagram</h3>
          <div className="grid grid-cols-2 gap-2 mx-auto">
            <img src={img1} alt="Food 1" className="w-50 h-25 rounded-lg object-cover" />
            <img src={img2} alt="Food 2" className="w-50 h-25 rounded-lg object-cover" />
            <img src={img3} alt="Food 3" className="w-50 h-25 rounded-lg object-cover" />
            <img src={img4} alt="Food 4" className="w-50 h-25 rounded-lg object-cover" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-5 mb-1 border-t border-white border-opacity-30 pt-6 text-center text-sm">
        Copyright © 2025. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
