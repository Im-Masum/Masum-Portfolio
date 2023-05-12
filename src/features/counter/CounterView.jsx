import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, reset, decrement} from './counterSlice'


const CounterView = () => {
    const count = useSelector(state=> state.counter.count)
    const dispatch = useDispatch()
    
  return (
    <div>
        <h1>Counter App</h1>
        <h3>Count : {count}</h3>
        <button type="submit" onClick={()=> {
            dispatch(increment())
        }}>increment</button>

        <button type="submit" onClick={()=> {
            dispatch(reset())
        }}>reset</button>

        <button type="submit" onClick={()=> {
            dispatch(decrement())
        }}>decrement</button>
    </div>
  )
}

export default CounterView