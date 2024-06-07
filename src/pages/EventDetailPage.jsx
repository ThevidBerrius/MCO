import { Container, Row, Col } from "react-bootstrap";
import image1 from "../assets/img/kelas/kelas-1.jpg";
import Faq from "../components/Faq";

const EventDetailPage = () => {
  return (
    <div className="event-detail-page">
      <div className="event-detail min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">Judul Event</h1>
            </Col>
          </Row>
          <Row>
            <Col className="pt-5 animate__animated animate__fadeInUp animate__delay-1s">
              <p className="text-end text-md-end fw-bold">Penulis: Alexander Di Caprio</p>
            </Col>
          </Row>
          <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Col>
              <img src={image1} alt="unsplash.com" className="event-picture w-100 mb-5 rounded-top d-block mx-auto" />
            </Col>
          </Row>
          <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Col xs={12} md={6}>
              <p className="fw-bold">Start Date: 12 December 2024</p>
            </Col>
            <Col xs={12} md={6}>
              <p className="fw-bold text-md-end">End Date: 20 December 2024</p>
            </Col>
          </Row>
          <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Col>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam dolor nostrum iusto atque explicabo dolorem sunt quidem ea consectetur tenetur ullam repellat eaque commodi odit optio similique soluta officiis, natus beatae? Nesciunt eos in perspiciatis, distinctio autem ullam? Molestias quidem qui provident explicabo laudantium, nulla commodi doloremque! Unde labore qui velit tenetur harum quidem non consequuntur minima quas facere mollitia, accusamus officia! Harum error sunt dignissimos necessitatibus esse recusandae doloremque ut distinctio molestiae officia provident excepturi facere reiciendis quo, deserunt voluptatibus. Nulla recusandae eveniet sit vitae fugit minima sapiente odio accusamus atque cum, molestias inventore? Dignissimos maiores animi vero.</p>
            </Col>
          </Row>
          <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Col>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis autem quia, quisquam sapiente, dolore quasi cupiditate totam optio architecto sit, similique quae? Ea deleniti id laboriosam corporis iste optio hic voluptate ex, iure repellat distinctio! Optio enim sunt vero iure deserunt rem mollitia sit eveniet incidunt, similique blanditiis commodi quasi numquam sed, unde quod temporibus perspiciatis praesentium. Ipsa soluta sunt veniam odio, odit hic voluptas enim, placeat incidunt officiis nemo quibusdam architecto harum animi quo aliquid? Eveniet, consequatur maxime odit labore maiores deserunt quos reiciendis, exercitationem soluta, tenetur repellat voluptate quis dolorum ex quidem iusto nemo aspernatur mollitia aliquid est?</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Faq />
    </div>
  );
};

export default EventDetailPage;
