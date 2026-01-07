import { useState } from "react"

function Color(){
    const[colorValue,upColorValue] = useState("#FFFFFF")

    const HandleColorValue=(event)=>{
        upColorValue(event.target.value)
    }

return(
    <div>
        <div className="selected-color" style={{backgroundColor:colorValue}}>Selected Color : {colorValue}</div>
        <input type="color" value={colorValue} onChange={HandleColorValue}/>
   
    </div>
)
}
export default Color