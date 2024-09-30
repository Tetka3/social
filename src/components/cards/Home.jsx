import "./cards.css";
import start from "../../assets/start.mp4";

const Home = () => {
  return (
    <div className="dashboard-home">
      <div className="card-input">
        <video src={start} autoPlay loop muted />
      </div>
      <div className="member-actions">
        <div className="current-actions">
          <div className="top-menu">
            <p>Share your Link Buttons</p>
          </div>
          <div className="bottom-menu">
            <p>Referral Stats, Links, Banners and Splash Pages</p>
          </div>
        </div>
        <div className="registered-actions">
          <div className="top-menu">
            <p>Share your Link Buttons</p>
          </div>
          <div className="bottom-menu">
            <p>Referral Stats, Links, Banners and Splash Pages</p>
          </div>
        </div>
      </div>
      <div className="adverts">
        <p>Advertise Here</p>
        <p>From $20 per 250,000 impressions</p>
      </div>
    </div>
  )
}

export default Home;
