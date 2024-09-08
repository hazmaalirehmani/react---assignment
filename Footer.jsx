import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <div className='justify-center items-center flex space-x-5 pt-20 ' >
      <FaFacebook size={24}/>
      <FaTwitter size={24} />
      <FaInstagram size={24}/>
      <FaLinkedin size={24}/>
      <FaGithub size={24}/>
    </div>
    <div>
        <p className='justify-center items-center flex mt-5'>&copy; 2024Your Copmany .All rights reserved</p>
        <p className='justify-center items-center flex mt-5'> Supportive partner </p>
    </div>
    </>
  )
}
