import React, { useState } from 'react';

function Greeting({ name }) {
  // Define state to store the name value
  const [inputName, setInputName] = useState('');



  return (
    <div>
      <h2>Greeting</h2>
  
      {name ? (
        <p>Hello, {name}!</p>
      ) : (
       ""
      )}
    </div>
  );
}

export default Greeting;
