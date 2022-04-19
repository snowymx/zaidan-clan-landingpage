import React, { Fragment, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "./assets/images/logo.png";

// ----- components sections import -----
import AboutSection from "./components/about-section";
import FirstSection from "./components/first-section";
import RoadmapSection from "./components/roadmap-section";
import TokenomicsSection from "./components/tokenomics-section";
import HoldingSection from "./components/holding-section";

// ----- layout sections import -----
import Footer from "./layout/footer";
import Icon from "./layout/icon";

const App = () => {
  const mintSection = useRef(null);
  const aboutSection = useRef(null);
  const tokenomicsSection = useRef(null);
  const roadmapSection = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: (ref.current.offsetTop - 100),
      behavior: 'smooth',
    });
  };

  return (
    <Fragment>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top" className="px-3">
        <Navbar.Brand href="/" className="text-uppercase text-warning">
          <img src={Logo} alt="logo" className="logo-image" />{' '}
          Zaidan clan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="text-uppercase">
            <Nav.Link onClick={() => scrollDown(mintSection)} href="#mintSection">Mint</Nav.Link>
            <Nav.Link onClick={() => scrollDown(aboutSection)} href="#aboutSection">About</Nav.Link>
            <Nav.Link onClick={() => scrollDown(tokenomicsSection)} href="#tokenomicsSection">Tokenomics</Nav.Link>
            <Nav.Link onClick={() => scrollDown(roadmapSection)} href="#roadmapSection">Roadmap</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link onClick={() => scrollDown(mintSection)} href="#kkk">More deets</Nav.Link>
            <Nav.Link onClick={() => scrollDown(aboutSection)} href="#ddd">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <div ref={mintSection} style={{ marginTop: '112px' }}>
        <FirstSection />
      </div>

      <div ref={aboutSection}>
        <AboutSection />
      </div>

      <div ref={tokenomicsSection}>
        <TokenomicsSection />
      </div>
      
      <HoldingSection />
      
      <div ref={roadmapSection}>
        <RoadmapSection />
      </div>

      <Footer />

      <Icon />
    </Fragment>
  );
};

export default App;