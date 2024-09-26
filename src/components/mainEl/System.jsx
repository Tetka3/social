import "./business.scss";
import system from "../assets/system.png";

const System = () => {
  return (
    <div className="system">
        <div className="leftSystem">
            <p>Why Our System?...</p>
            <img src={system} alt="blog"/>
        </div>
        <div className="explanation">
            <p><b>We are the most advanced social promotion network.</b>We pride in providing quality likes and traffic, and we encourage our members tonever pay for fake likes or traffic. The best thing about our traffic is that it's FREE</p><br></br>
            <ul>
                <li>More than 500,000 active members from over 180 countries</li>
                <li>No. 1 forgenerating traffic and likes</li>
                <li>Social promotion covered</li>
                <li>Fast and user-friendly system</li>
                <li>Top support system</li>
                <li>Quick registration and free points upon sign up as a new member</li>
            </ul><br></br>
            <p>Simply add your link or social account to our platforms, offer a bid and our members will simply follow you or like your posts</p>
        </div>      
    </div>
  )
}

export default System
