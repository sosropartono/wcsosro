import {useState, useEffect} from "react";
import {Navbar, Container} from "react-bootstrap"


export const NavBar = () =>
{

    // This adds state to links, also adding scroll state to website function, 
    // Background changes according to how much is scrolled 
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        // removes when gets removed from the dom.
        return () => window.removeEventListener("scroll", onScroll)
    },[])

    return (
        //ternary function for class, checks to see if the page has been scrolled, then sets 
        //Navbar to the correct state
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home"><img src={''} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Link</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Link</Nav.Link>
              </Nav>
              <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={''} alt="" /></a>
                <a href="#"><img src={''} alt="" /></a>
                <a href="#"><img src={''} alt="" /></a>

              </div>
              <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
              </span>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}