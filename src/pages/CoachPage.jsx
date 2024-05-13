import {Container, Row, Col} from "react-bootstrap"
import {coachData} from "../data/index"

import Faq from "../components/Faq"

const CoachPage = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Pesan Coach</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {coachData.map((coachs) => {
                return(
                  <Col key={coachs.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={coachs.delay}>
                    <img src={coachs.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                    <div className="star mb-2 px-3">
                      <i className={coachs.star1}></i>
                      <i className={coachs.star2}></i>
                      <i className={coachs.star3}></i>
                      <i className={coachs.star4}></i>
                      <i className={coachs.star5}></i>
                    </div>
                    <h5 className="mb-5 px-3">{coachs.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <p className="m-0 text-primary fw-bold">{coachs.price}</p>
                      <button className="btn btn-danger rounded-1">{coachs.buy}</button>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
      <Faq/>
    </div>
  )
}

export default CoachPage