import React, { useState } from 'react';

function App() {
  const [maxLength, setMaxLength] = useState(10);
  const [catFacts, setCatFacts] = useState([]);
  
  // Handles input changes
  const handleChange = (e) => {
    setMaxLength(e.target.value);
  };

  // Handles search click to get status info
  const handleSearch = async () => {
    
    try {
      const response = await fetch(`https://catfact.ninja/facts?limit=${maxLength}`);
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      setCatFacts(data.data); // "data" key holds the array of cat facts
    } catch (err) {
      console.error(err);
      setCatFacts([]); // Clear previous facts if any
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Cat Facts</h1>
      <input
        type="number"
        placeholder="Enter the number of cat facts you'd like"
        value={maxLength}
        onChange={handleChange}
        style={{ padding: '8px', width: '100%' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px', marginTop: '10px', width: '100%' }}>
        Search
      </button>

        <div style={{ marginTop: '20px' }}>
          <h2>Here are {catFacts.length} Cat Facts</h2>
          <ul>
            {catFacts.map((fact, index) => (
              <li key={index}>{fact.fact}</li>
            ))}
          </ul>
        </div>
      
    </div>
  );
}

export default App;
