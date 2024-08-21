/*
React hook = special function tahta allows functional components to use
          React features without writing class components
          (useState,useEffect,useContext,useReducer, useCallbacks)

useState() = A react hook that allows the creation of a stateful variable
            AND a SETTER function to update its value in the virual DOM
            [name, setName]
*/
import React from 'react'
import Counter from './Counter'



function App  () {
  return (
    <>
    <Counter/>
    </>
  )
}

export default App