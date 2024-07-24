import React from 'react'
import "./links.css"


const Links = () => {
  return (
    <div className='links'>
        <div className="left">            
            <li >Home</li>
            <li>Add New</li>
            <li>Earn Coins</li>
            <li>Buy Coins</li>            
        </div>
        <div className="center"></div>
        <div className="right">
            <ul>
                <li>Extras</li>
                <li>Support</li>
                <li>Account</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Links
