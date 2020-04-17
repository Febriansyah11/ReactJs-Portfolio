import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Facebook, Instagram } from '@material-ui/icons';
import { withRouter } from "react-router-dom";
import '../assets/style/component.css'
import { Link } from "react-scroll";

class Header extends Component {
    render() {
        return (

            <Navbar collapseOnSelect bg="info" expand="lg" sticky="top" variant="dark" className="navbar-style shadow d-flex flex-row pl-xl-5 pr-xl-5">
                <Nav className="d-flex flex-row align-items-center flex-grow-0">
                    <a href="https://www.facebook.com/febriansyah.adiputra.3"><Facebook fontSize="large" className="navbar-icon-social" style={{ color: 'white', textDecoration: 'dark' }} /></a>
                    <a href="https://www.instagram.com/febriansz_/"><Instagram fontSize="large" className="navbar-icon-social" style={{ color: 'white', textDecoration: 'dark' }} /></a>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="btn mr-auto text-raleway-header-mail">
                        1102.adiputra@gmail.com
                </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="dashboard"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >DASHBOARD</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >PORTFOLIO</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >ABOUT</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>CONTACT
                            </Link>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Header)
