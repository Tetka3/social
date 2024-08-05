import "./cards.scss";

const Tracking = () => {
    return (
        <div className='tracking'>
            <div className="track-header">
                <p>History: See who has been clicking your links</p>
            </div>
            <div className="track-input">
                <div className="select-option">
                    <select>
                        <option>London</option>
                        <option>Berlin</option>
                        <option>Greenland</option>
                        <option>Tokyo</option>
                        <option>Paris</option>
                    </select>
                    <button>Change</button>
                </div>

                <p>Region: GMT -0 hour -00 minutes History is only kept for the last 4 weeks from today</p>
                <button>DOWNLOAD CSV</button>
            </div>
            <div className="track-info">
                <p>Your Links & Social Network Accounts</p>
            </div>
        </div>
    )
}

export default Tracking
