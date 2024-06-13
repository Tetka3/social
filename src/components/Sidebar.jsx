import Bonus from "./Bonus";
import "./business.scss";
import Buttons from './Buttons';
import EarnCoins from "./EarnCoins";
import Updates from "./Updates";
import YourAccount from "./YourAccount";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Buttons/>
      <EarnCoins/>
      <YourAccount/>
      <Bonus/>
      <Updates/>
    </div>
  )
}

export default Sidebar
