import React from 'react';
import './WorkTools.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { Container, Row, Col } from 'react-bootstrap';

const WorkTools = () => {
  return (
    <div className="separator-container">
      <div className="separator-content">
        {/* <h1>Que tecnologias utilizo!</h1> */}
        <Container >
          <Row className="justify-content-center" data-aos="flip-up">
            
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <FaHtml5 className="icon" />
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <FaCss3Alt className="icon" />
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <FaJs className="icon" />
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <FaReact className="icon" />
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <FaBootstrap className="icon" />
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <FaNodeJs className="icon" />
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <SiMongodb className="icon" />
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <SiMysql className="icon" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WorkTools;
