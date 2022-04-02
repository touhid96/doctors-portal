import React from 'react';
import '../../../App.css';
import Form from './Form';

const Contact = () => {
    return (
        <section className="mt-5 contact-us">
            <div className="text-center pt-5">
                <h5 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '2px' }}>CONTACT US</h5>
                <h2 style={{ color: '#fff', fontWeight: '700' }}>Always Connect With Us</h2>
            </div>
            <Form/>
        </section>
    );
};

export default Contact;