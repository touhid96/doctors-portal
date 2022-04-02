import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleDr from './SingleDr';
import doctor from '../../../images/doctor.png'


const fakeData = [
    {
        name: 'Dr. Caurdi',
        phone: '+880 1711223344',
        image: doctor,
        graduation: 'BDS, FCPS, FWFO (USA)'
    },
    {
        name: 'Dr. Caurdi',
        phone: '+880 1711223344',
        image: doctor,
        graduation: 'BDS, FCPS, FWFO (USA)'
    },
    {
        name: 'Dr. Caurdi',
        phone: '+880 1711223344',
        image: doctor,
        graduation: 'BDS, FCPS, FWFO (USA)'
    },
    {
        name: 'Dr. Caurdi',
        phone: '+880 1711223344',
        image: doctor,
        graduation: 'BDS, FCPS, FWFO (USA)'
    },
]

const Doctors = () => {
    return (
        <Container className=" py-5">
            <div className="text-center">
                <h5 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '2px' }}>OUR DOCTORS</h5>
            </div>
            <Row className="mt-5">
                {
                    fakeData.map(dr => <SingleDr data={dr} />)
                }
            </Row>
        </Container>
    );
};

export default Doctors;