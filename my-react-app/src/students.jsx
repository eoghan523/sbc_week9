
function Student({ name, age }) {
    return (
      <li>
        {name} ({age} years old)
        {age > 21 && <span> - Mature Student</span>}
      </li>
    );
  }
  
  export default Student;