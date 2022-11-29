import {useEffect, useState} from "react"
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.png'
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    //State that keeps track of when the user scrolls, re renders the component whenever scrolled
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {if(window.scrollY > 50){
            setScrolled(true);

        } else {
            setScrolled(false);
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }}
    , [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }


    // NavBar component. For the Nav.Link section, if clicked, the componenet will re render to that component
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/> 
          <span className="navbar-toggler-icon"></span> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#Skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Link</Nav.Link>
              <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Link</Nav.Link>
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

    )
}

export default NavBar