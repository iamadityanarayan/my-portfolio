// import React from 'react'
import { Button, Col, Row } from "react-bootstrap";
// type Props = {}

const Home = () => {
  return (
    <div className="space-y">
      <Row className="justify-content-center">
        <Col xs={12} sm={8}>
          <div className="home-page-right">
            <div className="home-page-dev text-light-secondary fs-4 mb-3">
              Full Stack Developer
            </div>
            <div className="home-page-name fw-500 mb-4">
              Adityanarayan Tiwari
            </div>
            <div className="home-page-description">
              Are you in need of a website? I manage the entire design process,
              from concept development to final implementation. I guarantee the
              technical functionality of the site to ensure it operates
              seamlessly. If our portfolio catches your eye, don't hesitate to
              reach out to me!
            </div>
            <div className="button-group gap-3 d-flex my-5">
              <Button className="_btn" variant="outline-primary">
                Portfolio
              </Button>
              <Button className="_btn border-light">Contact</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
