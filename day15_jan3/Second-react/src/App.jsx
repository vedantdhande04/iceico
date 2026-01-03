import './App.css'
import Button from './button'
import Student from './Student'

function App() {
  
  return(
    <>
    <Button/>
    <Student name="Ved" age={21}/>
    <Student name="Rugved" age={19}/>
    <Student name="Mohit" age={24}/>
    </>
  )
}

export default App
