import React from 'react';
import '../../../App.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
    const history = useHistory()
    return (
        <Navbar expand="lg" className="py-5">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="" id="basic-navbar-nav">
                <Nav className="ml-auto" style={{ fontSize: '20px', letterSpacing: '1px', fontWeight: '700' }}>
                    <Link to="/" className="mr-5 text-dark">Home</Link>
                    <Link to="/dashboard" className="mr-5 text-dark">Dashboard</Link>
                    <Link to="" className="mr-5 text-dark">Services</Link>
                    {
                        history.location.pathname === '/' ?
                            <><Link to="" className="mr-5 text-light">Reviews</Link>
                                <Link to="" className="mr-5 text-light">Blog</Link>
                                <Link to="" className="mr-5 text-light">Contact Us</Link>
                            </> :
                            <><Link to="" className="mr-5 text-dark">Reviews</Link>
                                <Link to="" className="mr-5 text-dark">Blog</Link>
                                <Link to="" className="mr-5 text-dark">Contact Us</Link>
                            </>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;