import "./cards.scss";

const MyAffilliate = () => {
    return (
        <div className='affiliate-links'>
            <div className="referral-statistics">
                <div className="top-menu">
                    <p>Referral Stats, Links, Banners and Splash Pages</p>
                </div>
                <div className="bottom-me">
                    <ul>
                        <li>800 followlike Coins for each new active referral.</li>
                        <li>15% of all your referral's Coin (credit) earnings for life.</li>
                        <li>$0.15 Cash for each active referral. Cash out available at $20.00 via Paypal.</li>
                        <li>Earn 1 followlike Coin for every UNIQUE visitor you send to your referral link</li>
                    </ul>
                    <div className="btns">
                        <button>Buy Referrals</button>
                        <button>Buy Referrals</button>
                        <button>Buy Referrals</button>
                    </div>
                    <div className="input-links">
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                    </div>
                </div>
            </div>
            <div className="your-links">
                <div className="left-links">
                    <div className="top-menu">
                        <p>Share your Link Buttons</p>
                    </div>
                    <div className="bottom-menu">
                        <p>Referral Stats, Links, Banners and Splash Pages</p>
                    </div>
                </div>
                <div className="center-links">
                    <div className="top-menu">
                        <p>Your Unique Referral Links</p>
                    </div>
                    <div className="bottom-menu">
                        <label>Your Referral Link:</label>
                        <input type="text" />
                        <label>NEW Your Referral Link: NEW</label>
                        <input type="text" />
                        <label>Your Referral Link:</label>
                        <input type="text" />
                        <label>Your HTML Code</label>
                        <input type="text" />
                        <label>Your BB/Forum Code</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="right-links">
                    <div className="top-menu">
                        <p>Your Unique Splash Pages</p>
                    </div>
                    <div className="bottom-menu">
                        <label>NEW Splash Page 1: NEW</label>
                        <input type="text" />
                        <label>NEW Splash Page 2: NEW</label>
                        <input type="text" />
                        <label>Splash Page 1:</label>
                        <input type="text" />
                        <label>Splash Page 2:</label>
                        <input type="text" />                        
                    </div>
                </div>
            </div>
            <div className="unique-links">
            <div className="top-menu">
                        <p>Your Unique Splash Pages</p>
                    </div>
                    <div className="bottom-menu">
                        <label>NEW Splash Page 1: NEW</label>
                        <input type="text" />
                        <label>NEW Splash Page 2: NEW</label>
                        <input type="text" />
                        <label>Splash Page 1:</label>
                        <input type="text" />
                        <label>Splash Page 2:</label>
                        <input type="text" />                        
                    </div>
            </div>
        </div>
    )
}

export default MyAffilliate
