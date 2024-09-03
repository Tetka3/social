import { useState } from "react";
import Bonus from "./Bonus";
import "./business.scss";
import Buttons from './Buttons';
import EarnCoins from "./EarnCoins";
import Updates from "./Updates";
import Menu from "./Menu";
import YourAccount from "./YourAccount";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const [showMenu, setShowMenu] = useState(true);
  const navigate = useNavigate(); 
  
  
  return (
    <div className='sidebar'>
      <Buttons/>
      <EarnCoins onClick={() => setShowMenu(!showMenu)}/>
      {showMenu && <Menu />} 
      <YourAccount/>
      <Bonus/>
      <Updates/>
    </div>
  )
}

export default Sidebar
