import "./links.css"
// import "./business.css"

const Bonus = () => {
  return (
    <div className='bonus'>
        <div className="yourBonus">
            <p>Today's Bonus</p>
        </div>
        <div className="details">
            <p>Currently: Level 1</p>
            <p>Use 3 other exchange categories for level 2</p><br></br>
            <span>Your Exchanges Today: 0</span>
            <p>Level 1 x 0 = 0 Bonus coins per exchange today</p>
            <button>Claim 100 Coins</button>
            <p>14 hours 50minutes to claim today's bonus</p>
        </div>          
    </div>
  )
}

export default Bonus
