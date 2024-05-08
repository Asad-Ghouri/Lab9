import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timerID);
  }, []); // Empty dependency array ensures that useEffect runs only once after the initial render

  return (
    <div>
      <h2>Clock</h2>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
