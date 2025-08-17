import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, "0");  
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  return (
    <div className="container">
      <h1 className="clock">{formatTime(time)}</h1>
      <p className="date">{time.toDateString()}</p>

    </div>
  );
}
