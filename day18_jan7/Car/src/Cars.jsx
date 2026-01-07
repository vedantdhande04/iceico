import { useState } from "react"

function Cars(){
const [car,updateCar] = useState({year:2024,Brand:"Ford",Model:"Mustang"})

const handleYear =(event)=>{
    updateCar(c=>({...c,year:event.target.value}))
}
const handleBrand =(event)=>{
    updateCar(c=>({...c,Brand:event.target.value}))
}
const handleModel =(event)=>{
    updateCar(c=>({...c,Model:event.target.value}))
}


    return(<>
        <h1>Your favourite car is {car.year} {car.Brand} {car.Model}</h1>
        <input type="number" value={car.year} onChange={handleYear} />
        <input type="text" value={car.Brand} onChange={handleBrand} />
        <input type="text" value={car.Model} onChange={handleModel} />
        </>
    )
}
export default Cars