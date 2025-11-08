import React from 'react'
import { motion } from "motion/react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="up">
        <motion.h1 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 3}}
        className='sm:text-3xl lap:text-5xl'>Hey there <span className='hand'>👋</span> I’m 
        <motion.span
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{duration: 3}}
        className="name"> Süleyman</motion.span></motion.h1>
        <h3 className='sm:text-sm lap:text-lg'>"From logic to design, I enjoy bringing code to life."</h3>
        <button className='viewBtn'>view my work</button>
      </div>

     <div className="arrBtn">
        <span className="down">Scroll</span>
        <div className="arrow"> <KeyboardDoubleArrowDownIcon /> </div>
      </div>
    </div>
  )
}

export default Hero