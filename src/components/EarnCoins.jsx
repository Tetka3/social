import "./business.scss";
import { useNavigate } from 'react-router-dom';

const EarnCoins = () => {

  const navigate = useNavigate();

  return (
    <div className='earnCoins'>
      <button onClick={() => navigate("/menu")}>Earn Coins</button>
    </div>
  )
}

export default EarnCoins;
