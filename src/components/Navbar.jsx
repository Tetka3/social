import React from 'react'
import social from "../assets/social.jpg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="leftnav">
            <div className="left">
                <img src={social} alt="logo"/>
            </div>
            <div className="right">
                <p>FOLLOW ME I FOLLOW YOU</p>
                <span>Your No. 1 Social Network Site</span>
            </div>   
        </div>
        <div className="centernav"></div>
        <div className="rightnav">
            <button>LogIn</button>
            <button>Register</button>
            <button>Coins: </button>
            <button>Member</button>
            <button>Logout</button>              
        </div>        
    </div>
  )
}

export default Navbar
