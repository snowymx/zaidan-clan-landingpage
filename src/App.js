import React, { Fragment, useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "./assets/images/logo.png";

// ----- components sections import -----
import AboutSection from "./components/about-section";
import FirstSection from "./components/first-section";
import RoadmapSection from "./components/roadmap-section";
import TokenomicsSection from "./components/tokenomics-section";

// ----- layout sections import -----
import Footer from "./layout/footer";
import ScrollToTop from "./layout/scrolltotop";

const App = () => {
  const mintSection = useRef(null);
  const aboutSection = useRef(null);
  const tokenomicsSection = useRef(null);
  const roadmapSection = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="text-uppercase text-warning" style={{ fontSize: '30px', fontWeight: 'bold' }}>
            <img src={Logo} alt="logo" className="logo-image" />{' '}
            Zaidan clan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="text-uppercase" style={{ fontSize: '24px' }}>
              <Nav.Link onClick={() => scrollDown(mintSection)}>Mint</Nav.Link>
              <Nav.Link onClick={() => scrollDown(aboutSection)}>About</Nav.Link>
              <Nav.Link onClick={() => scrollDown(tokenomicsSection)}>Tokenomics</Nav.Link>
              <Nav.Link onClick={() => scrollDown(roadmapSection)}>Roadmap</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div ref={mintSection} style={{ marginTop: '112px' }}>
        <FirstSection />
      </div>

      <div ref={aboutSection}>
        <AboutSection />
      </div>

      <div ref={tokenomicsSection}>
        <TokenomicsSection />
      </div>

      <div ref={roadmapSection}>
        <RoadmapSection />
      </div>

      <Footer />
      <ScrollToTop />
    </Fragment>
  );
};

export default App;