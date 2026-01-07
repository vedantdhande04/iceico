import { useState } from "react"

function Change(){

    const [name , upName] = useState("")
    const NameChange=(event)=>{
        upName(event.target.value)
    }
    const [quantity , upQuan] =useState(0)
    const quanChange=(event)=>{
        upQuan(event.target.value)
    }
    return(
        <>
        <input value={name} onChange={NameChange}></input>
        <h1>{name}</h1>
        <input value={quantity} onChange={quanChange} type="number"></input>
        <h1>{quantity}</h1>
        </>
    )
}
export default Change