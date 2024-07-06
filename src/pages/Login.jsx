import { useState } from "react";
import "./home.scss";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    if (!username) return;
    setUsername(e.target.value);    
        
  }
  const handlePasswordChange = (e) => {      
    setPassword(e.target.value); 
      
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey")
    setUsername("");
    setPassword("");
  }
    
  return (
    <div className="login">      
      <form className="loginForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={handleNameChange}
        />
        <input 
          type="text" 
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <input type="checkbox"/><text>Remember me for 7 days</text>
        <p>Forgot Password</p>        
        {/* <button onClick={() => navigate("/dashboard")}>Submit</button> */}
        <button onClick={handleSubmit}>Submit</button>
      </form> 
      <div className="member">
        <p>Not a member? <Link to="/register" className="link">Create an account</Link> </p>
      </div>   
    </div>
  )
}

export default Login
