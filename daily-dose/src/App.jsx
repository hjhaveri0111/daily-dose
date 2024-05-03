import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { calculateAmountOfFoodNeededToHitDailyCaloricIntake } from './api/apiCalls'

function App() {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)
  const [food, setFood] = useState("")
  const [brand, setBrand] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function getTheData() {
    setIsLoading(true)
    const [servings, amount ] = await calculateAmountOfFoodNeededToHitDailyCaloricIntake(food, brand)
    setCount(servings)
    setAmount(amount)
    // setCount(await calculateAmountOfFoodNeededToHitDailyCaloricIntake(food, brand)[0])
    setIsLoading(false)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input type='text' onChange={(field) => setBrand(field.target.value)} />
        <input type='text' onChange={(field) => setFood(field.target.value)} />

        <button onClick={getTheData}></button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {isLoading ?
      <h1>LOADING</h1>: 
      <h1>LOADEDE</h1>}
      <h1>That is {amount} grams</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
