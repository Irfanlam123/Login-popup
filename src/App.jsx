// App.js
import React, { useState } from "react";
import LoginPopup from "./Components/LoginPopup";
import LoginButton from "./Components/LoginButton";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <LoginButton onClick={togglePopup} />
      {showPopup && <LoginPopup onClose={togglePopup} />}
    </div>
  );
};

export default App;
