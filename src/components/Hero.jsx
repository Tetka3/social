import "./hero.scss";
import start from "../assets/start.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <div className="video">
        <video src={start} autoPlay loop muted />
        <div className="text">
          <p>Get Followers and Likes</p>
          <button>Register</button>
      </div>
      </div>     
      
    </div>
  )
}

export default Hero
