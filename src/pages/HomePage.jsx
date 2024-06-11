
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Social from '../components/Social';
import Website from '../components/Website';
import Video from '../components/Video';
import Business from '../components/Business';
import Follow from '../components/Follow';
import Booster from '../components/Booster';
import Bookmark from '../components/Bookmark';
import "./home.scss";

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <div className="cards">
          <Social />
          <Website />
          <Video />
          <Business />
        </div>
        <div className="about">
          <Follow />
          <Booster />
          <Bookmark />          
        </div>
      
    </>
  )
}

export default HomePage
