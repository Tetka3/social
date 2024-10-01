import Hero from '../components/mainEl/Hero';
import Social from '../components/mainEl/Social';
import Website from '../components/mainEl/Website';
import Video from '../components/mainEl/Video';
import Business from '../components/mainEl/Business';
import Follow from '../components/mainEl/Follow';
import Booster from '../components/mainEl/Booster';
import Bookmark from '../components/mainEl/Bookmark';
import "./home.css";
import System from "../components/mainEl/System";
import Comments from "../components/mainEl/Comments";
import NavbarHome from '../components/NavbarHome';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home"> 
        <NavbarHome/>       
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
          <Comments/> 
          <Footer/>       
    </div>
  )
}

export default HomePage
