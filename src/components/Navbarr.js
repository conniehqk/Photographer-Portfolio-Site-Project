import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbarr() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Fancy Photography</Navbar.Brand>
                <Nav className="justify-content-end">
                <Nav.Link><NavLink to="/about" exact>About</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/portfolio" exact>Portfolio</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/contact" exact>Contact</NavLink></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbarr