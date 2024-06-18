import "./home.scss";
import { Link } from "react-router-dom";

const Login = ({open}) => {
    if (!open) return null;
  return (
    <div className="login">
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Enter password"/>
      <input type="checkbox" />
      <button><Link to="/dashboard" >Sign in</Link></button>
    </div>
  )
}

export default Login
