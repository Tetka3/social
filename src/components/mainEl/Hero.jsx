import "./hero.css";
import start from "../../assets/start.mp4";
import {  useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="hero">      
      <video src={start} autoPlay loop muted />      
      <div className="text">
        <p>Get Followers and Likes</p>
        <button onClick={() => navigate('/register')}>Register</button>
      </div>      
    </div>
  )
}

export default Hero;
