import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const Footer = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/thevidberrius', '_blank');
  };

  const handleYoutubeClick = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank');
  };
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">MCO</h3>
            <p className="desc">MCO adalah platform inovatif yang menghubungkan Anda dengan coach profesional dan teman mabar online. Kami menyediakan berbagai layanan untuk meningkatkan pengalaman bermain game Anda, baik untuk belajar strategi baru, meningkatkan skill, atau sekadar mencari teman bermain yang seru. Dengan MCO, Anda dapat menemukan coach yang berpengalaman dalam berbagai game dan teman mabar yang cocok untuk bermain bersama kapan saja.</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123-4567-8910</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">mco.coaching@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="temanmabar">Teman Mabar</Link>
            <Link to="coach">Coach</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Our Social Media</h5>
          <div className="social mt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin" onClick={handleLinkedInClick}></i>
            <i className="fa-brands fa-youtube" onClick={handleYoutubeClick}></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">MCO Company</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer