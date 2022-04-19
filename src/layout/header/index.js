import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#mint" className="text-uppercase text-warning">
                    <img src={Logo} alt="logo" className="logo-image" />{' '}
                    Zaidan clan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="text-uppercase mr-2">
                        <Nav.Link href="#mint">Mint</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
                        <Nav.Link href="#roadmap">Roadmap</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;