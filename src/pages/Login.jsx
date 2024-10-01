import { useState } from "react";
import "./home.css";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {    
    setFormData(prevData => {
      return {...prevData, [e.target.name]: e.target.value}
    })
  }  
  
  const handleSubmit = (e) => {
    e.preventDefault();
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
          value={formData.username}
          name="username"
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Password"
          value={formData.password}
          name="password"
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
