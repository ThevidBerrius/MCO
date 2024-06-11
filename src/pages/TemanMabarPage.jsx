/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap";
import Faq from "../components/Faq";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBackend } from "../data/useBackend";
import { FaCoins, FaStar } from "react-icons/fa";

const TemanMabarPage = () => {
  let navigate = useNavigate();
  const [temanMabarData, setTemanMabarData] = useState([]);
  const { GetAllUsers, GetAllGames } = useBackend();
  const [game, setGame] = useState([]);
  const [userGameID, setUserGameID] = useState("");

  useEffect(() => {
    GetAllUsers().then((x) => setTemanMabarData(x.data));
    GetAllGames().then((x) => setGame(x.data));
  }, []);

  const handleGameDropdownChange = (event) => {
    setUserGameID(event.target.value);
  };

  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Pesan Teman Mabar
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Temukan teman bermain yang sesuai dengan game kesukaanmu.
              </p>
              <div className="dropdown-kelas animate__animated animate__fadeInUp animate__delay-1s">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleGameDropdownChange}
                >
                  <option value="">Select Game</option>
                  {game.map((game) => {
                    return (
                      <option key={game.gameID} value={game.gameID}>
                        {game.gameName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            {temanMabarData
              .filter((user) => (user.userPrice != 0) && (userGameID != "") ? user.userGameID == userGameID : (user.userPrice != 0))
              .map((user) => (
                <Col
                  key={user.userID}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={500}
                >
                  <img
                    src={user.userPicture}
                    alt="Profile"
                    className="w-100 mb-5 rounded-top object-fit-cover"
                  />
                  <div className="d-flex align-items-center mb-2 px-3">
                    <h5 className="mb-0 me-3">{user.userName}</h5>
                    <div className="d-flex align-items-center justify-content-end flex-grow-1">
                      <p className="m-0 text-primary fw-bold me-2">
                        {user.userPrice} <FaCoins />
                      </p>
                    </div>
                  </div>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <div className="star d-flex align-items-center">
                      <FaStar className="text-warning me-1" />
                      <span className="fw-bold">{user.userRating}</span>
                    </div>
                    <button
                      className="btn btn-danger rounded-1"
                      onClick={() =>
                        navigate("/detail/temanMabar/" + user.userID)
                      }
                    >
                      Order
                    </button>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
      <Faq />
    </div>
  );
};

export default TemanMabarPage;
