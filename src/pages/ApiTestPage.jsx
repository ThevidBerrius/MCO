/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap";
import { useBackend } from "../data/useBackend";
import { useEffect, useState } from "react";

const ApiTestPage = () => {
    const [userData, setUserData] = useState([]);
    const { GetAllCoaches } = useBackend();

    useEffect(() => {
         GetAllCoaches().then(x => setUserData(x.data))
    }, []);

    return (
      <div className="api-test">
        <div>
          <Container>
            <Row>
                {userData.map((coachs) => {
                    return(
                    <Col key={coachs.coachID} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000">
                        <img src={coachs.coachPicture} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                    </Col>
                    );
                })}
            </Row>
          </Container>
        </div>
      </div>
    );
}

export default ApiTestPage;