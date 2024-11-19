import { createContext, useState } from "react";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('task-list')) || [])

    const [addTask, setAddTask] = useState('')
    const [searchTask, setSearchTask] = useState('')

    const handleChange = (id) => {
        const task = tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task)
        setTasks(task)
        localStorage.setItem("task-list", JSON.stringify(task))
    }

    const handleDelete = (id) => {
        const task = tasks.filter(task => task.id !== id)
        setTasks(task)
        localStorage.setItem("task-list", JSON.stringify(task))
    }

    const handleSubmit = () => {
        if (addTask) {
            const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1
            const task = { id, data: addTask, checked: false }
            const allTasks = [...tasks, task]
            setTasks(allTasks)
            setAddTask('')
            localStorage.setItem("task-list", JSON.stringify(allTasks))
        }
    }

    return (
        <DataContext.Provider value={{
            tasks, setTasks, handleChange, handleDelete, addTask, setAddTask, handleSubmit, searchTask, setSearchTask
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext