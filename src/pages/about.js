import { width } from "@mui/system";
import React, { useState, useEffect, useCallback, useRef } from "react";

function About() {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    let currentDate = new Date();
    console.log(
      `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${
        currentDate.getSeconds
      }`,
      "currentHours"
    );
    setHours(currentDate.getHours());
    setMinutes(currentDate.getMinutes());
    setSeconds(currentDate.getSeconds());
  }, []);

  return (
    <div>
      <div>
        {hours}:{minutes}:{seconds}
      </div>
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <img src={`./Ellipse27.png`}></img>
        <img src={`./Ellipse27.png`}></img>
      </div>
    </div>
  );
}

export default About;
