import React from 'react';

function Football() {
  // Define the shoot function
  const shoot = (message) => {
    alert(message);
  };

  return (
    // Render a button element with onClick event handler
    <button className="football-button" onClick={() => shoot("Goal!")}>
      Shoot
    </button>
  );
}

export default Football;
