import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { transactions } from '../data';
import { FaCoins } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TransactionPage = () => {
  let navigate = useNavigate();
  const [transactionList, setTransactionList] = useState(transactions);

  const handleStatusChange = (id, newStatus) => {
    const updatedTransactions = transactionList.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setTransactionList(updatedTransactions);
  };

  return (
    <div className="transaction-page">
      <div className="transaction min-vh-100">
        <Container>
          <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">
            Transaction & History
          </h1>
          <Row className="animate__animated animate__fadeInUp animate__delay-1s">
            {transactionList.map((order) => (
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
                      <div className="detail ms-3 flex-grow-1">
                        <Card.Title>{order.coachName} - {order.role}</Card.Title>
                        <Card.Text>{order.coachPrice} <FaCoins /></Card.Text>
                        <Card.Text className='quantity-text'>Quantity:  {order.Quantity}</Card.Text>
                      </div>
                      {order.status === 'On Progress' && (
                        <div className="d-flex">
                          <Button
                            variant="danger"
                            size="sm"
                            className="me-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusChange(order.id, 'Canceled');
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="success"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusChange(order.id, 'Done');
                            }}
                          >
                            Done
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-end align-items-center mt-3">
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
  );
};

export default TransactionPage;