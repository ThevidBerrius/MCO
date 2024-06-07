/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaUser, FaLock, FaCheck, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useBackend } from "../data/useBackend";

const RegisterPage = () => {
  let navigate = useNavigate();
  const [gameData, setGameData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isTemanMabar, setIsTemanMabar] = useState(false);
  const [price, setPrice] = useState(0);
  const [userGameID, setUserGameID] = useState('');
  const { InsertUser, GetAllGames } = useBackend();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleConfirmPassChange = (event) => {
    setConfirmPass(event.target.value)
  }
  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  const handleGameDropdownChange = (event) => {
    setUserGameID(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username === '') {
      alert('Username must be fileld');
      return;
    }
    if (password === '' || password === '') {
      alert('Password must be filled and confirmed')
      return;
    }
    if (isTemanMabar && price === 0 || isTemanMabar && price < 0) {
      alert("As teman mabar must have a valid price")
      return;
    }
    if (userGameID === '') {
      alert("Game must be filled");
      return;
    }
    if (password !== confirmPass) {
      alert("Password and confirm password Mismatch");
      return;
    }
    const responses = await InsertUser(
      username,
      password,
      "Hey there! I'm " + username + " an avid gamer with a passion for exploring virtual worlds and tackling in-game challenges. I've been gaming for years and have developed a diverse taste in games, ranging from competitive shooters to relaxing simulation games.",
      "https://static.vecteezy.com/system/resources/previews/036/280/650/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
      isTemanMabar,
      isTemanMabar ? price : 0,
      userGameID
    );
    if (responses.status === 200) {
      alert("Registration Success");
      navigate("/login");
    }
    else {
      alert("Register Failed");
      return;
    }
  }

  useEffect(() => {
    GetAllGames().then(x => setGameData(x.data))
  }, [])

  return (
    <div className="register-page">
      <form className="register-form">
        <h1 className="fw-bold">Register</h1>
        <div className="register-field">
          <input className="register-input" type="text" placeholder="Username" onChange={handleUsernameChange} />
          <div className="register-icons"><FaUser /></div>
        </div>
        <div className="register-field">
          <input className="register-input" type="password" placeholder="Password" onChange={handlePasswordChange} />
          <div className="register-icons"><FaLock /></div>
        </div>
        <div className="register-field">
          <input className="register-input" type="password" placeholder="Confirm Password" onChange={handleConfirmPassChange} />
          <div className="register-icons"><FaCheck /></div>
        </div>
        <div className="register-field">
          <div className="containers">
            <div className="register-remember">
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
              <label className="remember-text" htmlFor="teman-mabar">Join as Teman Mabar?</label>
            </div>
          </div>
        </div>
        {isTemanMabar && (
          <div className="register-field">
            <input className="register-input" type="number" placeholder="Price" onChange={handlePriceChange} />
            <div className="register-icons" ><FaDollarSign /></div>
          </div>
        )}
        <div className="register-field">
          <div className="dropdown-register-container">
            <select className="form-select" aria-label="Default select example" onChange={handleGameDropdownChange}>
              <option value=''>Select Game</option>
              {gameData.map((game) => {
                return (
                  <option key={game.gameID} value={game.gameID}>{game.gameName}</option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="register-submit">
          <button type="submit" className="btn btn-danger btn-lg rounded-1" onClick={handleSubmit}><b>Register</b></button>
        </div>
        <div className="login-create-account">
          <p onClick={() => navigate("/login")} >Already have account?</p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
