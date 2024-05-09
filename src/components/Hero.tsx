import React from 'react'
import NavBar from './NavBar'
import HeroTexts from './HeroTexts'

export default function Hero() {
  return (
    <>
    <div className='min-h-screen w-full flex flex-col bg-beige-faint'>
        <NavBar></NavBar>
        <HeroTexts></HeroTexts>
    </div>
    </>
  )
}
