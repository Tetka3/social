import "./home.scss";
import write from "../assets/write.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    email: ""
  })
  const navigate = useNavigate();
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
        />       
        <input
          type="text"
          placeholder="Email..." 
          name = "email"
        />        
         <input
          type="text"
          placeholder="Password..." 
          name = "password"
        />
        <input
          type="text"
          placeholder="Repeat Password..." 
        />
        <input
          type="checkbox" 
        />
      </form>
      <button onClick={() => navigate("/dashboard")}>Sign Me Up!</button>
      <p>Forgot Password</p>
    </div>
  )
}

export default Register
