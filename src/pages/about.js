import React, { useState, useEffect, useCallback } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
function About() {
  const [counter, setCounter] = useState(0);
  const handleCounter = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const handleSubtractCounter = useCallback(() => {
    setCounter((prevCounter) => prevCounter - 1);
  }, []);
  return (
    <div>
      <Card title="Simple Card">
        <p className="m-0">
          <Button onClick={() => handleCounter()}>Add Counter</Button>
          <Button onClick={() => handleSubtractCounter()}>
            Subtract Counter
          </Button>
        </p>

        {counter}
      </Card>
    </div>
  );
}

export default About;
