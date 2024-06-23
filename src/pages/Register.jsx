import "./home.scss";
import write from "../assets/write.png";

const Register = () => {
  return (
    <div className="register">
      <div className="imaged">
        <img src={write}/>
      </div>
      <form className="registerForm">
        <input type="text" placeholder="Username..."/>
        <input type="text" placeholder="Password..."/>
        <input type="text" placeholder="Repeat Password..."/>
        <input type="text" placeholder="Email..."/>
        <input type="text" placeholder="Confirm Email..."/>
        <input type="checkbox" />
      </form>
      <button>Sign Me Up!</button>
      <p>Forgot Password</p>
    </div>
  )
}

export default Register
