import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.png"
import js from "../../public/js.png"
import react from "../../public/react.png"
export default function Portfolio() {
     const carditem=[
    {
      id:1,
      logo:html,
      name:"html", 
    },
     {
      id:2,
      logo:css,
      name:"css",
    },
    {
      id:3,
      logo:js,
      name:"js",
    },
    {
      id:4,
      logo:react,
      name:"react",
    },


 ]
  return (
    <>
    <div className='mt-8 ml-10'>
      <h1 className='text-3xl font-bold'>Portfolio</h1>
      <br />
      <span className='underline font-semibold '>Featured Project</span>
      <br />
      <br />
      <div className='flex gap-20'>
       {
         carditem.map(({id,logo,map})=>(
         <div className=' h-[250px] w-[230px] border-[2px]  hover:scale-110 duration-300 shadow-lg cursor-pointer ' key={id}>
          <img src={logo} alt="" className='h-[150px] w-[150px] p-1 rounded-full border-[2px] ' />
          <div>
          <div>{name}</div>
          <p className='pl-2 text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className='pl-2 justify-around space-x-4'>
           <button className='bg-blue-700 text-white hover:scale-100 rounded-min border-[2px] h-[30px] w-[70px] font-bold'>Video</button>
           <button className='bg-green-700 text-white hover:scale-100 rounded-min border-[2px] h-[30px] pl-2 pr-2 font-bold'>source code</button>
          </div>
         </div>

                  
         ))

       }
      </div>
 
      
    </div>
    <br />
    <br />
    
    <hr />
    </>
  )
}
