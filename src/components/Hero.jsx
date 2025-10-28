import React from 'react'
import Button from './Button';

const Hero = () => {
  return (
    <div>
      <div className='max-w-[55rem] mx-auto text-center mt-20'>
        <h1 className='text-7xl font-bold font-serif'>The Best Way to <span className='bg-amber-300 rounded-2xl text-center'>Review </span> Creative Assets</h1>
        <p className='mt-8 text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam laborum a hic ipsam qui voluptatum. Error sint, hic harum velit eum adipisci fuga. Repellendus, tempora cupiditate.</p>
       <div className='text-2xl'> 
        <Button className="mb-6" title="join us" />
         </div>
         
      </div>
    </div>
  )
}

export default Hero
