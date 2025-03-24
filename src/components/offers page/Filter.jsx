import React from "react";

function Filter() {
  const filters = [
    { label: "Filter", icon: (<svg
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
      </svg>), },
    { label: "Sort By ⌃" },
    { label: "Within 5km" },
    { label: "Rating 4+" },
    { label: "Pure veg" },
    { label: "Non-veg" },
    { label: "Serves Alcohol" },
  ];
  return (
    <div className="mt-5 px-5 md:mt-15 md:px-20 sm:mt-20">
      <div className=" py-4">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter, index) => (
            <button
              key={index}
              className="flex items-center gap-1 border border-gray-400 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
              {filter.icon && <span>{filter.icon}</span>}
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
