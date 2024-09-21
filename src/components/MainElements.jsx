import Coins from "./Coins";
import "./business.scss";
import AddNew from "./cards/AddNew";
import Tracking from "./cards/Tracking";
import MyExchanges from "./cards/MyExchanges";
import { useState } from "react";
import MyAffilliate from "./cards/MyAffilliate";
import Home from "./cards/Home";

const MainElements = () => {

  const [page, setPage] = useState("myExchanges")

  return (
    <div className='mainElements'> 
      {page === "coins" && <Coins/>}
      {page === "home" && <Home/>}
      {page === "myExchanges" && <MyExchanges/>}
      {page === "addNew" && <AddNew/>}
      {page === "tracking" && <Tracking />}
      {page === "affiliate" && <MyAffilliate />}
      {page === "suppport" && <Support />}
    </div>
  )
}

export default MainElements
