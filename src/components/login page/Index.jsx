import React, { useState } from "react";
import Login from "./Login";
import OtpVerification from "./OtpVerification";
import Signup from "./Signup";

const Auth = ({ onClose }) => {
  const [activePage, setActivePage] = useState("login");

  return (
    <div className="p-6">
      {activePage === "login" && <Login onSwitch={setActivePage} />}
      {activePage === "otp" && <OtpVerification onSwitch={setActivePage} />}
      {activePage === "signup" && <Signup onSwitch={setActivePage} />}

      {/* Close Button */}
      <button onClick={onClose} className="absolute top-4 left-4 text-2xl">
        &times;
      </button>
    </div>
  );
};

export default Auth;
