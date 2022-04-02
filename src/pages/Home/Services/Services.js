import React from 'react';
import Exceptional from './Exceptional';
import ServiceItem from './ServiceItem';

const Services = () => {
    return (
        <section className="services" style={{ marginTop: '150px' }}>
            <div className="text-center">
                <h5 style={{color:'#1cc7c1',fontWeight:'700',letterSpacing:'2px'}}>OUR SERVICES</h5>
                <h1 style={{color:'#3a4256',fontWeight:'800'}}>Services We Provide</h1>
            </div>
            <ServiceItem/>
            <Exceptional/>
        </section>
    );
};

export default Services;