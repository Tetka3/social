import { useState } from "react";
import Bonus from "./Bonus";
// import "./business.scss";
import Buttons from './Buttons';
import EarnCoins from "./EarnCoins";
import Updates from "./Updates";
import Menu from "./Menu";
import YourAccount from "./YourAccount";


const Sidebar = () => {

  const [showMenu, setShowMenu] = useState(false);   
  
  return (
    <div className='sidebar'>
      <Buttons/>
      <EarnCoins onAdd={() => setShowMenu(!showMenu)}/>
      {showMenu && <Menu />} 
      <YourAccount/>
      <Bonus/>
      <Updates/>
    </div>
  )
}

export default Sidebar
