import React from 'react';
import Appointment from './Appoinment/Appointment';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Appointment />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;