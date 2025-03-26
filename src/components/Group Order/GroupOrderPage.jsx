import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import paneer from "../../../src/images/paneer2.jpg";

function GroupOrderPage() {
  const data = [
    {
      itemName: "Belgium waffles with strawberries",
      price: 150,
      quantity: 2,
      addedBy: "Madhu",
      total: 300,
      image: paneer,
    },
    {
      itemName: "Chicken skewers",
      price: 200,
      quantity: 1,
      addedBy: "Rahul",
      total: 200,
      image: paneer,
    },
    {
      itemName: "Belgium waffles with strawberries",
      price: 250,
      quantity: 2,
      addedBy: "Likith",
      total: 500,
      image: paneer,
    },
    {
      itemName: "Chicken skewers",
      price: 180,
      quantity: 1,
      addedBy: "Suman",
      total: 180,
      image: paneer,
    },
    {
      itemName: "Belgium waffles with strawberries",
      price: 350,
      quantity: 2,
      addedBy: "Rajath",
      total: 700,
      image: paneer,
    },
    {
      itemName: "Chicken skewers",
      price: 100,
      quantity: 1,
      addedBy: "Varun",
      total: 100,
      image: paneer,
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-5 md:p-10">
        <div className="text-left  leading-8">
          {/* Title */}
          <h1 className=" text-3xl md:text-5xl font-bold mb-2">Group Order</h1>
          {/* Buttons */}
          <div className="flex text-s md:text-lg gap-3 mt-4 w-fit md">
            <button className="w-fit flex items-center border px-2 md:px-4 md:py-1 rounded-full hover:bg-gray-100">
              Restaurant List{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
                width="20"
                height="20"
              >
                <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
              </svg>
            </button>
            <button className="flex items-center border px-2 md:py-1 rounded-full hover:bg-gray-100">
              {/* Share Icon */}
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7"></path>
                <path d="M16 6l-4-4-4 4"></path>
                <path d="M12 2v14"></path>
              </svg>
              Share Link
            </button>
          </div>
          {/* Group Members */}
          <div className="flex mt-6">
            <button className="text-xs md:text-lg border px-4 rounded-full hover:bg-gray-100">
              Group Members
            </button>

            <div className="my-auto ml-3 flex items-center gap-2 ">
              {[1, 2, 3, 4, 5].map((member) => (
                <div
                  key={member}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full border"
                >
                  {/* User Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 1114 0H5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* List of Items Added */}
      <div className=" mx-auto px-5 md:px-18">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="py-2 px-4">Item</th>
              <th className="py-2 px-4">Item Name</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Added By</th>
              <th className="py-2 px-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="py-2 px-4">
                  <img
                    src={item.image}
                    alt={item.itemName}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="py-2 px-4">{item.itemName}</td>
                <td className="py-2 px-4">Rs. {item.price}</td>
                <td className="py-2 px-4">
                  <div className="flex items-center">
                    <button className="bg-red-200 px-2 py-1 rounded-l">
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="bg-green-200 px-2 py-1 rounded-r">
                      +
                    </button>
                  </div>
                </td>
                <td className="py-2 px-4">{item.addedBy}</td>
                <td className="py-2 px-4">Rs. {item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10  mx-auto w-fit bg-red-50 md:mt-20 flex items-center justify-center">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Payment Method Section */}
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">PAYMENT METHOD</h2>
            <select className="w-full p-2 border rounded-md mb-4 text-sm">
              <option>Select Your payment gateway</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>PayPal</option>
            </select>
            <input type="text" placeholder="Card number" className="w-full p-2 border rounded-md mb-4 text-sm" />
            <div className="flex space-x-2 mb-4">
              <input type="text" placeholder="CVC" className="w-1/3 p-2 border rounded-md text-sm" />
              <input type="text" placeholder="MM/YY" className="w-2/3 p-2 border rounded-md text-sm" />
            </div>
            <input type="text" placeholder="Coupon Code (If you have)" className="w-full p-2 border rounded-md mb-4 text-sm" />
            <button className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-300">
              Apply Coupon
            </button>
          </div>

          {/* Subtotal Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">SUBTOTAL</h2>
            <div className="flex justify-between mb-2">
              <span>Order Subtotal</span>
              <span>Rs. 1900.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Charges</span>
              <span>Free Delivery</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Coupon</span>
              <span>Rs. 90.00</span>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span>Rs. 1900.00</span>
            </div>
            <button className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-300">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
      <Footer></Footer>
    </div>
  );
}

export default GroupOrderPage;
