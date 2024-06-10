import React from 'react'
import "./links.scss"

const Links = () => {
  return (
    <div className='links'>
        <div className="left">
            <ul>
                <li>Home</li>
                <li>Add New</li>
                <li>Earn Coins</li>
                <li>Buy Coins</li>
            </ul>
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
