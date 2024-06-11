/* eslint-disable react-hooks/exhaustive-deps */
import { FaCoins } from "react-icons/fa";
import { useLocalStorage } from "../data/useLocalStorage";
import React, { useEffect, useState } from "react";
import { useBackend } from "../data/useBackend";
import { Button, Modal } from "react-bootstrap";


const TopUpPage = () => {

  const { getItem, setItem } = useLocalStorage("User");
  const { PurchaseService } = useBackend();
  const [user, setUser] = useState({});
  const [price, setPrice] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handleCurrencyChange = async (event) => {
    event.preventDefault();
    await PurchaseService(user.userID, parseInt(price));
    user.userCurrency = parseInt(price) + parseInt(user.userCurrency);
    setItem(user);
  }

  useEffect(() => {
    setUser(getItem);
  }, [])

  return (
    <>
      <div className="topup-page">
        <form className="topup-form animate__animated animate__fadeInUp animate__delay-1s" onSubmit={handleCurrencyChange}>
          <h1 className="fw-bold">Top Up Coins</h1>
          <p>Currency Owned: {user.userCurrency} <FaCoins /></p>
          <div className="topup-options">
            <div className="topup-option">
              <input type="radio" id="coins100" name="coins" value="100" onChange={handlePriceChange} />
              <label htmlFor="coins100">
                <div className="topup-amount">
                  <FaCoins /> 100 Coins
                </div>
                <div className="topup-price">$1.00</div>
              </label>
            </div>
            <div className="topup-option">
              <input type="radio" id="coins500" name="coins" value="500" onChange={handlePriceChange} />
              <label htmlFor="coins500">
                <div className="topup-amount">
                  <FaCoins /> 500 Coins
                </div>
                <div className="topup-price">$4.50</div>
              </label>
            </div>
            <div className="topup-option">
              <input type="radio" id="coins1000" name="coins" value="1000" onChange={handlePriceChange} />
              <label htmlFor="coins1000">
                <div className="topup-amount">
                  <FaCoins /> 1000 Coins
                </div>
                <div className="topup-price">$8.00</div>
              </label>
            </div>
            <div className="topup-option">
              <input type="radio" id="coins2000" name="coins" value="2000" onChange={handlePriceChange} />
              <label htmlFor="coins2000">
                <div className="topup-amount">
                  <FaCoins /> 2000 Coins
                </div>
                <div className="topup-price">$15.00</div>
              </label>
            </div>
            <div className="topup-option">
              <input type="radio" id="coins5000" name="coins" value="5000" onChange={handlePriceChange} />
              <label htmlFor="coins5000">
                <div className="topup-amount">
                  <FaCoins /> 5000 Coins
                </div>
                <div className="topup-price">$35.00</div>
              </label>
            </div>
            <div className="topup-option">
              <input type="radio" id="coins10000" name="coins" value="10000" onChange={handlePriceChange} />
              <label htmlFor="coins10000">
                <div className="topup-amount">
                  <FaCoins /> 10000 Coins
                </div>
                <div className="topup-price">$65.00</div>
              </label>
            </div>
          </div>
          <div className="topup-submit">
            <button className="btn btn-danger btn-lg rounded-1" type="submit"
              onClick={() => {
                if (price == 0) {
                  alert("Please choose the product before checkout");
                  return;
                }
                setModalShow(true);
              }}>
              <b>Top Up</b>
            </button>
          </div>
        </form>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          window.location.reload();
        }}
      />
    </>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Top-Up Success</h4>
        <p>
          Please immediately check your currency and contact our customer service if the currency did not change
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success"
          // eslint-disable-next-line react/prop-types
          size="m" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TopUpPage;
