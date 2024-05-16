import { FaUser, FaLock } from "react-icons/fa"

const LoginPage = () => {
  return (
    <div className="login-page">
            <form className="login-form">
                <h1 className="fw-bold">Login</h1>
                <div className="login-field">
                    <input className="login-input" type="text" placeholder="Username"/>
                    <div className="login-icons"><FaUser/></div>
                </div>
                <div className="login-field">
                    <input className="login-input" type="password" placeholder="Password"/>
                    <div className="login-icons"><FaLock/></div>
                </div>
                <div className="containers">
                    <div className="login-remember">
                        <div className="container">
                            <input type="checkbox" id="cbx" style={{display: "none"}}/>
                            <label htmlFor="cbx" className="check">
                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                                    <polyline points="1 9 7 14 15 4"></polyline>
                                </svg>
                            </label>
                        </div>
                        <label className="remember-text" htmlFor="cbx">Remember me</label>
                    </div>
                    <div className="login-forgot-password" onClick={
                            () => {
                                alert("Contact Customer Service From Contact Provided")
                            }
                        }>
                        <p>Forgot password?</p>
                    </div>
                </div>
                <div className="login-submit">
                    <button type="submit" className="btn btn-danger btn-lg rounded-1"><b>Submit</b></button>
                </div>
            </form>
        </div>
  )
}

export default LoginPage