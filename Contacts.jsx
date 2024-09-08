import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"







export default function Contacts() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit =async (data) => {
     const userinfo={
        name:data.name,
        email:data.email,
        message:data.message,
     }
     try{
      await axios.post("https://getform.io/f/avrenzva",userinfo)
     alert("your message has been sent")
     }catch(error){
   console.log(error);
     }

      }
  return (
    <>
    <div className='mt-8 ml-10 '>
      <h1 className='text-3xl font-bold'>Contacts me</h1>
      <br />
     
     <span className='text-xl'>Please fill out the form below to contact me</span>
     <br />
     <br />
     <div className='flex flex justify-center item-center mt-5'>
     <form 
    //  action="https://getform.io/f/avrenzva"
    //   method="POST" 
      className='bg-slate-200 pl-6 w-[500px] h-[420px] ' onSubmit={handleSubmit(onSubmit)}>
     
      <div>
        <h1 className='font-bold pt-5'>Send Your Message</h1>
        <br />
        
        <label className='text-gray-700 font-bold'> Full Name</label>
        <br />
        <input  {...register("name")}className='shadow-appearance-non border rounded w-[350px] py-2 px-3 ' type="text" placeholder='Name' name="name" />
        {errors.name && <span>This field is required</span>}
        <br />
        <br />
        <label className='text-gray-700 font-bold'>Email Address</label>
        <br />
        <input {...register("email address")} className='shadow-appearance-non border rounded w-[350px] py-2 px-3' type="text" placeholder='Email Address ' email="email" />
        {errors.emailaddress && <span>This field is required</span>}
        <br />
        <br />
        <label className='text-gray-700 font-bold'>Message</label>
        <br />
        
        <textarea  {...register("message")}className='w-[350px] py-2 px-3' id="name" placeholder='Type Your Message Here  ' message="message"></textarea>
        {errors.message && <span>This field is required</span>}
        <br />
        <br />
        <button className='bg-black text-white w-[60px] h-[30px] rounded-xl ' type="submit">Send</button>
      </div>
     </form>
     <hr />
    </div>
    </div>
    <br />
    <br />
    <hr />
    </>
  )
}
