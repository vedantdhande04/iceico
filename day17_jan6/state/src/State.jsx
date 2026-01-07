import { useState } from "react"

function State(){

    const [age,setAge] = useState(0)
    const IncrementAge=()=>{
        setAge(age+1)
    }
    return(<>
    <h1 onClick={IncrementAge}>Age is : {age}</h1>
    </>)
}
export default State