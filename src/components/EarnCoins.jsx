import "./business.scss";


const EarnCoins = ({ setShowMenu }) => {  

  return (
    <div className='earnCoins'>
      <button onClick={() => setShowMenu(!setShowMenu)}>Earn Coins</button>
    </div>
  )
}

export default EarnCoins;
