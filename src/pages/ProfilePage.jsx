/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { FaUser, FaLock, FaCheck, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useBackend } from "../data/useBackend";
import { useLocalStorage } from "../data/useLocalStorage";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const { GetUserDetail, UpdateUser, GetAllGames, GetGamesByID } = useBackend();
  const { getItem } = useLocalStorage("User");

  const [userData, setUserData] = useState("");
  const [games, setGames] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isTemanMabar, setIsTemanMabar] = useState(false);
  const [price, setPrice] = useState(0);
  const [userGameID, setUserGameID] = useState("");
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [gameName, setGameName] = useState("");

  let temp = getItem();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassChange = (event) => {
    setConfirmPass(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleGameDropdownChange = (event) => {
    setUserGameID(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleProfileImageChange = (event) => {
    const url = event.target.value;
    setProfileImage(url);
    setImagePreview(url);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === "" || password.trim() === "" || confirmPass.trim() === "" || description.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPass) {
      alert("Password and confirm password mismatch");
      return;
    }

    alert("Profile updated successfully!");
    navigate("/profile"); // Redirect to profile page after successful update
  };

  useEffect(() => {
    setUserData(temp);
    GetAllGames().then(x => setGames(x.data));
    setProfileImage(userData.userPicture);
    setUsername(userData.userName);
    setPassword(userData.userPassword);
    setIsTemanMabar(userData.userIsPlayer);
    if (userData.userIsPlayer) {
      setPrice(userData.userPrice);
    }
    setDescription(userData.userDescription);
  }, [])


  return (
    (userData.userDescription) && <>
      {/* {console.log(userData)} */}
      <Container className="profile-page min-vh-100 ">
        <Row className="profile justify-content-center animate__animated animate__fadeInUp animate__delay-1s">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <h1 className="fw-bold text-center mb-4">Edit Profile</h1>

              {/* Profile Image */}
              <Form.Group className="mb-3 text-center position-relative">
                <Image
                  src={imagePreview || profileImage || userData.userPicture || "https://via.placeholder.com/150"}
                  roundedCircle
                  className="profile-image-preview"
                />
                <Form.Control
                  type="text"
                  placeholder="Enter Image URL"
                  value={profileImage || userData.userPicture}
                  onChange={handleProfileImageChange}
                  className="mt-3"
                />
              </Form.Group>

              {/* Username */}
              <Form.Group className="mb-3 position-relative">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={username || userData.userName}
                  onChange={handleUsernameChange}
                  required
                />
                <FaUser className="form-icon" />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3 position-relative">
                <Form.Control
                  type="password"
                  placeholder="New Password"
                  value={password || userData.userPassword}
                  onChange={handlePasswordChange}
                />
                <FaLock className="form-icon" />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3 position-relative">
                <Form.Control
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPass || ''}
                  onChange={handleConfirmPassChange}
                />
                <FaCheck className="form-icon" />
              </Form.Group>

              {/* Join as Teman Mabar */}
              <Form.Group className="mb-3 form-check">
                <Form.Check
                  type="checkbox"
                  id="teman-mabar"
                  label="Join as Teman Mabar?"
                  checked={isTemanMabar || userData.userIsPlayer}
                  onChange={() => setIsTemanMabar(!isTemanMabar)}
                />
              </Form.Group>

              {/* Price */}
              {isTemanMabar && (
                <Form.Group className="mb-3 position-relative">
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    value={price || ''}
                    onChange={handlePriceChange}
                  />
                  <FaDollarSign className="form-icon" />
                </Form.Group>
              )}

              {/* Game Selection */}
              <Form.Group className="mb-3 position-relative">
                <Form.Select
                  aria-label="Select Game"
                  value={userGameID}
                  onChange={handleGameDropdownChange}
                  required
                  defaultValue={userData.userGameID}
                >
                  <option>{games.filter(x => x.gameID == userData.userGameID).map((game) => {
                    return (
                      <div key={game.gameID}>{game.gameName}</div>
                    );
                  })}</option>
                  {games.filter(x => x.gameID != userData.userGameID).map((game) => {
                    return (
                      <option key={game.gameID || ''} value={game.gameID || ''}>{game.gameName || ''}</option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              {/* Description */}
              <Form.Group className="mb-3 position-relative">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Write something about yourself..."
                  value={description || userData.userDescription}
                  onChange={handleDescriptionChange}
                  rows={4}
                />
              </Form.Group>

              {/* Submit Button */}
              <div className="d-grid gap-2">
                <Button variant="danger" type="submit" size="lg">
                  <b>Update Profile</b>
                </Button>
              </div>

              {/* Cancel Link */}
              <div className="text-center mt-3">
                <p onClick={() => navigate("/")}>Cancel</p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditProfilePage;
