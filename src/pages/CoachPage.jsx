/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap";
import Faq from "../components/Faq";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBackend } from "../data/useBackend";
import { FaCoins, FaStar } from "react-icons/fa";

const CoachPage = () => {
  let navigate = useNavigate();
  const [coachData, setCoachData] = useState([]);
  const { GetAllCoaches } = useBackend();

  useEffect(() => {
    GetAllCoaches().then((x) => setCoachData(x.data));
  }, []);

  const getRandomDelay = () => Math.floor(Math.random() * (2000 - 100 + 1)) + 100;

  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Pesan Coach
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Tingkatkan kemampuan bermain game favoritmu.
              </p>
            </Col>
          </Row>
          <Row>
            {coachData.map((coach) => (
              <Col
                key={coach.coachID}
                className="shadow rounded"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={getRandomDelay()}
              >
                <img
                  src={coach.coachPicture}
                  alt="Coach Profile"
                  className="w-100 mb-5 rounded-top object-fit-cover"
                />
                <div className="d-flex align-items-center mb-2 px-3">
                  <h5 className="mb-0 me-3">{coach.coachName}</h5>
                  <div className="d-flex align-items-center justify-content-end flex-grow-1">
                    <p className="m-0 text-primary fw-bold me-2">
                      {coach.coachPrice} <FaCoins />
                    </p>
                  </div>
                </div>
                <div className="ket d-flex align-items-center justify-content-between px-3 pb-3">
                  <div className="star d-flex align-items-center">
                    <FaStar className="text-warning me-1" />
                    <span className="fw-bold">{coach.coachRating}</span>
                  </div>
                  <button
                    className="btn btn-danger rounded-1"
                    onClick={() => navigate(`/detail/coach/${coach.coachID}`)}
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

export default CoachPage;
