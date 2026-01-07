import { useState } from "react"

function Counter(){

    const[count,setCount] = useState(0)
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    const zero =() =>{
        setCount(0)
    }
    return(
        <>
        <h1>{count}</h1>
        <div>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={zero}>Zero</button>
        </div>
        </>

    )
}

export default Counter