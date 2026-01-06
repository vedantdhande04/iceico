import List from './List'
import './App.css'

function App() {
  const fruits = ["apple","banana","mango"] 
  const veggies = ["sadasd","cabbage","spinach"] 
  return(<>
    <List item={fruits}/>
    <List item={veggies}/>
    </>
  )
}

export default App
