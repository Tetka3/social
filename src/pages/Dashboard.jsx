import Links from '../components/dashboardEl/Links'
// import Links from ''
import Navbar from '../components/Navbar'
import Sidebar from '../components/dashboardEl/Sidebar'
import Footer from '../components/Footer'
import MainElements from '../components/dashboardEl/MainElements'
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
      <Footer />    
    </div>
  )
}

export default Dashboard
