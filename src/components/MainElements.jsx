import Coins from "./Coins";
import "./business.scss";
import MyExchanges from "./cards/MyExchanges";

const MainElements = () => {
  return (
    <div className='mainElements'> 
      <Coins/>
      <MyExchanges/>
    </div>
  )
}

export default MainElements
