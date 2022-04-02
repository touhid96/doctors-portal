import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ModalForm from './ModalForm';

const AppointmentItem = ({ cardData, date }) => {

    return (
        <Col md={4} >
            <Card style={{ border: 'none', boxShadow: '0px 0px 9px 1px rgba(0, 0, 0, 0.2)' }} className="text-center p-5 m-3">
                <h5 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '1px' }}>
                    <strong>{cardData.subject}</strong>
                </h5>
                <h6><strong>{cardData.visitingHour}</strong></h6>
                <small className="text-secondary">{cardData.space} Space Available</small><br />
                <ModalForm title={cardData.subject} date={date}/>
            </Card>
        </Col>
    );
};

export default AppointmentItem;