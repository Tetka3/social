import "./hero.scss";
import start from "../assets/start.mp4";
// import likes from "../assets/likes.mp4";
import {  useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="video">
        <video src={start} autoPlay loop muted />
        {/* <video src={likes} autoPlay loop muted /> */}
        <div className="text">
          <p>Get Followers and Likes</p>
          <button onClick={() => navigate('/register')}>Register</button>
      </div>
      </div> 
    </div>
  )
}

export default Hero
