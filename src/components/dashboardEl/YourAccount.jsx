import './links.css';

const YourAccount = () => {
  return (
    <div className='yourAccount'>
        <div className="account">
            <p>Your Account</p>
        </div>
        <div className="details">
            <p>Registered Username: Tetka</p>
            <p>Email: email@gmail.com</p><br></br>
            <span>Coins: </span>
            <span>PremiumHours: </span>
            <span>Referrals: </span>
            <span>Cash Balance: </span>
            <span>Newsletter Notification: </span>
            <span>Low Coins Notification: </span>
            <span>Monthly Subscriptions: </span>
        </div>      
    </div>
  )
}

export default YourAccount;
