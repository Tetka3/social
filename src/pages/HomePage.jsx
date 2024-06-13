
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
import Footer from "../components/Footer";
import System from "../components/System";

const HomePage = () => {
  return (
    <div className="home">
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
          <System />
        <Footer/>
    </div>
  )
}

export default HomePage
