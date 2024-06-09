/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { FaUser, FaLock, FaCheck, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isTemanMabar, setIsTemanMabar] = useState(false);
  const [price, setPrice] = useState(0);
  const [userGameID, setUserGameID] = useState("");
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

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

  return (
    <Container className="profile-page min-vh-100 ">
      <Row className="profile justify-content-center animate__animated animate__fadeInUp animate__delay-1s">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <h1 className="fw-bold text-center mb-4">Edit Profile</h1>

            {/* Profile Image */}
            <Form.Group className="mb-3 text-center position-relative">
              <Image
                src={imagePreview || profileImage || "https://via.placeholder.com/150"}
                roundedCircle
                className="profile-image-preview"
              />
              <Form.Control
                type="text"
                placeholder="Enter Image URL"
                value={profileImage}
                onChange={handleProfileImageChange}
                className="mt-3"
              />
            </Form.Group>

            {/* Username */}
            <Form.Group className="mb-3 position-relative">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
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
                value={password}
                onChange={handlePasswordChange}
              />
              <FaLock className="form-icon" />
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group className="mb-3 position-relative">
              <Form.Control
                type="password"
                placeholder="Confirm New Password"
                value={confirmPass}
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
                checked={isTemanMabar}
                onChange={() => setIsTemanMabar(!isTemanMabar)}
              />
            </Form.Group>

            {/* Price */}
            {isTemanMabar && (
              <Form.Group className="mb-3 position-relative">
                <Form.Control
                  type="number"
                  placeholder="Price"
                  value={price}
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
              >
                <option>Select Game</option>
                {/* Replace with your actual game options */}
                <option value="1">Game 1</option>
                <option value="2">Game 2</option>
                <option value="3">Game 3</option>
              </Form.Select>
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3 position-relative">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write something about yourself..."
                value={description}
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
  );
};

export default EditProfilePage;
