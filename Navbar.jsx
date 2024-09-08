import React from 'react';
import pic from "../../public/my img.jpeg"
function Navbar() {
  return (
    <>
    <div className='shadow-mid color-gray mt-5 ml-5'>
    <div className='flex justify-between item-center h-16'>
        <div className='flex space-x-2'>
      <img src={pic}alt="my img" height={30} width={50} className='rounded-full'/>
      <h1 className="font-semibold text-xl cursor-pointer">Hamz<span className='text-green-500'>ii.</span>
      <p >Web Developer</p></h1>
  </div>
  <div>
      <ul className='flex space-x-8 text-large font-bold mr-8'>
          <li className='hover:scale-105 duration-200 cursor-pointer'>Home</li>
          <li className='hover:scale-105 duration-200 cursor-pointer'>About</li>
          <li className='hover:scale-105 duration-200 cursor-pointer'>Portfolio</li>
          <li className='hover:scale-105 duration-200 cursor-pointer'>Experience</li>
          <li className='hover:scale-105 duration-200 cursor-pointer'>Contacts</li>
      </ul>
  </div>
  
  
  </div>
  <div></div>
  
  </div>
      </>

  )
}

export default Navbar
