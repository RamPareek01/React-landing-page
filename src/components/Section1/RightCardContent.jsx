import { ArrowRight } from 'lucide-react'
import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='h-full w-full absolute top-0 left-0 p-8  flex flex-col justify-between'>
            <h1 className='bg-white  h-12 w-12 text-2xl font-semibold rounded-full flex justify-center items-center'>{props.id+1}</h1>
            <div>
                <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim deleniti eveniet voluptatibus ad similique dolor!</p>
            <div className='flex  justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white px-7 py-2 rounded-full font-medium'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white px-2 py-2 rounded-full '> <ArrowRight/> </button>
            </div>
            </div>
    </div>
  )
}

export default RightCardContent