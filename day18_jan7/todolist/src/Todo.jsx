import { useState } from "react"

function Todo(){

    const[task,updateTask] = useState(["Fix the code","Wash dishes"])

    const taskHandler =()=>
        {
            const newTask = document.getElementById("task").value
            document.getElementById("task")
            updateTask(task =>[...task,newTask])

        }
    return(
        <>
        <h1>Todo list</h1>
        <ul>{task.map((value,index)=><li key={index}>{value}</li>)}</ul>
        <input type="text" id="task" placeholder="Enter new task"/>
        <button onClick={taskHandler}>Add Task</button>
        </>
    )
}
export default Todo