import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import days from "./data/days.json";
import Displayedday from "./Displayedday.jsx";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Day");
  };
  return (
    <>
      <header className="header">
        <div className="header-logo" />
        <span className="header-title">Trainalyse</span>
        <div className="header-actions">
          <div className="header-bar" />
          <div className="header-bar" />
          <div className="header-dots">
            <div className="header-dot" />
            <div className="header-dot" />
            <div className="header-dot" />
          </div>
        </div>
      </header>

      <hr className="divider" />

      <ul className="day-list">
        {days.map((day) => (
          <li key={day.id}>
            <button className="day-card" onClick={() => navigate("/Day", { state: { day } })}>
              <Displayedday date={day.date} title={day.title} />
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleClick} className="main">+</button>

      <nav className="nav-bar">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Graphs</a></li>
          <li><a href="#">Improve</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default App;
