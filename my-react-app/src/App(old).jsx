import { useState } from 'react';
import './App.css';
import Student from './students'; 
import profileImage from './assets/profile_pic1.jpg'; 

function App() {

  const students = [
    { name: "Eoghan", age: 30 },
    { name: "Leo", age: 28 },
    { name: "Susie", age: 23 },
    { name: "Vitor", age: 21 },
    { name: "Jason", age: 40 }
  ];

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => (
          <Student 
            key={index} 
            name={student.name} 
            age={student.age} 
            image={profileImage} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;