/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap"
import Faq from "../components/Faq"
import coachImage from "../assets/img/testimonial/people-1.jpg"
import { Navigate } from "react-router-dom"

const DetailPage = () => {

  // useEffect(() => {

  // }, [])


  return (
    <div className="detail-page">
      <div className="detail min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">Coach Name</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="pt-5 order-md-1 order-1">
              <img src={coachImage} alt="coach" className="w-100 mb-5 rounded-top" />
            </Col>
            <Col md={6} className="pt-5 order-md-2 order-2">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eos non enim libero sed sequi sapiente, porro adipisci beatae at explicabo alias voluptatum doloribus voluptate eius ex saepe fugiat vero tempora voluptates exercitationem mollitia consequuntur pariatur nobis. Dignissimos, libero quam consectetur doloribus dolorem sit! Voluptates est nobis commodi? Unde, pariatur?</p>

              <h4 className="pt-3">Rating:</h4>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <br />

              <h4 className="pt-3">Game Coached:</h4>
              <p>Mobile Legend: Bang-Bang, League of Legends</p>

              <h4 className="pt-3">Price:</h4>
              <p className="m-0 text-primary fw-bold">Rp. 420.000</p>

              <button className="btn btn-danger mt-3 btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => Navigate("/")}>Order Coach</button>
            </Col>
          </Row>
        </Container>
      </div>
      <Faq />
    </div>
  )
}

export default DetailPage