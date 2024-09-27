import business from "../../assets/business.png";

const Business = () => {
  return (
    <div className='business'>
      <div className="image">
        <img src={business} alt="" />
      </div>
      <div className="texted">
        <h3>Your Business</h3>
        <p>Grow your business by promoting it to the right people on different major social networks</p>
        <button>Sign Up Free</button>
      </div>
    </div>
  )
}

export default Business
