// LoginPopup.js
import React from "react";
import Login from "./Login";

const LoginPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <div>
          <Login />
        </div>
        {/* Your login form here */}
      </div>
    </div>
  );
};

export default LoginPopup;
