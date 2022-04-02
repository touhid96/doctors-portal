import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chair from '../../../images/Mask Group 1.png'
import '../../../App.css'
import { useHistory } from 'react-router-dom';

const MainHeader = () => {
    const history = useHistory()
    return (
        <Container style={{ height: '80vh' }} className="d-flex align-items-center">
            <Row className="">
                <Col md={{ span: 4, offset: 0 }}>
                    <h1 style={{ color: '#3a4256' }}>Your New Smile <br /> Starts Here</h1>
                    <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam illo eum vel facilis saepe neque odit eos id dolorem ipsam.</p>
                    <button className="button text-light" onClick={() => history.push('/appointment')}>
                        <span>GET APPOINMENT </span>
                    </button>
                </Col>
                <Col md={7} className="ml-auto">
                    <img className="img-fluid" src={Chair} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default MainHeader;