import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from "../context/Themecontext";
import { Link } from "react-router-dom";
import "../scss/Navbar.scss";
import { motion } from "motion/react";

const Navbar = () => {
  const {theme, toggleTheme } = useTheme();
  const [toggleLink, setTogglelink] = useState(false);

  const handleToggle = () => setTogglelink(prev => !prev);

  return (
    <motion.div 
    initial={{y:-100}}
    animate={{y:0}}
    transition={{duration: 2}}
    className="Navbar sm:p-4 lap:p-8">
      <div className="logo"><Link to="/"><span className="suleyman sm:text-xl lap:text-2xl">Suleyman</span><span className="the">The</span><span className="magn sm:text-xl lap:text-2xl">Magnificent</span></Link></div>
      <div className={`links sm:flex-col lap:flex-row sm:gap-2 lap:gap-4 sm:absolute lap:relative sm:right-4 sm:top-12 lap:top-0 sm:text-lg laptop:text-xl ${toggleLink ? "sm:flex sm:bg-blue-900/50 lap:bg-transparent" : "sm:hidden lap:flex"}`}>
        <div className={!toggleLink ? "sm:hidden lap:block" : ""}> <Link to="/">Home</Link> </div>
        <div className={!toggleLink ? "sm:hidden lap:block" : ""}> <Link to="/about">About</Link> </div>
        <div className={!toggleLink ? "sm:hidden lap:block" : ""}> <Link to="/skills">Skills</Link> </div>
        <div className={!toggleLink ? "sm:hidden lap:block" : ""}> <Link to="/projects">Projects</Link> </div>
        <div className={!toggleLink ? "sm:hidden lap:block" : ""}> <Link to="/contact">Contact</Link> </div>
      </div>
      <div className="rightNav">
        <div onClick={handleToggle} className="menu sm:block lap:hidden">{!toggleLink ? <MenuIcon /> : <CloseIcon />} </div>
        <button onClick={toggleTheme}>
        {theme === "Light" ? <DarkModeIcon /> : <Brightness7Icon />}
      </button>
      </div>
    </motion.div>
  );
};

export default Navbar;

