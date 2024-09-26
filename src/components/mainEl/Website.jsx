import website from "../../assets/website.png";

const Website = () => {
  return (
    <div className='website'>
      <div className="image">
        <img src={website} alt="" />
      </div>
      <div className="texted">
        <h3>Your Website</h3>
        <p>Promote your wbsite accross all major networks and explode your traffic & sales whilst improving SEO</p>
        <button>Sign Up Free</button>
      </div>
       
    </div>
  )
}

export default Website
