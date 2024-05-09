/* eslint-disable no-unused-vars */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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
    // setCount(servings)
    setAmount(amount)
    // setCount(await calculateAmountOfFoodNeededToHitDailyCaloricIntake(food, brand)[0])
    setIsLoading(false)
  }




  return (
    <>

      <div className="navBar"> 
        <div className="logoText">
          Daily Dose
        </div>
      </div>

      <div className="titleLines">
        <div className="calculatorTypeLogo">
          <img className="heart" src='heartPulse.png' alt="heart"/>
        </div>
        <div className="titleTexts">
          <div className="mainTitle">
            Daily Caloric Intake Calculator
          </div>
          <div className="subTitle">
            Calculator how much of one food meets your daily needs
          </div>

        </div>

        
      </div>
      <div className="mainBody">

        <div className="leftBody">
          <div className="selectOpt">
            <div className="selectTitle">
              Brand:
            </div>
            <div className="selectInput">
            <input type='text' onChange={(field) => setBrand(field.target.value)} />            </div>
          </div>
          <div className="selectOpt">
            <div className="selectTitle">
              Food Type:
            </div>
            <div className="selectInput">
            <input type='text' onChange={(field) => setFood(field.target.value)} />            </div>
          </div>
          <div className="selectOpt">
            <div className="selectTitle">
              Quantity (optional):
            </div>
            <div className="quantity">
              <button onClick={() => setCount((count) => count + 1)}>
              {count}
            </button>           
           </div>
          </div>
          <div className="buttonWrapper">
            <button  className="submitButton" onClick={getTheData}></button>
            
          </div>

        </div>
        

        <div className="rightBody">

          {isLoading ?
        <h1>LOADING</h1>: 
        <h1>LOADEDED HEHE</h1>}
        <h1>That is {amount} grams</h1>
        </div>
      
      </div>
      <div className="footer"> footer</div>




{/*     
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
