/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { transactions } from '../data';
import { FaCoins } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useBackend } from "../data/useBackend";
import { useLocalStorage } from "../data/useLocalStorage";

const TransactionPage = () => {
  let navigate = useNavigate();
  const [transactionList, setTransactionList] = useState(transactions);

  const { GetCoachOrderByUserID, GetUserOrderByUserID, PurchaseService, UpdateUserOrderStatus, UpdateCoachOrderStatus } = useBackend();
  const { getItem } = useLocalStorage("User");

  const handleStatusChange = (id, newStatus) => {
    const updatedTransactions = transactionList.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setTransactionList(updatedTransactions);
  };

  const [orders, setOrders] = useState([]);

  const handleOrders = async (x) => {
    x.data.forEach(data => {
      setOrders(prevData => [...prevData, data]);
    });
  }

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current == false) {
      const getOrders = async () => {
        GetCoachOrderByUserID(getItem().userID).then(x => { handleOrders(x); });
        GetUserOrderByUserID(getItem().userID).then(x => { handleOrders(x); });
      }
      getOrders();
      return () => {
        effectRan.current = true;
      }
    }
  }, [])

  return (
    <div className="transaction-page">
      <div className="transaction min-vh-100">
        <Container>
          <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">
            Transaction & History
          </h1>
          <Row className="animate__animated animate__fadeInUp animate__delay-1s">
            {orders.filter(x => x.orderStatus == "In Progress").map((order) => (
              <Col xs={12} key={order.orderID} className="mb-4">
                <Card className="h-100" onClick={() => navigate("/transaction")}>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <img
                        src={order.orderType == "Coaching" ? order.coaches.coachPicture : order.seller.userPicture}
                        alt={order.orderType == "Coaching" ? order.coaches.coachName : order.seller.userName}
                        className="rounded-circle"
                        width="80"
                        height="80"
                      />
                      <div className="detail ms-3 flex-grow-1">
                        <Card.Title>{order.orderType == "Coaching" ? order.coaches.coachName : order.seller.userName} - {order.orderType}</Card.Title>
                        <Card.Text>{order.orderPrice} <FaCoins /></Card.Text>
                        <Card.Text className='quantity-text'>Quantity:  {parseInt(order.orderPrice) / parseInt(order.orderType == "Coaching" ? order.coaches.coachPrice : order.seller.userPrice)}</Card.Text>
                      </div>
                      <div className="d-flex">
                        <Button
                          variant="danger"
                          size="sm"
                          className="me-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(order.id, 'Cancelled');
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
                    </div>
                    <div className="d-flex justify-content-end align-items-center mt-3">
                      <Badge
                        bg={'warning'}
                      >
                        {order.orderStatus}
                      </Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {orders.filter(x => x.orderStatus == "Finished" || x.orderStatus == "Cancelled").map((order) => (
              <Col xs={12} key={order.orderID} className="mb-4">
                <Card className="h-100" onClick={() => navigate("/transaction")}>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <img
                        src={order.orderType == "Coaching" ? order.coaches.coachPicture : order.seller.userPicture}
                        alt={order.orderType == "Coaching" ? order.coaches.coachName : order.seller.userName}
                        className="rounded-circle"
                        width="80"
                        height="80"
                      />
                      <div className="detail ms-3 flex-grow-1">
                        <Card.Title>{order.orderType == "Coaching" ? order.coaches.coachName : order.seller.userName} - {order.orderType}</Card.Title>
                        <Card.Text>{order.orderPrice} <FaCoins /></Card.Text>
                        <Card.Text className='quantity-text'>Quantity:  {parseInt(order.orderPrice) / parseInt(order.orderType == "Coaching" ? order.coaches.coachPrice : order.seller.userPrice)}</Card.Text>
                      </div>
                      <div className="d-flex">
                        <Button
                          variant="success"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/detail/" + (order.orderType == "Coaching" ? "coach" : "temanMabar") + "/" + order.sellerID)
                          }}
                        >
                          Re-Order
                        </Button>
                      </div>

                    </div>
                    <div className="d-flex justify-content-end align-items-center mt-3">
                      <Badge
                        bg={
                          order.orderStatus === 'Finished'
                            ? 'success' : 'danger'
                        }
                      >
                        {order.orderStatus}
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