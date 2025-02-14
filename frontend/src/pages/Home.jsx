import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";


import React from 'react'

const Home = () => {
    const[tasks,setTasks] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/api/tasks").then((res)=>{
            setTasks(res.data)
        })
    },[])
  return (
    <div className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">Task Manager</h1>
        <TaskForm setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default Home
