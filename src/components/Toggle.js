import React from "react";
import {useState} from "react";



// my incorrect attempt
// function Toggle () {

//   function handleClick(){
    
//     const [isOn, setIsOn] = useState(true)  // should be outside because setting global variable
//     setIsOn(!isOn)
//   }

// color ? backgroundColor = 'white' : backgroundColor = 'red'


// return(
// //  <button style = {{color : color}}>ON</button>
// <button onClick={handleClick}>{isOn ? 'ON' : 'OFF' }</button>
// )
// }
// export default Toggle



function Toggle() {
  const [isOn, setIsOn ] = useState(false);

  function handleClick ()
  {
    // setIsOn((isOn) => !isOn );
    setIsOn(!isOn)    //either way works for now

    
  }
  const color = isOn ? 'red' : "white";
  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
