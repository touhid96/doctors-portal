import React from 'react';
import MainHeader from './MainHeader';
import '../../../App.css';
import InfoCard from './InfoCard';
import NavBar from './NavBar';


const Header = () => {
    return (
        <div className="header">
            <NavBar />
            <MainHeader />
            <InfoCard />
        </div>

    );
};

export default Header;