// import React from "react";
// import logo from "../../Assets/medicon.svg";
// // import { HiOutlineBars3 } from 'solid-icons/hi'
// import { HiOutlineBars3 } from "react-icons/hi2"


// // import { BsCart2 } from "react-icons/bs"

// import HomeIcon from "@mui/icons-material/Home"
// import InfoIcon from "@mui/icons-material/Info"




// const Navbar = () => {

//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon:<HomeIcon/>
//     },
//     {
//       text:"Solutions",
//       icon:<InfoIcon/>
//     },
//     {
//       text:"News & Events"
//     },
//     {
//       text:"Research"
//     },
//     {
//       text: "About Us"
//     }
//   ]

//   return <nav>
//         <div className="nav-logo-container">
//       <img src={logo} alt="logo" height="40px" />
//        </div>
//        <div className="navbar-link-container">
//         <a href="">Home</a>
//         <a href="">Solutions</a>
//         <a href="">News&Events</a>
//         <a href="">Research</a>
//         <a href="">About Us</a>
//        </div>
//   </nav>;

// };

// export default Navbar
import React, {useState} from 'react';
// import logo from "../../Assets/medicon.svg";
 import logo from "../../Assets/component1.png";
import "./style.css";
import { CloudUploadRounded, ColorLens } from '@mui/icons-material';

const Navbar = () => {
   const[isMenuOpen, setMenuOpen] = useState(false);
   const[showAboutDropdown, setShowAboutDropdown] = useState(false)
  //  const [isDropdownOpen, setDropdownOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
   };

  const toggleSolutionDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  }

  // const toggleDropdown =() => {
  //   setDropdownOpen(!isDropdownOpen);
  // }

   return(
    <nav className='navbar'>
      <div className='logo'><img src={logo} alt="logo" height="55px" /></div>

      <ul className={`nav-links ${isMenuOpen ? 'moblie-menu' : ''}`}>
        <li className='home'>Home</li>
        <li 
        className={`hover-effect ${showAboutDropdown ? 'active': ''}`} onClick={toggleSolutionDropdown}>
        <div className='solution-label'>Solutions</div>
     {   showAboutDropdown ? <>
 
         <li className='town'>
          {/* <li style={{color: 'white', justifyContent: 'center'}}> */}
         <a href='#'></a>
         <ul className='select-box'> 
          <li style={{ borderBottom: '1px solid white' }}>MedPlan</li>
          <li style={{borderBottom: '1px solid white' }}>NaijaPharms</li>
          <li style={{borderBottom: '1px solid white' }}>Tellapharm</li>
          <li style={{borderBottom: '1px solid white' }}>octavia</li>

         </ul>
         </li>
          {/* <select id='solution' className='select-box'>
        <option value= "medplan">MedPlan </option> 
            <option value= "naijapharm">NaijaPharms</option> 
            <option value= "Tellapharm">TellaPharms</option> 
            <option value= "octavia">Octavia</option> 
          </select> */}


        </> : null}
          {/* <label htmlFor='solution'>Solutions</label> */}
          
            {/* <option value= "solution">Solutions</option> <hr></hr> */}
          
      </li>
        <li className='hover-effect'><a href='#news and events'>News & Events</a></li>
        <li className='hover-effect'><a href='#research'>Research</a></li>
        <li className='hover-effect'><a href='#about us'>About us</a></li>

      </ul>

      <div className='hamburger' onClick={toggleMenu} >
        <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        {/* <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div> */}
        {/* <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div> */}
        {/* <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div> */}
      </div>
    </nav>
   );
};

export default Navbar