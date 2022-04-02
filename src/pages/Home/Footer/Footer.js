import React from 'react';
import '../../../App.css';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { SiInstagram, SiTwitter } from 'react-icons/si';
import { Container, Row } from 'react-bootstrap'
import FooterCol from './FooterCol';

const noNamed = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
]
const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },

]
const oralHealth = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" }
]
const services = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" }
]

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="mt-5 pt-5">
                    <FooterCol key={1} title={"."} items={noNamed} />
                    <FooterCol key={2} title="Services" items={services} />
                    <FooterCol key={3} title="Oral Health" items={oralHealth} />
                    <FooterCol key={4} title="Our Address" items={ourAddress}>
                        <ul className="list-inline">
                            <li className="list-inline-item m-2">
                                <a href="//facebook.com">
                                    <RiFacebookCircleLine style={{ fontSize: '40px', color: '#1cc7c1' }} />
                                </a>
                            </li>
                            <li className="list-inline-item m-2">
                                <a href="//twitter.com">
                                    <SiTwitter style={{ fontSize: '35px', color: '#1cc7c1' }} />
                                </a>
                            </li>
                            <li className="list-inline-item m-2">
                                <a href="//instagram.com">
                                    <SiInstagram style={{ fontSize: '35px', color: '#1cc7c1' }} />
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-secondary"><strong>Call now</strong></h6>
                            <button className="button text-light">+2025550295</button>
                        </div>
                    </FooterCol>
                </Row>
                <div className="copyRight text-center text-secondary mt-5">
                    <h6>
                        <strong>Copyright <AiOutlineCopyrightCircle /> {(new Date()).getFullYear()} All Rights Reserved</strong>
                    </h6>
                </div>
            </Container>
        </footer >
    );
};

export default Footer;