import "./business.scss";
import social from "../../assets/network.png";

const Social = () => {
  return (
    <div className="social">
      <div className="image">
        <img src={social} alt="" />
      </div>
      <div className="texted">
        <h3>Your Social Networks</h3>
        <p>Get likes, shares, views, followers, subscribers and hits accross all networks</p>
        <button>Sign Up Free</button>
      </div>

    </div>
  )
}

export default Social
