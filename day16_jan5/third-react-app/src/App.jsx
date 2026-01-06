import Fruits from './Fruits'
import './App.css'

function App() {
  const fruits = [
        {id:1,name:"apple",tasty:99},
        {id:2,name:"orange",tasty:88},
        {id:3,name:"mango",tasty:95},
        {id:4,name:"watermelon",tasty:78}]
  const veggies = [
        {id:1,name:"cabbage",tasty:99},
        {id:2,name:"tdsd",tasty:88},
        {id:3,name:"sadasd",tasty:95},
        {id:4,name:"asdasd",tasty:78}]
  return(
  <>
  <Fruits items={fruits} />
  <Fruits items={veggies} />
    
    </>)
}

export default App
