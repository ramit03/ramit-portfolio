"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

type ButtonProps = {
  buttonText:string;
  route:string;
  className?:string;
}

const GlowButton:React.FC<ButtonProps> = ({buttonText,route,className}) => {
  const router = useRouter();
  return (
    <div className='relative inline-flex group w-full'>
        <div
            className='absolute  focus:border-none  transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-sec via-ter to-light rounded-md blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'
          />
          <button
            onClick={()=>router.push(route)}
            className={`relative w-full inline-flex items-center justify-center px-8 py-4 text-2xl font-semibold text-textcol transition-all hover:border-2 hover:border-light duration-200 bg-gray-900  rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${className}`}
            role="button">{buttonText}
        </button>  
    </div>
  
  )
}

export default GlowButton;