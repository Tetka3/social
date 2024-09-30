import "./cards.css";

const AddNew = () => {
  return (
    <div className='addNew'>        
        <div className="addSocial">
            <p>Add New Site or Social Network Account</p>
        </div>        
        <form className="addForm">
            <p>Can't find the one you want? Add a Custom Exchange</p>
            <div className="dataInput">
                <span>Campaign Type</span><input />
            </div>
            <div className="dataInput">
                <span>URL to add</span><input />
            </div>
            <div className="dataInput">
                <span>General Title or Message</span><input />
            </div>
            <div className="dataInput">
                <span>CPC</span><input />
            </div>
            <div className="dataInput">
                <span>Daily Limit</span><input />
            </div>
            <div className="dataInput">
                <span>Max Limit</span><input />
            </div>
            <div className="dataInput">
                <span>Target Countries</span><input />
            </div>
            <div className="dataInput">
                <span>Exclude Countries</span><input />
            </div>
            <div className="dataInput">
                <span>Category</span><input />
            </div>            
            <button>Submit Link</button>
            <p>*Please note: The higher your CPC the faster you get Clicks, Likes, Shares, Views etc</p>
        </form>                 
    </div>    
  )
}

export default AddNew;
