import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterCol = ({ title, items, children }) => {
    return (
        <Col md={3}>
            <h5 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '2px' }}>{title ? title : " "}</h5><br />
            {
                items.map((item, index) => <li key={index} className="pb-3 text-secondary"
                    style={{ listStyle: 'none' }}>
                    <Link to={item.link} className="text-secondary"><strong>{item.name}</strong></Link>
                </li>)
            }
            {
                children && children
            }
        </Col>
    );
};

export default FooterCol;