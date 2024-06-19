import "./business.scss";

const Buttons = () => {
  return (
    <div className='buttons'>
        <div className="left">
            <button>Add New</button>
            <button>Tracking</button>
            <button>My Affiliate Menu</button>
        </div> 
        <div className="right">
            <button>My Exchanges</button>
            <button>Store</button>
            <button>User Guide</button>
        </div>        
    </div>
  )
}

export default Buttons
