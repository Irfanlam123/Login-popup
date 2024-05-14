// LoginButton.js
import React from "react";

const LoginButton = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-3">
  <div className="bg-white shadow-lg rounded-md p-6">
    <button
      className="text-black bg-amber-300 rounded-full py-1 px-4"
      onClick={onClick}
    >
      Login
    </button>
  </div>
</div>

  );
};

export default LoginButton;
