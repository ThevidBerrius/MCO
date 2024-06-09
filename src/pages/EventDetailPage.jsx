/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap";
import Faq from "../components/Faq";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBackend } from "../data/useBackend";

const EventDetailPage = () => {
  const { id } = useParams();
  const { GetEventByEventID } = useBackend();
  const [gameData, setGameData] = useState({});
  useEffect(() => {
    GetEventByEventID(id).then(x => { setGameData(x.data); });
  }, [])


  return (
    (gameData[0] != null) &&
    (<>
      <div className="event-detail-page">
        <div className="event-detail min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">{gameData[0].eventName}</h1>
              </Col>
            </Row>
            <Row>
              <Col className="pt-5 animate__animated animate__fadeInUp animate__delay-1s">
                <p className="text-end text-md-end fw-bold">Penulis: {(gameData[0].eventWriter == null || gameData[0].eventWriter == "") ? "Anonymous" : gameData[0].eventWriter}</p>
              </Col>
            </Row>
            <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
              <Col>
                <img src={gameData[0].eventPicture} alt="unsplash.com" className="event-picture w-100 mb-5 rounded-top d-block mx-auto" />
              </Col>
            </Row>
            <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
              <Col xs={12} md={6}>
                <p className="fw-bold">Start Date: {gameData[0].startDate}</p>
              </Col>
              <Col xs={12} md={6}>
                <p className="fw-bold text-md-end">End Date: {gameData[0].endDate}</p>
              </Col>
            </Row>
            <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
              <Col>
                <p>{gameData[0].eventDescription}</p>
              </Col>
            </Row>
            {/* <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
              <Col>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis autem quia, quisquam sapiente, dolore quasi cupiditate totam optio architecto sit, similique quae? Ea deleniti id laboriosam corporis iste optio hic voluptate ex, iure repellat distinctio! Optio enim sunt vero iure deserunt rem mollitia sit eveniet incidunt, similique blanditiis commodi quasi numquam sed, unde quod temporibus perspiciatis praesentium. Ipsa soluta sunt veniam odio, odit hic voluptas enim, placeat incidunt officiis nemo quibusdam architecto harum animi quo aliquid? Eveniet, consequatur maxime odit labore maiores deserunt quos reiciendis, exercitationem soluta, tenetur repellat voluptate quis dolorum ex quidem iusto nemo aspernatur mollitia aliquid est?</p>
              </Col>
            </Row> */}
          </Container>
        </div>
        <Faq />
      </div>
    </>)
  );
};

export default EventDetailPage;
