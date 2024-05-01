import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

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
              Generic
            </div>
          </div>
          <div className="selectOpt">
            <div className="selectTitle">
              Food Type:
            </div>
            <div className="selectInput">
              Carrots
            </div>
          </div>
          <div className="selectOpt">
            <div className="selectTitle">
              Quantity (optional):
            </div>
            <div className="quantity">
              12
            </div>
          </div>
          <div className="buttonWrapper">
            <div className="submitButton">
              Calculate
            </div>

          </div>

        </div>
        

        <div className="rightBody">
          right
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
