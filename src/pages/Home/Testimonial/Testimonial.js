import React from 'react';
import { Container, Row } from 'react-bootstrap';
import winson from '../../../images/Ellipse 1.png';
import Macky from '../../../images/Ellipse 2.png';
import Andey from '../../../images/Ellipse 3.png';
import TestimonialItem from './TestimonialItem';

const fakeData = [
    {
        name: 'Winson Harry',
        image: winson,
        university: 'California',
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nostrum atque asperiores esse placeat temporibus quisquam cupiditate consequuntur voluptatibus voluptas et rem debitis autem, perspiciatis veritatis, aut ullam quasi praesentium!'

    },
    {
        name: 'Macky Lyith',
        image: Macky,
        university: 'California',
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nostrum atque asperiores esse placeat temporibus quisquam cupiditate consequuntur voluptatibus voluptas et rem debitis autem, perspiciatis veritatis, aut ullam quasi praesentium!'

    },
    {
        name: 'Andey Mare',
        image: Andey,
        university: 'California',
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nostrum atque asperiores esse placeat temporibus quisquam cupiditate consequuntur voluptatibus voluptas et rem debitis autem, perspiciatis veritatis, aut ullam quasi praesentium!'

    }
]

const Testimonial = () => {
    return (
        <Container className="mt-5 pt-5 testimonial">
            <h5 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '2px' }}>TESTIMONIAL</h5>
            <h1 style={{ color: '#3a4256' }}>What's Our Patients <br/> Says</h1>
            <Row className="mt-5 pt-4">
                {
                    fakeData.map(item => <TestimonialItem data={item} />)
                }
            </Row>
        </Container>
    );
};

export default Testimonial;