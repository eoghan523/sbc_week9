import './App.css'

function App() {

  const myName = 'Vite';

  const numbers = [1, 2, 3, 4, 5]

  return (
    <>
      <div>
        My name is {myName}
        {numbers.map((number) => (
          <div key={number}>{number}</div>
        ))}
      </div>
    </>
  )
}

export default App
