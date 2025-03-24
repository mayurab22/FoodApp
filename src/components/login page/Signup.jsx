import React from 'react'

function Signup() {
  return (
    <div><div className="p-6">
    <h2 className="text-2xl font-bold">Sign up</h2>
    <p className="text-gray-600">
      or{" "}
      <span
        onClick={() => onSwitch("login")}
        className="text-red-600 cursor-pointer"
      >
        login to your account
      </span>
    </p>

    <input
      type="text"
      placeholder="Phone Number"
      className="w-full border p-2 my-2"
    />
    <input type="text" placeholder="Name" className="w-full border p-2 my-2" />
    <input type="email" placeholder="Email" className="w-full border p-2 my-2" />

    <button className="bg-red-600 text-white w-full p-3 rounded">
      Sign up
    </button>

    <p className="text-xs text-gray-500 mt-2">
      By creating an account, I accept the Terms & Conditions & Privacy Policy
    </p>
  </div></div>
  )
}

export default Signup