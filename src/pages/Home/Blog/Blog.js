import React from 'react';
import { Row, Container } from 'react-bootstrap'
import Rashed from '../../../images/Ellipse 1.png';
import Caudy from '../../../images/Ellipse 2.png';
import Jhon from '../../../images/Ellipse 1.png';
import BlogItem from './BlogItem';

const fakeData = [
    {
        image: Rashed,
        author: 'Dr. Rashed Kabir',
        title: 'Check at least a doctor in a year for your teeth',
        blog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officiis temporibus ipsa! Beatae alias veniam minima omnis sunt officia at.'
    },
    {
        image: Caudy,
        author: 'Dr. Caudy',
        title: '2 times of brush in a day can keep you healthy',
        blog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officiis temporibus ipsa! Beatae alias veniam minima omnis sunt officia at.'
    },
    {
        image: Jhon,
        author: 'Dr. Jhon Michel',
        title: 'Check at least a doctor in a year for your teeth',
        blog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officiis temporibus ipsa! Beatae alias veniam minima omnis sunt officia at.'
    },
]

const Blog = () => {
    return (
        <section className="mt-5 pt-5">
            <div className="text-center">
                <h5 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '2px' }}>OUR BLOG</h5>
                <h1 style={{ color: '#3a4256', fontWeight: '700' }}>From Our Blog News</h1>
            </div>
            <Container className="mt-5">
                <Row>
                    {
                        fakeData.map(item => <BlogItem data={item} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Blog;