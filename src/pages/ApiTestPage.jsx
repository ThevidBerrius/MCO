/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap";
import { useBackend } from "../data/useBackend";
import { useEffect, useState } from "react";

const ApiTestPage = () => {
  const [userData, setUserData] = useState([]);
  const { GetAllUsers } = useBackend();

  useEffect(() => {
    GetAllUsers().then((x) => setUserData(x.data));
  }, []);

  return (
    <div className="api-test">
      <div>
        <button
          className="test-api"
          onClick={async () => {
            console.log(await GetAllUsers());
          }}
        >
          Test API Now
        </button>
      </div>
    </div>
  );
};

export default ApiTestPage;
