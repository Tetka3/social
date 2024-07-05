import { useState } from "react";
import "./home.scss";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey")
  }
    
  return (
    <div className="login">      
      <form className="loginForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="text" placeholder="Password"/>
        <input type="checkbox"/><text>Remember me for 7 days</text>
        <p>Forgot Password</p>        
        <button onClick={() => navigate("/dashboard")}>Submit</button>
      </form> 
      <div className="member">
        <p>Not a member? <Link to="/register" className="link">Create an account</Link> </p>
      </div>   
    </div>
  )
}

export default Login
