import social from "../assets/social.jpg";
import "./navbar.scss";
import { Link } from 'react-router-dom';

const NavbarHome = () => {
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
            <Link to="/login"><button>LogIn</button></Link>
            <Link to="/register"><button>Register</button></Link>                         
        </div>        
    </div>
  )
}

export default NavbarHome
