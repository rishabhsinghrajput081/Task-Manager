import Task from "../models/Task.js"

// get all tasks

export const getTasks = async(req,res) => {
    const tasks = await Task.find()
    res.json(tasks)
}


// create a task

export const createTask = async(req,res) => {
    const newTask = new Task({title: req.body.title})
    await newTask.save()
    res.status(201).json(newTask)
}


// delete a task

export const deleteTask = async(req,res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: "Task Deleted"})
}