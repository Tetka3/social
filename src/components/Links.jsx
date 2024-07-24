import React from 'react'
import "./links.css"


const Links = () => {
  return (
    <div className='links'>
        <div className="left">            
            <li className='activeLink'>Home</li>
            <li>Add New</li>
            <li>Earn Coins</li>
            <li>Buy Coins</li>            
        </div>
        <div className="center"></div>
        <div className="right">
            <ul>
                <li className='activeLink'>Extras</li>
                <li>Support</li>
                <li>Account</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Links
