/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col, Card, Badge, Button, Modal } from 'react-bootstrap';
// import { transactions } from '../data';
import { FaCoins } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { useBackend } from "../data/useBackend";
import { useLocalStorage } from "../data/useLocalStorage";

const TransactionPage = () => {
  let navigate = useNavigate();
  // const [transactionList, setTransactionList] = useState(transactions);
  const [modalShow, setModalShow] = React.useState(false);

  const { GetCoachOrderByUserID, GetUserOrderByUserID, PurchaseService, UpdateUserOrderStatus, UpdateCoachOrderStatus } = useBackend();
  const { getItem, setItem } = useLocalStorage("User");
  const [user, setUser] = useState({});

  // const handleStatusChange = (id, newStatus) => {
  //   const updatedTransactions = transactionList.map((order) =>
  //     order.id === id ? { ...order, status: newStatus } : order
  //   );
  //   setTransactionList(updatedTransactions);
  // };

  const [orders, setOrders] = useState([]);

  const handleOrders = async (x) => {
    x.data.forEach(data => {
      setOrders(prevData => [...prevData, data]);
    });
  }

  const [sellerID, setSellerID] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [commentType, setCommentType] = useState("");
  const [orderID, setOrderID] = useState("");

  const handleDone = (sellerID, customerID, commentType, orderID) => {
    setSellerID(sellerID);
    setCustomerID(customerID);
    setCommentType(commentType);
    setOrderID(orderID);
    setModalShow(true);
  }

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current == false) {
      setUser(getItem());
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
                          onClick={async (e) => {
                            e.stopPropagation();
                            order.orderType == "Coaching" ? await UpdateCoachOrderStatus(order.orderID.trim(), "Cancelled") : await UpdateUserOrderStatus(order.orderID.trim(), "Cancelled");
                            await PurchaseService(getItem().userID, order.orderPrice);
                            user.userCurrency = parseInt(order.orderPrice) + parseInt(user.userCurrency);
                            setItem(user);
                            alert("Order cancelled");
                            window.location.reload();
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="success"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDone(order.sellerID, user.userID, order.orderType == "Coaching" ? "Coach" : "User", order.orderID)
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
                        {order.orderStatus == "Finished" && <Button
                          variant="success"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/detail/" + (order.orderType == "Coaching" ? "coach" : "temanMabar") + "/" + order.sellerID)
                          }}
                        >
                          Re-Order
                        </Button>}
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
      <DoneModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        customerid={customerID}
        sellerid={sellerID}
        commenttype={commentType}
        orderid={orderID}
      />
    </div>
  );
};

function DoneModal(props) {
  const [orderRating, setOrderRating] = useState(1);
  const [orderComment, setOrderComment] = useState();
  const { getItem } = useLocalStorage("User");
  const { InsertComment, UpdateUserOrderRating, UpdateCoachOrderRating, UpdateUserOrderStatus, UpdateCoachOrderStatus } = useBackend();

  const handleComment = (x) => {
    setOrderComment(x.target.value);
  }

  const incrementRating = () => {
    if (orderRating < 5) {
      setOrderRating(orderRating + 1);
    }
  };

  const decrementRating = () => {
    if (orderRating > 1) {
      setOrderRating(orderRating - 1);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    // style={{ backgroundColor: '#f8f9fa' }}
    >
      <Modal.Header closeButton style={{ borderBottom: '1px solid #dee2e6' }}>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: '#495057', fontWeight: 'bold' }}>
          Order Finished
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ color: '#28a745', marginBottom: '20px' }}>Top-Up Success</h4>
        <h6>Rating</h6>
        <div style={{ marginBottom: '15px' }}>
          <div className="quantity-control mt-3">
            <button
              className="btn btn-outline-success"
              onClick={decrementRating}
            >
              -
            </button>
            <span className="quantity mx-2">{orderRating}</span>
            <button
              className="btn btn-outline-success"
              onClick={incrementRating}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <input
            type="text"
            onChange={handleComment}
            placeholder='Any Comments?'
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ced4da',
              borderRadius: '4px'
            }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: '1px solid #dee2e6' }}>
        <Button
          variant="success"
          size="m"
          onClick={async () => {
            // console.log(props.sellerid, orderComment, props.customerid, orderRating, getItem().userPicture, props.commenttype, props.orderid);
            await InsertComment(props.sellerid, orderComment, props.customerid, orderRating, getItem().userPicture, props.commenttype);
            props.commenttype == "Coach" ? await UpdateCoachOrderRating(props.orderid, orderRating) : await UpdateUserOrderRating(props.orderid, orderRating);
            props.commenttype == "Coach" ? await UpdateCoachOrderStatus(props.orderid, "Finished") : await UpdateUserOrderStatus(props.orderid, "Finished");
            console.log("Finished");
            props.onHide();
          }}
          style={{
            backgroundColor: '#28a745',
            borderColor: '#28a745',
            padding: '10px 20px'
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TransactionPage;