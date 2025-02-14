import React from 'react'
import { useState } from "react"
import axios from "axios"

const TaskForm = ({ setTasks }) => {
    const [title, setTitle] = useState("")
    const handleSubmit = async(e)=> {
        e.preventDefault()
        if(!title.trim()) return;
        const {data} = await axios.post("http://localhost:5000/api/tasks",{title, completed: false})
        setTasks((prev)=>[...prev, data])
        setTitle("")
    }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
        <input
          type="text"
          placeholder = "New Task"
          className = "border p-2 flex-1"
          value = {title}
          onChange={(e)=>setTitle(e.target.value)}
          />
          <button type = "submit" className="bg-blue-500 text-white px-4 py-2">Add</button>
    </form>
    
  )
}

export default TaskForm
