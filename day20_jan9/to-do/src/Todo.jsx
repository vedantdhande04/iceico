import { use, useState } from "react"

function Todo(){



    const [taskList,upTaskList] = useState(["hello"])
    const[newTask,upNewtask] = useState("")

    const addHandler=(event)=>{
        upNewtask(event.target.value)
    }

    const newTaskHandler = ()=>{
        upTaskList(t=>[...t,newTask])
    }

    return(
        <>
        <h1>Todo List</h1>
        <input type="text" 
            placeholder="Enter a task..."
            value={newTask}
            onChange={addHandler}
                />
        <button onClick={newTaskHandler}>Add</button><br />

        <div>
            <ol>
                {taskList.map((task,index)=><>
                <li key={index}>{task}</li>
                <button>❌</button>
                <button>⬆️</button>
                <button>⬇️</button>
                </>
                )}
            </ol>
        </div>
        </>
    )
}
export default Todo