import { useState } from "react"

function Form(){

    const [name , upName] = useState("")
    const [confirm , upConfirm]=useState("")

    const handleName = (event)=>{
        upName(event.target.value)
    }
    const handleConfirmation =(event)=>{
        upConfirm(event.target.value)
    }
    return(

        <div>
            <input value={name} onChange={handleName} placeholder="Enter your name"/>
            <p>Name : {name}</p>
            <h3>Are you sure?</h3>
            <span>
                <button value="yes" onClick={handleConfirmation}>Yes</button>
                <button value="no" onClick={handleConfirmation}>No</button>
            </span>
            <p>confirmation : {confirm}</p>
        </div>
    )
}
export default Form