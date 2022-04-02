import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleDr = ({ data }) => {
    return (
        <Col md={3}>
            <Card style={{ border: 'none' }} className="text-center">
                <Card.Img variant="top" src={data.image} />
                <h6><strong>{data.name}</strong></h6>
                <small className="text-secondary">{data.graduation}</small>
            </Card>
        </Col>
    );
};

export default SingleDr;