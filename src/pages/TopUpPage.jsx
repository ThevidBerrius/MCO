import { FaCoins } from "react-icons/fa";

const TopUpPage = () => {
  return (
    <>
      <div className="topup-page">
        <form className="topup-form">
          <h1 className="fw-bold">Top Up Coins</h1>
          <p>Currency Own: 200 <FaCoins />`</p>
          <div className="topup-options">
            <div className="topup-option">
              <input type="radio" id="coins100" name="coins" value="100" />
              <label htmlFor="coins100">
                <div className="topup-amount">
                  <FaCoins /> 100 Coins
                </div>
                <div className="topup-price">$1.00</div>
              </label>
            </div>
            <div className="topup-option">
              <input type="radio" id="coins500" name="coins" value="500" />
              <label htmlFor="coins500">
                <div className="topup-amount">
                  <FaCoins /> 500 Coins
                </div>
                <div className="topup-price">$4.50</div>
              </label>
            </div>
            <div className="topup-option">
              <input type="radio" id="coins1000" name="coins" value="1000" />
              <label htmlFor="coins1000">
                <div className="topup-amount">
                  <FaCoins /> 1000 Coins
                </div>
                <div className="topup-price">$8.00</div>
              </label>
            </div>
            <div className="topup-option">
              <input type="radio" id="coins2000" name="coins" value="2000" />
              <label htmlFor="coins2000">
                <div className="topup-amount">
                  <FaCoins /> 2000 Coins
                </div>
                <div className="topup-price">$15.00</div>
              </label>
            </div>
            <div className="topup-option">
              <input type="radio" id="coins5000" name="coins" value="5000" />
              <label htmlFor="coins5000">
                <div className="topup-amount">
                  <FaCoins /> 5000 Coins
                </div>
                <div className="topup-price">$35.00</div>
              </label>
            </div>
            <div className="topup-option">
              <input type="radio" id="coins10000" name="coins" value="10000" />
              <label htmlFor="coins10000">
                <div className="topup-amount">
                  <FaCoins /> 10000 Coins
                </div>
                <div className="topup-price">$65.00</div>
              </label>
            </div>
          </div>
          <div className="topup-submit">
            <button type="submit" className="btn btn-danger btn-lg rounded-1">
              <b>Top Up</b>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TopUpPage;
