import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import { commentsData } from '../data'; 

const DisplayComments = () => {
  return (
    <div className="comment-section">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="fw-bold text-center">Comments</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {commentsData.map((comment) => (
                <ListGroup.Item key={comment.id} className="d-flex align-items-center mb-3">
                  <Image
                    src={comment.image}
                    alt={comment.name}
                    roundedCircle
                    width="50"
                    height="50"
                    className="me-3"
                  />
                  <div>
                    <strong>{comment.name}</strong>
                    <div className="star d-flex align-items-center">
                      <i className={comment.star1}></i>
                      <i className={comment.star2}></i>
                      <i className={comment.star3}></i>
                      <i className={comment.star4}></i>
                      <i className={comment.star5}></i>
                    </div>
                    <p className='mt-2'>{comment.text}</p>
                    <small className="text-muted">Posted on {comment.date}</small>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DisplayComments;
