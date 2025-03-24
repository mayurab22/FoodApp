import React from "react";

function Banner() {
  const offers = [
    {
      text: "Flat 20% off ON FIRST ORDER!",
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      text: "Upto 50% off ON WEEKENDS",
      bgColor: "bg-purple-600",
      textColor: "text-white",
    },
    {
      text: "BUY 1 GET 1 FREE on selected meals",
      bgColor: "bg-red-600",
      textColor: "text-white",
    },
    {
      text: "Special offers on HEALTHY PICKS",
      bgColor: "bg-green-600",
      textColor: "text-white",
    },
  ];

  return (
    <div className="">
      <div className="px-5 md:px-20 py-4">
        {/* Offers Header */}
        <div className="flex items-center gap-2 mb-4">
          {/* SVG Tag Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48 " className="h-10 w-10">
            <path d="m40.43 23.92 3.33-4.49a1 1 0 0 0 .17-.86 1 1 0 0 0-.58-.66l-5.12-2.18.66-5.44a1 1 0 0 0-1.11-1.11l-5.6.65-2.26-5.23a1 1 0 0 0-.66-.6 1 1 0 0 0-.86.17l-4.48 3.4-4.49-3.33a1 1 0 0 0-.86-.16 1 1 0 0 0-.66.57l-2.2 5.17-5.56-.64a1 1 0 0 0-.82.29 1 1 0 0 0-.29.82l.67 5.5L4.6 18a1 1 0 0 0-.57.66 1.05 1.05 0 0 0 .17.86L7.55 24 4.2 28.49a1 1 0 0 0-.16.86 1 1 0 0 0 .57.66L9.7 32.2 9 37.79a1 1 0 0 0 1.11 1.12l5.62-.67L18 43.4a1 1 0 0 0 .66.57 1.15 1.15 0 0 0 .26 0 1 1 0 0 0 .6-.2L24 40.45l4.49 3.35a1 1 0 0 0 1.51-.41l2.21-5.14 5.56.66a1 1 0 0 0 1.11-1.12l-.66-5.64 5.17-2.23a1 1 0 0 0 .57-.66 1.05 1.05 0 0 0-.17-.86zm-3.68 6.69a1 1 0 0 0-.6 1l.61 5.12-5-.59a1 1 0 0 0-1 .6l-2 4.66-4.07-3a1 1 0 0 0-1.19 0l-4.08 3-2-4.67a1 1 0 0 0-.92-.61h-.12l-5.1.6.59-5.08a1 1 0 0 0-.59-1l-4.62-2 3-4.07a1 1 0 0 0 0-1.19l-3-4.08 4.63-2a1 1 0 0 0 .6-1l-.61-5 5 .59a1 1 0 0 0 1-.61l2-4.69 4.07 3a1 1 0 0 0 1.2 0l4.07-3.06 2.05 4.74a1 1 0 0 0 1 .6l5.08-.59-.6 4.92a1 1 0 0 0 .6 1.05l4.65 2-3 4.07a1 1 0 0 0 0 1.2l3.06 4.07z" />
            <path d="M27.5 25a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5zm0 3a.5.5 0 0 1-.5-.5.5.5 0 0 1 1 0 .5.5 0 0 1-.5.5zM20.5 23a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zm0-3a.5.5 0 0 1 .5.5.5.5 0 0 1-1 0 .5.5 0 0 1 .5-.5zM28.29 18.29l-10 10a1 1 0 1 0 1.42 1.41l10-10a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0z" />
          </svg>
          <h2 className="text-3xl font-semibold text-gray-800">Offers</h2>
        </div>

        {/* Offer Cards */}
        <div className="px-2 md:px-25 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:h-30 gap-4">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${offer.bgColor} ${offer.textColor} text-xl md:text-2xl md:px-15 font-bold text-center shadow-md`}
            >
              {offer.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
