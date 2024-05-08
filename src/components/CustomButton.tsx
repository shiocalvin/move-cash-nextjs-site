import React from 'react'
import { cn } from '@/lib/utils'
export default function CustomButton({name, className}: {name: string, className?:string}) {
  return (
    <button className={cn("capitalize font-semibold px-4 py-2 rounded-md text-beige-faint bg-secondary-green  hover:bg-primary-green", className)}>{name}</button>
  )
}
