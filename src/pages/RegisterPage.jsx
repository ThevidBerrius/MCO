import { useState } from "react";
import { FaUser, FaLock, FaCheck, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [isTemanMabar, setIsTemanMabar] = useState(false);
  let navigate = useNavigate();

  return (
    <div className="register-page">
      <form className="register-form">
        <h1 className="fw-bold">Register</h1>
        <div className="register-field">
          <input className="register-input" type="text" placeholder="Username" />
          <div className="register-icons"><FaUser /></div>
        </div>
        <div className="register-field">
          <input className="register-input" type="password" placeholder="Password" />
          <div className="register-icons"><FaLock /></div>
        </div>
        <div className="register-field">
          <input className="register-input" type="password" placeholder="Confirm Password" />
          <div className="register-icons"><FaCheck /></div>
        </div>
        <div className="containers">
          <div className="register-remember">
            <div className="container">
              <input 
                type="checkbox" 
                id="teman-mabar" 
                style={{ display: "none" }} 
                onChange={() => setIsTemanMabar(!isTemanMabar)}
              />
              <label htmlFor="teman-mabar" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
              </label>
            </div>
            <label className="remember-text" htmlFor="teman-mabar">Join as Teman Mabar?</label>
          </div>
        </div>
        {isTemanMabar && (
          <div className="register-field">
            <input className="register-input" type="number" placeholder="Price" />
            <div className="register-icons"><FaDollarSign /></div>
          </div>
        )}
        <div className="register-submit">
          <button type="submit" className="btn btn-danger btn-lg rounded-1"><b>Register</b></button>
        </div>
        <div className="login-create-account">
          <p onClick={() => navigate("/login")} >Already have account?</p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
