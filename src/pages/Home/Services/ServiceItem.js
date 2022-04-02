import React from 'react';
import '../../../App.css'
import { Col, Container, Row } from 'react-bootstrap';
import Fluoride from '../../../images/001-dental.png';
import Cavity from '../../../images/tooth (1).png';
import Whitening from '../../../images/tooth.png';

const ServiceItem = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={4} className="text-center">
                    <img src={Fluoride} className="img-fluid" alt="" />
                    <h4>Fluoride Treatment</h4> <br />
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla quia impedit quo incidunt! Blanditiis.</p>
                </Col>
                <Col md={4} className="text-center">
                    <img src={Cavity} className="img-fluid" alt="" />
                    <h4>Cavity Filling</h4><br />
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla quia impedit quo incidunt! Blanditiis.</p>
                </Col>
                <Col md={4} className="text-center">
                    <img src={Whitening} className="img-fluid" alt="" />
                    <h4>Teath Whitening</h4><br />
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla quia impedit quo incidunt! Blanditiis.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceItem;