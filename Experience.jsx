import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.png"
import js from "../../public/js.png"
import icon from "../../public/icon.png"
import pic from "../../public/c.svg"
export default function Experience() {
  return (
    <div>
      <div className='mt-8 ml-10 '>
        <h1 className='text-3xl font-bold'>Experience</h1>

        </div>
        <br />
        <span className='text-xl pl-10 pt-10'>I've more than 2 years experice in below technolgies</span>
        <br />
        <div className='h-[200px] w-[2500]  flex pt-10 space-x-20 pl-5'>
        <img src={html}  className='rounded-full pt-2' alt="" />
        <img src={css} className='rounded-full pt-2' alt="" />
        <img src={js} className='rounded-full pt-2' alt="" />
        <img src={icon} className='rounded-full pt-2' alt="" />
        <img src={pic} className='rounded-full pt-2' alt="" />
    
       



        </div>
      <br />
      <hr />
    </div>
  )
}
