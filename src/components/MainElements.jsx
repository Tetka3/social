import Coins from "./Coins";
// import "./business.scss";
import AddNew from "./cards/AddNew";
import Tracking from "./cards/Tracking";
import MyExchanges from "./cards/MyExchanges";
import { useState } from "react";
import MyAffilliate from "./cards/MyAffilliate";
import Home from "./cards/Home";
import Support from "./cards/Support";
import Account from "./cards/Account";

const MainElements = () => {

  const [page, setPage] = useState("account")

  return (
    <div className='mainElements'> 
      {page === "coins" && <Coins/>}
      {page === "home" && <Home/>}
      {page === "myExchanges" && <MyExchanges/>}
      {page === "addNew" && <AddNew/>}
      {page === "tracking" && <Tracking />}
      {page === "affiliate" && <MyAffilliate />}
      {page === "support" && <Support />}
      {page === "account" && <Account />}
    </div>
  )
}

export default MainElements
