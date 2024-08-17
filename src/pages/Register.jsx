import "./home.scss";
import write from "../assets/write.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    email: "",
    repeatPassword: ""
  })
  const navigate = useNavigate();

  const handleChange = () => {
    
  }
  return (
    <div className="register">
      <div className="imaged">
        <img src={write} />
      </div>
      <form className="registerForm">
        <input
          type="text"
          placeholder="Username..."
          name = "username"
          onChange={handleChange}
        />       
        <input
          type="text"
          placeholder="Email..." 
          name = "email"
          onChange={handleChange}
        />        
         <input
          type="text"
          placeholder="Password..." 
          name = "password"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Repeat Password..." 
          name ="repeatPassword"
          onChange={handleChange}
        />
        <input
          type="checkbox" 
          onChange={handleChange}
        />
      </form>
      <button onClick={() => navigate("/dashboard")}>Sign Me Up!</button>
      <p>Forgot Password</p>
    </div>
  )
}

export default Register
