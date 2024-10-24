import React, { useState } from 'react'

const Roledice = ({currentdice,setrandom,resetscore,showrules,show}) => {
  
    const getdicevalue=(dicevalue)=>{
      switch(dicevalue)
      {
        case 1:
          return "/images/dice_1.png";
        case 2:
          return "/images/dice_2.png";
        case 3:
          return "/images/dice_3.png";
        case 4:
          return "/images/dice_4.png";
        case 5:
          return "/images/dice_5.png";
        case 6:
          return "/images/dice_6.png";
          default:
          return "/images/dice_1.png";
      }
    }
  return (
    <div className='flex items-center justify-center flex-col gap-2'>
        <img onClick={setrandom} className='h-40 w-40 mt-20' src={getdicevalue(currentdice)} alt="dice_1" />
        <div className='font-semibold text-lg'>Click on dice to roll</div>
        <div className='flex flex-col gap-3'>
        <button className='h-10 w-40 border-black border-2 rounded-md' onClick={resetscore}>Reset Score</button>
        <button className='h-10 w-40 border-black border-2 rounded-md'onClick={showrules}>Show Rules</button>
        </div>
        <div className='bg-red-100'>{show&&<div className='mt-5 p-4'>
          <h1 className='font-bold text-2xl'>How to play dice game</h1>
          <h4>Select any number</h4>
          <h4>Click on dice image </h4>
          <h4>after click on  dice  if selected number is equal to dice number you will get same point as dice </h4>
          <h4>if you get wrong guess then  2 point will be dedcuted </h4>
          </div>}
          </div>
    </div>
  )
}

export default Roledice