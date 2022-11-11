import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import icon1 from '../assets/img/icon1.png';
import icon2 from '../assets/img/icon2.png';
import icon3 from '../assets/img/icon3.png';
export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);   
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo' src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills"  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://github.com/Eduvinte'><img src={icon1} alt="icon1" className='icons' /></a>
                        <a href='https://www.linkedin.com/in/eduardo-godinho'><img src={icon2} alt="icon2" className='icons' /></a>
                        <a href='https://wa.me/+56973475043'><img src={icon3} alt="icon3" className='icons' /></a>
                    </div>
                </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}