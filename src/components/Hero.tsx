import React from 'react'
import NavBar from './NavBar'

export default function Hero() {
  return (
    <div className='min-h-screen w-full flex flex-col bg-slate-300'>
        <NavBar></NavBar>
        <div>Hero-Text</div>
    </div>
  )
}
