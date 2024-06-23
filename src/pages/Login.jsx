import "./home.scss";
import { useNavigate } from 'react-router-dom';


const Login = ({open}) => {
  const navigate = useNavigate();
    
  return (
    <div className="login">
      log
      <form>
        <input/>
        <input/>
        <input/>
        <button onClick={() => navigate("/dashboard")} >Submit</button>
      </form>    
    </div>
  )
}

export default Login
