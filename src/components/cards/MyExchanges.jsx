import "./cards.scss";

const MyExchanges = () => {
  return (
    <div className="exchanges">
        <div className="addSocial">
            <p>Your Custom Exchanges</p>
        </div> 
        <div className="addSocial">
            <button>Add Custom Exchanges</button>
            <p>Approval Actions will appear here if there is something to Approve or Deny</p>
        </div>
        <div className="addSocial">
            <p>Your Links & Social Network Accounts</p>
        </div>        
        <div className="addSocial">
            <p>Links that are not added correctly, broken or in wrong sections will be deleted. Breaking TOS they will be banned <br></br>
            Daily Statistics Reset in 18 hour 26 minutes</p>
            <button></button><span>Enabled</span>
            <button></button><span>Edit Link</span>
            <button></button><span>Boost CPC</span>
            <button></button><span>Delete</span>            
        </div>        
        <div className="addSocial">
            <div className="search">
                <input/>
                <button>Search</button>
            </div>
            <div className="btns">
                <button>Advice</button>
                <button>Tracking</button>
                <button>More Actions</button>
            </div>
        </div>        
        <div className="addSocial">
            <p>Your Links & Social Network Accounts</p>
        </div>        
    </div>
  )
}

export default MyExchanges
