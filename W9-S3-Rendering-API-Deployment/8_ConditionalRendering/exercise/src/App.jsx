import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [maxLength, setMaxLength] = useState(10);
  const [catFacts, setCatFacts] = useState([]);
  const [error, setError] = useState(null);

  // Handles input changes
  const handleChange = (e) => {
    setMaxLength(e.target.value);
  };

  // Handles search click to get status info
  const handleSearch = async () => {

    console.log(maxLength);
    
    if (!maxLength) {
      setError("Please enter a Maximum Length.");
      return;
    }
    setError(null); // Clear previous error
    try {
      const response = await axios.get(`https://catfact.ninja/facts?limit=${maxLength}`);
      
      // destructure the data from the response
      const { data } = response.data
      console.log(response.data);

      setCatFacts(data);
    } catch (err) {
      setError("Could not retrieve information. Please check the status code.");
      setStatusInfo(null);
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

        { /* TODO: Display error message if there is an error */}
      
        { /* TODO: Display facts if it exists */}
        <div style={{ marginTop: '20px' }}>
          <h2>Here are {catFacts.length} Cat Facts</h2>
          <ul>
            {catFacts.map((fact, index) => (
              <li key={index}>{fact.fact}</li>
            ))}
          </ul>
        </div>
        { /* TODO: If there are no facts, display "no facts to display" */}
      
    </div>
  );
}

export default App;
