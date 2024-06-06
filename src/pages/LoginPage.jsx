import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useBackend } from "../data/useBackend";
import { useLocalStorage } from "../data/useLocalStorage";

const LoginPage = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [save, setSave] = useState(false);
  const { UserLogin } = useBackend();
  const { setItem } = useLocalStorage("User");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleChecked = () => {
    setSave(!save)
  }

  const setStorage = {
    userID: "",
    userName: "",
    userPassword: "",
    userDescription: "",
    userRating: 0,
    userPicture: "",
    userIsPlayer: false,
    userPrice: 0,
    userGameID: ""
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const responses = await UserLogin(username, password);
    if (responses.status === 200) {
      setStorage.userID = responses.data.userID;
      setStorage.userName = responses.data.userName;
      setStorage.userPassword = responses.data.userPassword;
      setStorage.userDescription = responses.data.userDescription;
      setStorage.userRating = responses.data.userRating;
      setStorage.userPicture = responses.data.userPicture;
      setStorage.userIsPlayer = responses.data.userIsPlayer;
      setStorage.userPrice = responses.data.userPrice;
      setStorage.userGameID = responses.data.userGameID;
      setItem(setStorage);
      navigate("/");
    }
    else {
      alert("Wrong Username or Password");
    }
  }

  return (
    < div className="login-page" >
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="fw-bold">Login</h1>
        <div className="login-field">
          <input className="login-input" type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          <div className="login-icons">
            <FaUser />
          </div>
        </div>
        <div className="login-field">
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="login-icons">
            <FaLock />
          </div>
        </div>
        <div className="containers">
          <div className="login-remember" onChange={handleChecked}>
            <div className="container">
              <input type="checkbox" id="cbx" style={{ display: "none" }} />
              <label htmlFor="cbx" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
              </label>
            </div>
            <label className="remember-text" htmlFor="cbx">
              Remember me
            </label>
          </div>
          <div
            className="login-forgot-password"
            onClick={() => {
              alert("Contact Customer Service From Contact Provided");
            }}
          >
            <p>Forgot password?</p>
          </div>
        </div>
        <div className="login-submit">
          <button type="submit" className="btn btn-danger btn-lg rounded-1">
            <b>Submit</b>
          </button>
        </div>
        <div className="login-create-account">
          <p onClick={() => navigate("/register")} >Dont Have Account</p>
        </div>
      </form >
    </div >
  );
};

export default LoginPage;
