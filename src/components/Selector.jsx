import React, { useState } from 'react';

const Selector = ({selectnumber,Setselectnumber,setselectstatus,selectstatus}) => {
    const numberselector=[1,2,3,4,5,6];
    const handleNumberClick = (item) => {
      Setselectnumber(item);
      setselectstatus(false); 
    };
  return (
    <div className='w-full flex flex-col items-center'>
              {selectstatus&&(<div className='text-red-500 text-xl'>
          <h1>You have not selected any number</h1>
        </div>)}
      <div className='py-4 flex h-20 w-full gap-4 justify-center '>

        {   
            numberselector.map((item,index)=>{
              const isSelected=item===selectnumber;
              return(<div key={index}  className={`${isSelected?'bg-black text-white border-2 border-black px-4 py-2':'bg-white text-black border-2 border-black px-4 py-2'}`} onClick={()=>handleNumberClick(item)}>{item} </div>)})
        }
        
      </div>
      <h1 className='text-lg font-bold text-center items-end'>Select Number</h1> 
    </div>
  );
}

export default Selector;
