import { use, useState } from "react"

function Todo(){



    const [taskList,upTaskList] = useState(["Eat breakfast","Water the plants"])
    const[newTask,upNewtask] = useState("")

    const addHandler=(event)=>{
        upNewtask(event.target.value)
    }

    const newTaskHandler = ()=>{
        upTaskList(t=>[...t,newTask])
    }

    const deleteHandler=(index)=>{
        const updatedTasks = taskList.filter((_ , i)=> i !== index)
        upTaskList(updatedTasks)
    }
    const moveUp=(index)=>{
        if(index>0){
            const updatedTasks = [...taskList];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            upTaskList(updatedTasks)
        }
    }
    const moveDown=(index)=>{
        if(index<taskList.length){
            const updatedTasks = [...taskList];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            upTaskList(updatedTasks)
        }
    }

    return(
        <>
        <h1>Todo List</h1>
        <div className="new-task">
        <input type="text" 
            placeholder="Enter a task..."
            value={newTask}
            onChange={addHandler}
                />
        <button onClick={newTaskHandler}>Add</button><br />
        </div>
        <div>
            <ol>
                {taskList.map((task,index)=><div className="one-task"> 
                <li key={index}>{task}</li>
                <button onClick={()=>deleteHandler(index)}>❌</button>
                <button onClick={()=>moveUp(index)}>⬆️</button>
                <button onClick={()=>moveDown(index)}>⬇️</button>
                </div> 
                )}
            </ol>
        </div>
        </>
    )
}
export default Todo