import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Day");
  };
  return (
    <div>
      <button onClick={handleClick} className="main">
        +
      </button>
    </div>
  );
}

export default App;
