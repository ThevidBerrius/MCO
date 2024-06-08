/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap"

import Faq from "../components/Faq"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useBackend } from "../data/useBackend"

const TemanMabarPage = () => {
  let navigate = useNavigate();
  const [temanMabarData, setTemanMabarData] = useState([]);
  const { GetAllUsers } = useBackend();

  useEffect(() => {
    GetAllUsers().then(x => setTemanMabarData(x.data))
  }, []);

  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Pesan Teman Mabar</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Temukan teman bermain yang sesuai dengan game kesukaanmu.</p>
            </Col>
          </Row>
          <Row>
            {temanMabarData.map((user) => {
              return (
                <Col key={user.userID} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={500}>
                  <img src={user.userPicture} alt="unsplash.com" className="w-100 mb-5 rounded-top object-fit-cover" />
                  <div className="star mb-2 px-3">
                    <i className="fa-solid fa-star"></i>
                    <p className="fw-bold">{user.userRating}</p>
                  </div>
                  <h5 className="mb-5 px-3">{user.userName}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{user.userPrice}</p>
                    <button className="btn btn-danger rounded-1" onClick={() => navigate("/detail" + "temanMabar/" + user.userID)}>Order</button>
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

export default TemanMabarPage