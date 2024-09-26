import "./business.scss";
import fb from "../../assets/fb.png";
// import vk from "../assets/vk.jpg";
// import tumblr from "../assets/tumblr.png";
// import diigo from "../assets/diigo.jpg";
// import reddit from "../assets/reddit.png";
// import linkedin from "../assets/linkedin.jpg";
// import instagram from "../assets/instagram.jpg";
// import twitter from "../assets/twitter.jpg";
// import pinterest from "../assets/pinterest.png";
// import snapchat from "../assets/snapchat.png";
// import telegram from "../assets/telegram.jpg";
// import youtube from "../assets/youtube.png";

const Booster = () => {
  return (
    <div className='booster'>
      <div className="info">
          <h3>Social Media & Traffic Booster</h3>
          <h3>Social Media & Traffic Booster</h3>
          <p>Whether you're a new business or an old one, you can count on our platforms to boost traffic. It does not matter. All that matters is your committment and desire toexcel by connecting to potential customers and business partners. You can improve your social network with the following social media platforms.</p><br></br>
      </div>
      <div className="socials">
        <img src={fb}/>
        {/* <img src={linkedin}/>        
        <img src={twitter}/>
        <img src={youtube}/>
        <img src={pinterest}/>
        <img src={snapchat}/>             
        <img src={vk}/>      
        <img src={reddit}/>      
        <img src={diigo}/>      
        <img src={tumblr}/>
        <img src={telegram}/> 
        <img src={instagram}/>       */}
      </div>
    </div>
  )
}

export default Booster
