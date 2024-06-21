import "./home.scss";


const Login = ({open}) => {
    if (!open) return null;
  return (
    <div className="login">
      <input type="text" placeholder="Username"/>
      <input type="text" placeholder="Enter password"/>
      <input type="checkbox" />
      <a href="/dashboard" className="linked">Sign in</a>
    </div>
  )
}

export default Login
