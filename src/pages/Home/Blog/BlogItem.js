import React from 'react';
import '../../../App.css'
import { Card, Col } from 'react-bootstrap';

const BlogItem = ({ data }) => {
    return (
        <Col md={4}>
            <Card className="p-4 blog-card">
                <Card.Body className="d-flex m-auto">
                    <img src={data.image} className="img-fluid" style={{ height: '55px' }} alt="" />
                    <div className="ml-3">
                        <h6 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '1px' }}>{data.author}</h6>
                        <p className="text-secondary">12 April 2021</p>
                    </div>
                </Card.Body>
                <div className="card-data">
                    <h5 className="my-3"><strong>{data.title}</strong></h5>
                    <p className="text-justify text-secondary">{data.blog}</p>
                </div>
            </Card>
        </Col>
    );
};

export default BlogItem;