import React from 'react';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Chair from '../../images/Mask Group 1.png';
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const AppointmentMain = ({ datePicker }) => {
    return (
        <Container style={{ height: '80vh' }} className="d-flex align-items-center">
            <Row>
                <Col md={{ span: 4, offset: 0 }}>
                    <h3 style={{ color: '#3a4256' }}><strong>Appointment</strong> </h3>
                    <div className="pt-5">
                        <DatePickerCalendar date={new Date()} onDateChange={datePicker} />
                    </div>
                </Col>
                <Col md={7} className="ml-auto">
                    <img className="img-fluid" src={Chair} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default AppointmentMain;