// import "./business.scss";
// import Monthly from "../components/coins/Monthly";
import Monthly from "../coins/Monthly";
import BuyCoins from "../coins/BuyCoins";
import BuyPremium from "../coins/BuyPremium";
import BuyActive from "../coins/BuyActive";
import BuyFeature from "../coins/BuyFeature";
import BuyBulk from "../coins/BuyBulk";
import ReedemCoupon from "../coins/RedeemCoupon";

const Coins = () => {
  return (
    <div className="coined">
        <div className="top">
            <Monthly />
            <BuyCoins />
        </div>
        <div className="center">
            <BuyPremium/>
            <BuyActive />
        </div>
        <div className="bottom">
            <BuyFeature />
            <BuyBulk />
        </div> 
        <div className="reedemed">
            <ReedemCoupon/>
        </div>     
    </div>
  )
}

export default Coins
