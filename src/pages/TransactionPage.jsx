import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { transactions } from '../data';
import { FaCoins } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TransactionPage = () => {
  let navigate = useNavigate();

  return (
    <div className="transaction-page">
      <div className="transaction min-vh-100">
        <Container>
          <h1 className="fw-bold text-center mb-2 fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">Transaction & History</h1>
          <Row className='animate__animated animate__fadeInUp animate__delay-1s'>
            {transactions.map((order) => (
              <Col xs={12} key={order.id} className="mb-4">
                <Card className="h-100" onClick={() => navigate("/transaction")}>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <img
                        src={order.coachImage}
                        alt={order.coachName}
                        className="rounded-circle"
                        width="80"
                        height="80"
                      />
                      <div className="ms-3">
                        <Card.Title>{order.coachName} - {order.role}</Card.Title>
                        <Card.Text>{order.coachPrice} <FaCoins/></Card.Text>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <Badge
                        bg={
                          order.status === 'Done'
                            ? 'success'
                            : order.status === 'On Progress'
                            ? 'warning'
                            : 'danger'
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default TransactionPage;
