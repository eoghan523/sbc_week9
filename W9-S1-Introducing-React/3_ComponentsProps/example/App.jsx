import Number from './components/Number'

import './App.css'

function App() {
  
  const myName = 'Vite';

  const numbers = [1, 2, 3, 4, 5]

  return (
    <>
      <div>
        My name is {myName}
        {numbers.map((number) => (
          <Number key={number} number={number} />
        ))}
      </div>
    </>
  )
}

export default App
