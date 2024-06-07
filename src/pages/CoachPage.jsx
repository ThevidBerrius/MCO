import { Container, Row, Col } from "react-bootstrap"
// import {coachData} from "../data/index"
import { useBackend } from "../data/useBackend";


import Faq from "../components/Faq"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CoachPage = () => {
  let navigate = useNavigate();
  const [coachData, setCoachData] = useState([]);
  const { GetAllCoaches } = useBackend();

  useEffect(() => {
    GetAllCoaches().then(x => setCoachData(x.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Pesan Coach</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Tingkatkan kemampuan bermain game favoritmu.</p>
            </Col>
          </Row>
          <Row>
            {coachData.map((coachs) => {
              const getRandomDelay = () => Math.floor(Math.random() * (2000 - 100 + 1)) + 100;

              return (
                <Col key={coachs.coachID} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={getRandomDelay()}>
                  <img src={coachs.coachPicture} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                  <div className="star mb-2 px-3" >
                    <i className="fa-solid fa-star"></i>
                    <p className="fw-bold">{coachs.coachRating}</p>
                  </div>
                  <h5 className="mb-5 px-3">{coachs.coachName}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{coachs.coachPrice}</p>
                    <button className="btn btn-danger rounded-1" onClick={() => navigate("/detail/" + coachs.coachID)}>Order</button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Faq />
    </div>
  )
}

export default CoachPage