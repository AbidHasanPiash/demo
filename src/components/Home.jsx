import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-10'>
        <h1>Home page</h1>
        <div className='space-x-6'>
            <button className='rounded-md py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white'>Log Out</button>
        </div>
        
    </div>
  )
}