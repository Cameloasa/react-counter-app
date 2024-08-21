/*
updater function = A function passed as an argument to setState()
                ex. setYear(year +1) better to use setYear(updaterFunction)
                (() => {})
                Allow for safe updates based on previous state
                Used with multiple states update and asyncr. functions
                Good practice to use updater function

*/
import React, {useState} from 'react'


function ComponentUpdaterFunction() {

    const [count, setCount] = useState(0);

    function increment(){
        /*
        useState()
        Uses the CURRENT state to calculate the NEXT state
        set functions do not trigger an update
        React batches together state update for performance reasons
        NEXT state becomes the CURRENT state after an update
        prevCount or just c(first letter of a variable) -represents the previous 
        */
       /*
       updater function() => {}
        previousState
        Takes the CURRENT state to calculate NEXT function in a state
        React puts your updater in a queue(waitingl line)
        During the next render, it will call them in the same order

       */
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);//it's a good practice to use updater function
    }

    function reset(){
        setCount(c => c = 0);
    }


  return (
    <div className='counter-container'>
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={reset}>Reset</button>
        <button className='counter-button' onClick={increment}>Increment</button>
    </div>
  )
}

export default ComponentUpdaterFunction