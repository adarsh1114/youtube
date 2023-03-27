import React from 'react'
import './Navbar.css'
import logo from "./logo.jpeg";
import Searchbar from "./searchbar/Searchbar";
import {RiVideoAddLine} from 'react-icons/ri';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi';
function Navbar() {
  //const CurrentUser=null;
  const CurrentUser = {
    result:{
      email:"xyz@email.com",
      joinedOn:"2223-01-15T09:57:23.4892",
    },
  };
  return (
    <div className='Container_Navbar'>
    <div className=" burrger_Logo_container">
        <div className="burger">
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div className='logo'>
            <img src={logo} alt=""/>
            <p className='logo_title_navbar'>
                YouTube
            </p>
        </div>
    </div>
    <Searchbar/>
    <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
    <div className='apps_Box'>
      <p className='aapbox'></p>
      <p className='aapbox'></p>
      <p className='aapbox'></p>
      <p className='aapbox'></p>
      <p className='aapbox'></p>
      <p className='aapbox'></p>
      <p className='aapbox'></p>
      <p className='aapbox'></p>
      <p className='aapbox'></p>
    </div>
    <IoMdNotificationsOutline size={22} className="vid_bell_Navbar"/>
    <div className='Auth_cont_Navbar'>
      {CurrentUser ? (
        <>
        <div className='Chanel_logo_app'>
          <p className="fstChar_logo_App">
            {
              CurrentUser?.result.name ?(
                <>
                {CurrentUser?.result.name.charAt(0).toUpperCase()}
                </>
              ):(<>
               {CurrentUser.result.email.charAt(0).toUpperCase()}
              </>
              )
            }
          </p>
        </div>
        </>
      ):(
        <>
      <p className='Auth_Btn'>
        <BiUserCircle size={20}/>
        <b className='b'>Signin</b>
      </p>
        </>
      )
      }
     </div>
    </div>
  )
}

export default Navbar
