import { Container, Row, Col } from "react-bootstrap"
import { dataEvent } from "../data/index"

const EventPage = () => {
  return (
    <div className="event-page">
      <div className="event">
        <Container>
          <Row>
            <Col>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Event Terbaru</h1>
            <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, tempora?</p>
            </Col>
          </Row>
          <Row>
            {dataEvent.map((events) => {
              return(
                <Col key={events.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={events.delay}>
                  <img src={events.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                  <h5 className="mb-5 px-3">{events.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <button className="btn btn-danger rounded-1">{events.button}</button>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default EventPage