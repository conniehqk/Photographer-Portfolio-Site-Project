import { Navbar, Nav, Container } from "react-bootstrap";

function Navbarr() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Fancy Photography</Navbar.Brand>
                <Nav className="justify-content-end">
                <Nav.Link to="/about" exact>About</Nav.Link>
                <Nav.Link to="/portfolio" exact>Portfolio</Nav.Link>
                <Nav.Link to="/contact" exact>Contact</Nav.Link>
                <Nav.Link>Add</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbarr