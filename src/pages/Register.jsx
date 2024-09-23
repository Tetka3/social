import "./home.scss";
import write from "../assets/write.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {

  const [registerData, setRegisterData] = useState({
    fullname: "",
    username: "",
    password: "",
    email: "",
    repeatPassword: ""
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prevData => {
      return {...prevData, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="register">
      <div className="imaged">
        <img src={write} />
      </div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fullname..."
          name = "fullname"
          value = {registerData.fullname}
          onChange={handleChange}
        />       
        <input
          type="text"
          placeholder="Gender..."
          name = "gender"
          value = {registerData.gender}
          onChange={handleChange}
        />       
        <input
          type="text"
          placeholder="Username..."
          name = "username"
          value = {registerData.username}
          onChange={handleChange}
        />       
        <input
          type="text"
          placeholder="Email..." 
          name = "email"
          value = {registerData.email}
          onChange={handleChange}
        />        
         <input
          type="text"
          placeholder="Password..." 
          name = "password"
          value = {registerData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Repeat Password..." 
          name ="repeatPassword"
          value = {registerData.repeatPassword}
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
