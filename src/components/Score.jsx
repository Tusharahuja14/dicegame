import React, { useState } from 'react'

const Score = ({score}) => {
  
  return (
    <div className='flex flex-col  w-[50%]'>
        <h1 className='text-7xl font-bold p-4'>{score}</h1>
        <p className='text-xl font-semibold'>Total Score</p>
    </div>
  )
}

export default Score