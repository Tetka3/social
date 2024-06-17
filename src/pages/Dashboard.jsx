import Links from '../components/Links'
import Sidebar from '../components/Sidebar'
import MainElements from '../components/MainElements'
import "./home.scss";

const Dashboard = () => {
  return (
    <div>      
      <Links />
      <div className="elementals">
        <Sidebar/>
        <MainElements/>
      </div>     
    </div>
  )
}

export default Dashboard
