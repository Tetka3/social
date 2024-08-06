import Coins from "./Coins";
import "./business.scss";
import AddNew from "./cards/AddNew";
import Tracking from "./cards/Tracking";
import MyExchanges from "./cards/MyExchanges";
import { useState } from "react";
import MyAffilliate from "./cards/MyAffilliate";

const MainElements = () => {

  const [page, setPage] = useState("affiliate")

  return (
    <div className='mainElements'> 
      {page === "coins" && <Coins/>}
      {page === "myExchanges" && <MyExchanges/>}
      {page === "addNew" && <AddNew/>}
      {page === "tracking" && <Tracking />}
      {page === "affiliate" && <MyAffilliate />}
    </div>
  )
}

export default MainElements
