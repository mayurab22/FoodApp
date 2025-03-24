import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Login</h2>
      <p className="text-gray-600">
        or{" "}
        <span
          onClick={() => navigate("/signup")} // Fixed navigation
          className="text-red-600 cursor-pointer"
        >
          create an account
        </span>
      </p>

      <input
        type="text"
        placeholder="Phone Number"
        className="w-full border p-2 my-4"
      />
      <button
        onClick={() => navigate("/otp")} // Fixed navigation
        className="bg-red-600 text-white w-full p-3 rounded"
      >
        Login
      </button>

      <p className="text-xs text-gray-500 mt-2">
        By clicking on Login, I accept the Terms & Conditions & Privacy Policy
      </p>
    </div>
  );
}

export default Login;
