import social from "../assets/social.jpg";
import "./navbar.scss";
import { useNavigate } from 'react-router-dom';


const NavbarHome = () => {
    
    const navigate = useNavigate();

  return (
    <div className='navbar'>
        <div className="leftnav">
            <div className="leftDiv">
                <img src={social} alt="logo"/>
            </div>
            <div className="rightDiv">
                <p>FOLLOW ME I FOLLOW YOU</p>
                <span>Your No. 1 Social Network Site</span>
            </div>   
        </div>
        <div className="centernav"></div>
        <div className="rightnav">
            <button onClick={() => navigate("/login")}>Log In</button>                        
            <button onClick={() => navigate("/register")}>Register</button>    
        </div>        
    </div>
  )
}

export default NavbarHome
