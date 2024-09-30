import "./styles.css";
import paypal from "../../assets/paypal.jpg";

const Monthly = () => {
  return (
    <div className='monthly'>
      <div className="top">
        <h3>Monthly Subscription</h3>        
      </div>
      <div className="bottom">
        <div className="paypal">
          <img src={paypal} alt="paypal"/>
        </div>
        <div className="orders">
          <select >
            <option>PayPal</option>
          </select>
          <select>
            <option>5000 Coins + Premium $5.99</option>
            <option>10000 Coins + Premium $6.99</option>
            <option>15000 Coins + Premium $7.99</option>
            <option>20000 Coins + Premium $8.99</option>
            <option>25000 Coins + Premium $9.99</option>
            <option>30000 Coins + Premium $10.99</option>
            <option>35000 Coins + Premium $11.99</option>            
            <option>40000 Coins + Premium $12.99</option>            
          </select>   
          <button>ORDER NOW</button>
        </div>
        <div className="info">
          <p>More Information</p>                    
        </div>
      </div>
    </div>
  )
}

export default Monthly;
