import { Link } from 'react-router-dom';
import '../styles/LoginScreen.css'
function Login() {
    return (

        <div className='login-container-wrapper'>
            <div className="container">
                <div className="form-container">
                    <h1>Login</h1>
                    <form>
                        <div className="input-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>

                        <div className="input-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required />
                        </div>

                        <div className="options">
                            <label>
                                <input type="checkbox" /> Remember Me
                            </label>
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>

                        <Link to='/home' type="submit" className="login-btn">Login</Link>
                    </form>
                </div>
            </div>
        </div>



    )
}
export default Login;