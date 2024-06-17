import "./business.scss";
import video from "../assets/video.png";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="video">
      <div className="image">
        <img src={video} alt="" />
      </div>
      <div className="texted">
        <h3>Videos & Tracks</h3>
        <p>Get your videos and tracks to the right people to improve your exposure to different groups of people</p>
        <Link to="/register"><button>Sign Up Free</button></Link>
      </div>
      
    </div>
  )
}

export default Video
