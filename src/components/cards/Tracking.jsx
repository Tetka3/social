import "./cards.scss";

const Tracking = () => {
  return (
    <div className='tracking'>        
        <div className="track-header">
            <p>History: See who has been clicking your links</p>
        </div> 
        <div className="track-input">
            <select>
                <option>London</option>
                <option>Berlin</option>
                <option>Greenland</option>
                <option>Tokyo</option>
                <option>Paris</option>
            </select>
            <button>Change</button>
            <p>Approval Actions will appear here if there is something to Approve or Deny</p>
        </div>
        <div className="track-info">
            <p>Your Links & Social Network Accounts</p>
        </div>   
    </div>
  )
}

export default Tracking
