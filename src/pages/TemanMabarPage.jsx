import {Container, Row, Col} from "react-bootstrap"
import {temanMabarData} from "../data/index"

import Faq from "../components/Faq"

const TemanMabarPage = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Pesan Teman Mabar</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {temanMabarData.map((temanMabar) => {
                return(
                  <Col key={temanMabar.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={temanMabar.delay}>
                    <img src={temanMabar.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                    <div className="star mb-2 px-3">
                      <i className={temanMabar.star1}></i>
                      <i className={temanMabar.star2}></i>
                      <i className={temanMabar.star3}></i>
                      <i className={temanMabar.star4}></i>
                      <i className={temanMabar.star5}></i>
                    </div>
                    <h5 className="mb-5 px-3">{temanMabar.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <p className="m-0 text-primary fw-bold">{temanMabar.price}</p>
                      <button className="btn btn-danger rounded-1" >{temanMabar.buy}</button>
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

export default TemanMabarPage