import "./home.scss";
import { useNavigate } from 'react-router-dom';


const Login = ({open}) => {
  const navigate = useNavigate();
    if (!open) return null;
  return (
    <div className="login">
      <form>
        <input/>
        <input/>
        <input/>
      </form>    
    </div>
  )
}

export default Login
