import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3  p-6 flex flex-nowrap gap-10 overflow-x-auto'>
      {props.user.map(function(elem,idx){
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
      })
      }
    </div>
  )
}

export default RightContent
