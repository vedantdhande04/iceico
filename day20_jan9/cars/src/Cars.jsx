import { useState } from "react"

function Cars(){

    const[carList,setCarList] = useState([])
    const[carYear,upYear] = useState(2022)
    const[carMake,upMake]= useState("")
    const[carModel, upModel]=useState("")

    const HandleCars =()=>{
        const newCar = {Year: carYear , Brand: carMake , Model : carModel}
        setCarList(c=>[...c,newCar])
    }
    const HandleYear =(event)=>{
        upYear(event.target.value)
    }

    const HandleMake =(event)=>{
        upMake(event.target.value)
    }
    const HandleModel =(event)=>{
        upModel(event.target.value)
    }

    return(
        <>
            <h1>List of Cars</h1>
            <input type="number" value={carYear} onChange={HandleYear}/><br />
            <input type="text" placeholder="Enter car company" value={carMake} onChange={HandleMake}/><br />
            <input type="text" placeholder="Enter car model" value={carModel} onChange={HandleModel}/><br />
            <button onClick={HandleCars}>Submit</button>
            <ul>
                {carList.map((car,index)=>
                <li key={index}>{car.Year} {car.Brand} {car.Model}</li>
                )}
            </ul>
        </>

    )
}
export default Cars