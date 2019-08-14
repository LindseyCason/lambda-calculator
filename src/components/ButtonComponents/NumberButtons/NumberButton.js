import React from "react";


const NumberButton = (props) => {
  console.log("NumberButton", props)
  return (
    
<button className="numButton" onClick={()=> props.addNumber(props.text)}>
 {props.text} 
</button>
  );
};


export default NumberButton;