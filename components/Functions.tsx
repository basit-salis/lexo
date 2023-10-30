import { whatWeDo } from '@constants'
import React from 'react'

const Functions = () => {
  return (
 <div className='w-screen min-h-[30rem] bg-zinc-100 relative flex flex-col justify-center padding-y' id='Products'>
    <h1 className='text-2xl text-center lg:text-4xl'>Choose whats right for you</h1>
    <div className='h-auto grid grid-flow-row grid-cols-1 flex-wrap gap-2 mb-5 py-5 md:grid-cols-3 lg:grid-cols-6 lgS:h-40 lg:mb-0 padding-x'>
      {whatWeDo.map(item =>(
        <div className='h-20 bg-white rounded-sm shadow-zinc-200 shadow-lg grid-col-1 flex justify-start items-center p-[15px] transistion-all duration-500 lg:hover:scale-125 md:h-36 md:flex-col md:justify-start' key={item.title}>
            <span className='h-1/2 flex justify-center items-center'><i className={`mdi ${item.icon} text__blue text-4xl`}></i></span>
            <span className='px-3 text-center font-normal'>{item.title}</span>
        </div>
      )) }
    </div>
 </div>
  )
}

export default Functions


// bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%