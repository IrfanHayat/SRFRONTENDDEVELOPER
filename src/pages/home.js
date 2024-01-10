import React, { useState, useEffect } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  // Calculate angles for the clock hands
  const secondHandRotation = (seconds / 60) * 360;
  const minuteHandRotation = ((minutes * 60 + seconds) / 3600) * 360;
  const hourHandRotation = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        border: "1px solid #ccc",
        borderRadius: "50%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${secondHandRotation}deg)`,
          width: "2px",
          height: "50px",
          backgroundColor: "red",
          transformOrigin: "bottom",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${minuteHandRotation}deg)`,
          width: "4px",
          height: "40px",
          backgroundColor: "blue",
          transformOrigin: "bottom",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${hourHandRotation}deg)`,
          width: "6px",
          height: "30px",
          backgroundColor: "green",
          transformOrigin: "bottom",
        }}
      ></div>
    </div>
  );
};

export default AnalogClock;
