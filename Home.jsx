import React from 'react'
import pic from "../../public/my img.jpeg"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
    <div className='max-w-screen-2xl container max-auto px-4 px-10 my-10 '>
         <div className='flex'>
         <div className='w-1/2 mt-20'>
              <span className='text-xl '>Welcome in My Feed</span>
              <div className='flex space-x-1 text-2xl'>
              <h1 className='font-bold' >Hello, I'm a </h1>
              {/* <span className='text-red-700 font-bold'>Developer</span> */}

              <ReactTyped
          className='text-red-700 font-bold'
          strings={["Developer","Programer","Coder",]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
              </div>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus culpa veniam quia, earum quis dignissimos laboriosam officia rerum illum velit laudantium consectetur possimus neque maxime rem, quasi perferendis facilis quisquam.</p>
             <br />
             <div className='flex space-x-20'>
             <div className='space-y-2'>
                <h1 className='font-bold'>Available On</h1>
             <div className='flex space-x-5'>
            
             <FaSquareFacebook  className='text-xl hover:scale-110 duration-200 cursor-pointer rounded-full '/>
                <FaLinkedin className='text-xl hover:scale-110 duration-200 cursor-pointer rounded-full ' />
                <FaYoutube  className='text-xl hover:scale-110 duration-200 cursor-pointer rounded-full '/>
                <FaTelegram  className='text-xl hover:scale-110 duration-200 cursor-pointer rounded-full '/>
             </div>
             </div>
             <div className='space-y-2 '>
                <h1 className='font-bold ml-20'>Currently Working On</h1>
             <div className='flex space-x-5 ml-20'>
             <DiMongodb  className='text-xl hover:scale-110 duration-200 cursor-pointer rounded-full '/>
             <SiExpress className='text-xl hover:scale-110 duration-200 cursor-pointer rounded-full ' />
             <FaReact  className='text-xl hover:scale-110 duration-200 cursor-pointer rounded-full '/>
             < FaNodeJs className='text-xl hover:scale-110 duration-200 cursor-pointer rounded-full' />
             </div>

             </div>
             </div>
         </div>
         <div className='w-1/2 ml-40 mt- -10'>
         <img src={pic} alt="my img"  className='rounded-full w-[400px] h-[500px] border[20px] ml-10 ' />
         </div>
         </div>
       
    </div>
    
    <hr/>
    </>
  )
}
