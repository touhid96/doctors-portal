import React from 'react';
import '../../../App.css'
import { Card, Col } from 'react-bootstrap';

const TestimonialItem = ({ data }) => {
    return (
        <Col md={4}>
            <Card>
                <Card.Text className="p-4 text-justify">{data.details}</Card.Text>
                <Card.Body className="d-flex m-auto">
                    <img src={data.image} className="img-fluid" style={{ height: '55px' }} alt="" />
                    <div className="ml-3">
                        <h6 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '1px' }}>{data.name}</h6>
                        <small className="text-secondary">{data.university}</small>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TestimonialItem;