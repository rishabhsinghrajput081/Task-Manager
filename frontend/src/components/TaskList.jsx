import axios from "axios";

import React from 'react'

const TaskList = ({ tasks, setTasks }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`)
        setTasks((prev)=>prev.filter((task)=> task._id !== id))
    }
  return (
    <ul className="space-y-2">
        {tasks.map((task)=>(
            <li key={task._id} className="flex justify-between border p-2">
                <span>{task.title}</span>
                <button onClick={()=> handleDelete(task._id)} className="bg-red-500 text-white px-2 p-1">
                Delete
                </button>
            </li>
        ))}
    </ul>
  )
}

export default TaskList
