import "./business.scss";
import Monthly from "../components/coins/Monthly";
import BuyCoins from "../components/coins/BuyCoins";
import BuyPremium from "../components/coins/BuyPremium";
import BuyActive from "../components/coins/BuyActive";
import BuyFeature from "../components/coins/BuyFeature";
import BuyBulk from "../components/coins/BuyBulk";
import ReedemCoupon from "../components/coins/RedeemCoupon";

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
