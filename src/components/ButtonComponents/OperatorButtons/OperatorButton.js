import React from "react";

const OperatorButton = (props) => {
  console.log(props);

return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

<button className="opButton">
  {props.operator.char}{/*React can only hand primitive data types, not objects, if you're looking into an object you will have to access it with soomething like chars in this example to get your data*/}

</button>
    </>
  );
};

export default OperatorButton;