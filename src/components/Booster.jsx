import "./business.scss";
import fb from "../assets/fb.png";
import linkedin from "../assets/linkedin.jpg";
import instagram from "../assets/instagram.jpg";
import twitter from "../assets/twitter.jpg";

const Booster = () => {
  return (
    <div className='booster'>
      <div className="info">
          <h3>Social Media & Traffic Booster</h3>
          <p>Whether you're a new business or an old one, you can count on our platforms to boost traffic. It does not matter. All that matters is your committment and desire toexcel by connecting to potential customers and business partners. You can improve your social network with the following social media platforms.</p><br></br>
      </div>
      <div className="socials">
        <img src={fb}/>
        <img src={linkedin}/>
        <img src={instagram}/>
        <img src={twitter}/>
        <img src={fb}/>
        <img src={fb}/>
        
      </div>
    </div>
  )
}

export default Booster
