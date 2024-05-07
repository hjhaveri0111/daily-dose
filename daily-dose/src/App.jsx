import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quantity, setQuantity] = useState(10)
  const[brand, setBrand] = useState("Generic")
  const[foodType, setFoodType] = useState("Carrots")


  const handleChange = (event) => {
    switch (event.target.name) {
      case "brand":
        setBrand(event.target.value);
        break;
      case "foodType":
        setFoodType(event.target.value);
        break;
      case "quantity":
        setQuantity(event.target.value);
        break;
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newRequest = {
      brand,
      foodType,
      quantity
    };

    console.log(newRequest)
  };

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
              <input placeholder={"generic"} name="brand" id="brand" type="text" onChange={handleChange} value={brand}/>
            </div>
          </div>
          <div className="selectOpt">
            <div className="selectTitle">
              Food Type:
            </div>
            <div className="selectInput">
            <input placeholder={"food type"} name="foodType" id="foodType" type="text" onChange={handleChange} value={foodType}/>
            </div>
          </div>
          <div className="selectOpt">
            <div className="selectTitle">
              Quantity (optional):
            </div>
            <div className="quantity">
            <input placeholder={"number"} name="quantity" id="quantity" type="number" onChange={handleChange} value={quantity}/>
            </div>
          </div>
          <div className="buttonWrapper">
            <button className="submitButton" onClick={handleSubmit}>
              Calculate
            </button>

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
