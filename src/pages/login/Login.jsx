import './login.css'
import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
    <form className="loginForm">
        <label >Email</label>
        <input type="text" className='loginInput' placeholder='Enter your Email..'/>
        <label >Password</label>
        <input type="text" className='loginInput' placeholder='Enter Password'/>
        <button className='loginButton'>Login</button>
      
    </form>
    <button className='loginRegisterButton'> <Link className='Links' to="/register">Register</Link> </button>
    </div>
  )
}

export default Login
