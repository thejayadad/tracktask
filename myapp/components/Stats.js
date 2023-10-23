'use client'

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {FaUser, FaTasks} from "react-icons/fa"

const Stats = () => {
    const [stats, setStats] = useState(null);
    useEffect(() => {
        axios.get("/api/stats").then((response) => {
            setStats(response.data)
        })
    }, [])
    if(!stats){
        return <div className='text-center'>Loading Stats....</div>
    }
  return (
    <section className='px-4'>
        <h2 className='text-2xl font-light mt-4 mb-4'>Database Stats</h2>
        <div className='flex justify-between gap-4 mx-auto px-4'>
        <div className='bg-white p-4 rounded-lg'>
            <div className='flex items-ceter mb-2'>
                <FaUser className='text-2xl text-blue-500 mr-1' />
                <p className='text-lg font-semi-bold mr-2'>Users:</p>
                <p>{stats.userCount}</p>
            </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
            <div className='flex items-ceter mb-2'>
                <FaTasks className='text-2xl text-blue-500 mr-1' />
                <p className='text-lg font-semi-bold mr-2'>Total:</p>
                <p>{stats.totalTaskCount}</p>
            </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
            <div className='flex items-ceter mb-2'>
                <FaTasks className='text-2xl text-blue-500 mr-1' />
                <p className='text-lg font-semi-bold mr-2'>Open:</p>
                <p>{stats.openTaskCount}</p>
            </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
            <div className='flex items-ceter mb-2'>
                <FaTasks className='text-2xl text-blue-500 mr-1' />
                <p className='text-lg font-semi-bold mr-2'>Closed:</p>
                <p>{stats.closeTaskCount}</p>
            </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
            <div className='flex items-ceter mb-2'>
                <FaTasks className='text-2xl text-blue-500 mr-1' />
                <p className='text-lg font-semi-bold mr-2'>Progress:</p>
                <p>{stats.progressTaskCount}</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Stats