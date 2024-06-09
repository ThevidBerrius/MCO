/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap"
// import { dataEvent } from "../data/index"
import Faq from "../components/Faq"
import { useEffect, useState } from "react";
import { useBackend } from "../data/useBackend";
import { useNavigate } from "react-router-dom";


const EventPage = () => {
  let navigate = useNavigate();
  const [eventData, setEventData] = useState([]);
  const { GetAllEvents } = useBackend();

  useEffect(() => {
    GetAllEvents().then(x => setEventData(x.data))
  }, []);

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
            {eventData.map((events) => {
              console.log(eventData)
              return (
                <Col key={events.eventID} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={500}>
                  <img src={events.eventPicture} alt="unsplash.com" className="w-100 mb-5 rounded-top object-fit-cover" />
                  <h5 className="mb-5 px-3">{events.eventName}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <button className="btn btn-danger rounded-1" onClick={() => navigate("/eventdetail")}>Detail</button>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <div>
        <Faq />
      </div>
    </div>
  )
}

export default EventPage