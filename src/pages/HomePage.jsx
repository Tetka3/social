import Hero from '../components/Hero';
import Social from '../components/mainEl/Social';
import Website from '../components/mainEl/Website';
import Video from '../components/mainEl/Video';
import Business from '../components/mainEl/Business';
import Follow from '../components/Follow';
import Booster from '../components/mainEl/Booster';
import Bookmark from '../components/mainEl/Bookmark';
import "./home.scss";
import System from "../components/System";
import Comments from "../components/Comments";
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
