import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OtpVerification() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6)); // Allow only numbers, max 6 digits
  };

  const handleOtpSubmit = () => {
    if (otp.length === 6) {
      alert("OTP Verified Successfully!");
      navigate("/dashboard"); // Redirect after OTP verification
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Enter OTP</h2>
      <p className="text-gray-600">We've sent an OTP to your phone number.</p>

      <input
        type="text"
        placeholder="One Time Password"
        className="w-full border p-2 my-4"
        value={otp}
        onChange={handleOtpChange}
        maxLength={6}
      />
      <button
        onClick={handleOtpSubmit}
        className="bg-red-600 text-white w-full p-3 rounded"
      >
        Verify OTP
      </button>
    </div>
  );
}

export default OtpVerification;
