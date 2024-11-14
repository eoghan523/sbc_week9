import React from 'react';
import './App.css';
import BusinessCard from './components/BusinessCard';

// Import contacts from JSON file
import contacts from './data/contacts.json';

function App() {
  return (
    <div className="app">
      { contacts.map((contact, index) => (
        <BusinessCard key={index} contact={contact} />
      )) }
    </div>
  );
}

export default App;
