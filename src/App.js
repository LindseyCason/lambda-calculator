import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display.js";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";

function App() {

  const [displayValue, setDisplayValue] = useState("0");
  const addNumber = (number) => {
    setDisplayValue(displayValue => displayValue + number);
  }
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props


  // const [numberState, setNumberState] = useState(Numbers);
  // const [operatorsState, setOperatorsState] = useState(Operators);
  // const [specialsState, setSpecialsState] = useState(Specials);
console.log({Numbers})

  return (
    <div className="container">
      <Logo className="Logo" />
      <div className="App">
        
      <Display number={displayValue}/> {/*NUMBER IS THE key, 0 IS THE value */}
       <div className="mainNumsCSS">
         <div className="specButtonsCSS">
        <Specials />
        <Numbers addNumber={addNumber} /> {/*cannot add an onclick on the component, must add to the actual button*/}
        </div>
        <div className="opButtonCSS">
         <Operators />
        </div></div>

        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;



//import { numbers } from './src/data.js'
//import { operators } from './src/data.js'
//import { specials } from './src/data.js'