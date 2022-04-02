import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import image from '../../../images/Mask Group 3.png'

const Exceptional = () => {
    return (
        <Container style={{ height: '550px'}}>
            <Row className="d-flex align-items-center mt-5">
                <Col md={5}>
                    <img src={image} style={{ width: '100%',height:'100%' }} alt="" />
                </Col>
                <Col md={6}>
                    <h1 style={{ color: '#3a4256' }}>Exceptional Dental Care,<br /> On Your Terms</h1>
                    <p className="text-secondary my-5" style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem odio consequatur praesentium natus delectus aut rem ipsa, adipisci numquam ab, et, aliquid maxime eligendi. Necessitatibus, vero temporibus, nulla, aspernatur nostrum maxime odit quis suscipit quasi omnis reiciendis tempore ratione rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab explicabo commodi facere repellendus incidunt quaerat, itaque ducimus autem numquam? </p>
                    <button className="button text-light"><span>LEARN MORE</span></button>
                </Col>
            </Row>
        </Container>
    );
};

export default Exceptional;