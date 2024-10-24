import React, { useState } from 'react';
import Score from './Score';
import Selector from './Selector';
import Roledice from './Roledice';

function Play({ tog }) {
  const[score,setScore]=useState(0);
  const [selectnumber,Setselectnumber]=useState(0);
  const [currentdice,setCurrentdice]=useState();
  const[show,setShow]=useState(false);
  const [selectstatus,setselectstatus]=useState(true);
  const generatenumber=(min,max)=>{
    return Math.floor( Math.random()*(max-min)+min);
     }
     const setrandom=()=>{
       const randomnum=generatenumber(1,7);
       setCurrentdice((prev)=>randomnum);
       randomnum===selectnumber?setScore(score+selectnumber):setScore(score)
     }
    const resetscore=()=>{
      setScore(0);
    }
    const showrules=()=>{
      setShow(!show);
    }
  return (
    <div className='max-w-screen-lg mx-auto '>
      <div className='flex flex-col md:flex-row md:gap-16 gap-8 justify-center items-center'> {/* Responsive gap management */}
        <Score score={score} />
        <Selector selectstatus={selectstatus} setselectstatus={setselectstatus} selectnumber={selectnumber} Setselectnumber={Setselectnumber}/>
      </div>
      <Roledice currentdice={currentdice} setrandom={setrandom} resetscore={resetscore} showrules={showrules} show={show}/>
      <div className='mt-8 flex justify-center'>
        <button 
          onClick={tog} 
          className='bg-black  text-white font-bold py-2 px-4 rounded'>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default Play;
