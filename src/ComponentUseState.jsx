//rfce
/*
React hook = special function tahta allows functional components to use
          React features without writing class components
          (useState,useEffect,useContext,useReducer, useCallbacks)

useState() = A react hook that allows the creation of a stateful variable
            AND a SETTER function to update its value in the virual DOM
            [name, setName]
*/
import React,{useState} from 'react'


function ComponentUseState() {

    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("BugsBunny");
    }

    const incrementAge = () =>{
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )
}

export default ComponentUseState