import React from 'react'


const Hero = ({tog}) => {
  return (
 
        <div className='flex justify-center items-center  h-[100vh] w-full gap-10'>
            <img src="/images/dice.png" className="w-[40%] h-[40%]" alt="dice" />
           <div>
            <h1 className='font-bold text-7xl text-black px-12'>DICE GAME</h1>
            <button onClick={tog} className='px-12 py-2 bg-black text-white mx-72 rounded-md'>
                Play
            </button>
            </div>
        </div>

  )
}

export default Hero