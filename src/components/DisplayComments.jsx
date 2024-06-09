/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import { useBackend } from '../data/useBackend';
import { useEffect, useState } from 'react';

const DisplayComments = ({ id }) => {

  const { GetCommentsByID } = useBackend();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    GetCommentsByID(id).then((x) => { setComments(x.data) });
  }, [])


  return (
    <div className="comment-section">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-center">Comments</h2>
          </Col>
        </Row>
        {(comments.length != 0) ?
          (<><Row>
            <Col>
              <ListGroup>
                {comments.map((comment) => (
                  <ListGroup.Item key={comment.commentID} className="d-flex align-items-start mb-3">
                    <Image
                      src={comment.commentPicture}
                      alt={comment.commentSender}
                      roundedCircle
                      width="50"
                      height="50"
                      className="me-3"
                    />
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <div>
                          <strong>{comment.commentSender}</strong>
                          <div className="star d-flex align-items-center">
                            {[...Array(parseInt(comment.commentRating)
                            )].map((e, i) => {
                              return <i className="fa-solid fa-star" key={i}></i>
                            })}
                          </div>
                        </div>
                        <small className="text-muted">Posted on {comment.commentTime}</small>
                      </div>
                      <p className="mt-2">{comment.commentContent}</p>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row></>) :
          <Row>
            <p className='text-muted'>No Comments Yet....</p>
          </Row>
        }
      </Container>
    </div>
  );
};

export default DisplayComments;
