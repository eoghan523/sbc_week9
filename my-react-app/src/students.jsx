// Student.jsx
import React from 'react';

function Student({ name, age, image }) {
  return (
    <li className="student-item">
      <img src={image} alt={`${name}'s profile`} className="student-avatar" />
      <div className="student-info">
        <h2>{name}</h2>
        <p>Age: {age}</p>
      </div>
    </li>
  );
}

export default Student;
