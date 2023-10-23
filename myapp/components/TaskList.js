'use client'

import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from 'axios'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState("all");

    const fetchTasks = async () => {
        try {
            const response = await axios.get("/api/task")
            setTasks(response.data)
        } catch (error) {
            console.log("Error getting tasks", error)
        }
    }
    useEffect(() => {
        fetchTasks()
    }, [])
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }
    const filteredTask = filter === "all" ? tasks : tasks.filter(task => task.status === filter)
  return (
    <section className='px-4 py-8'>
        
        <div className='mb-4'>
        <label htmlFor='filter'>Filter for Status</label>
        <select
        id='filter'
        name='filter'
        value={filter}
        onChange={handleFilterChange}
        >
        <option value='all'>All</option>
        <option value='Open'>Open</option>
        <option value='Closed'>Closed</option>
        <option value='Progress'>Progress</option>
        </select>
        </div>
        <table className='w-full border-collapse'>
        <thead>
            <tr>
                <th className='border border-gray-300'>Title</th>
                <th className='border border-gray-300'>Status</th>
                <th className='border border-gray-300'>Update</th>
            </tr>
        </thead>
        <tbody>
            {filteredTask.map((task) => (
                <tr key={task._id}>
                    <td className='border border-gray-300 text-center py-2'>{task.title}</td>
                    <td className='border border-gray-300 text-center'>{task.status}</td>
                    <td className='border border-gray-300 text-center'>
                    <Link
                    href={`/task/${task._id}`}
                    onClick={() =>{}}
                    >Update</Link>

                    </td>

                </tr>
            ))}
        </tbody>
        </table>
    </section>
  )
}

export default TaskList