import { useState } from "react";
import social from "../assets/social.jpg";
import "./navbar.scss";
import { useNavigate } from 'react-router-dom';
import Login from "../pages/Login";

const NavbarHome = () => {

    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

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
            <Login open={login} className="login"/>
            <button onClick={() => setLogin(!login)}>LogIn</button>            
            <button onClick={() => navigate("/register")}>Register</button>                         
                                     
        </div>        
    </div>
  )
}

export default NavbarHome
