
import Navbar from '../components/Navbar'
import Links from '../components/Links'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import MainElements from '../components/MainElements'
import "./home.scss";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Links />
      <div className="elementals">
        <Sidebar/>
        <MainElements/>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard
