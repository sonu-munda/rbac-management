import '../styles/LoginScreen.css'
function Login() {
    return (

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

                    <button type="submit" className="login-btn">Login</button>

                </form>
            </div>
        </div>

    )
}
export default Login;