import React from 'react';
import '../../../App.css'
import { AiFillClockCircle } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { Container } from 'react-bootstrap';

const InfoCard = () => {
    return (
        <Container>
            <section className="row infoCard">
                <div className="col-md-4">
                    <div className="d-flex justify-content-center align-items-center text-light"
                        style={{ backgroundColor: '#1cc7c1', padding: '25px' }}>
                        <div>
                            <AiFillClockCircle style={{ fontSize: '50px', marginRight: '15px' }} />
                        </div>
                        <div>
                            <h5>Opening Hours</h5>
                            <small>24 hours and 7 days in week.</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-center align-items-center bg-dark text-light" style={{ padding: '25px' }}>
                        <div>
                            <FaMapMarkerAlt style={{ fontSize: '50px', marginRight: '15px' }} />
                        </div>
                        <div>
                            <h5>Visit Our Location</h5>
                            <small>Mirpur,Dhaka,bangladesh</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-center align-items-center text-light"
                        style={{ backgroundColor: '#1cc7c1', padding: '25px' }}>
                        <div>
                            <FiPhoneCall style={{ fontSize: '50px', marginRight: '15px' }} />
                        </div>
                        <div>
                            <h5>Contact Us Now</h5>
                            <small>+88-0177777777</small>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default InfoCard;