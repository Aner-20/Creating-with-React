import React, { useState, useContext} from 'react'
import { ThemeContext } from './App'
// A function can't have state
// Hooks allow state
// setState allows to set the a certain state
// state.count == count
// const [..., ...] = useState(...), useContext() must be at very top

// (props) props.initialCount
export default function CounterHooks({ initialCount }){
    console.log("Render Counter Hooks")
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)
    return(
    <div>
      <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button style={style} onClick={() => setCount(prevCount =>  prevCount + 1)}>+</button>
      
    </div>
    )
}