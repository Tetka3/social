import { useState } from "react";
import "./home.scss";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {    
    setUsername(e.target.value);  
  }  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password)
    setUsername("");
    setPassword("");
  }
    
  return (
    <div className="login">      
      <form className="loginForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username"
          required
          value={username}
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <input type="checkbox"/><text>Remember me for 7 days</text>
        <p><Link to="/register" className="link">Forgot Password</Link></p>             
        <button onClick={() => navigate("/dashboard")}>Submit</button>        
      </form> 
      <div className="member">
        <p>Not a member? <Link to="/register" className="link">Create an account</Link> </p>
      </div>   
    </div>
  )
}

export default Login
