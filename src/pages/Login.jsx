import "./home.scss";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
    
  return (
    <div className="login">      
      <form className="loginForm">
        <input type="text" placeholder="Username"/>
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
