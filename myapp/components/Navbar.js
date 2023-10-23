'use client'

import React from 'react'
import {useSession, signIn, signOut} from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const {data: session} = useSession()
  return (
    <header className='px-4 py-8'>
        <div className='flex justify-between max-w-screen-xl mx-auto'>
            <Link href={'/'}>TaskManager</Link>
            <div className='flex'>
                {session ? (
                    <>
                    <p className='mr-4'>{session.user.email}</p>
                    <Link className='mr-4' href={'/task'}>Task</Link>
                    <button onClick={() => signOut()}>signOut</button>
                    </>
                ) : (
                    <>
                    <button onClick={() => signIn()}>SignIn</button>
                    </>
                )
                
                }
            </div>
        </div>
    </header>
  )
}

export default Navbar