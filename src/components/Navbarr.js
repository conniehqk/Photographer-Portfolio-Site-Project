import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navbarr({ handleLogin, loggedIn }) {
	// const [loggedIn, setLoggedIn] = useState(false);
	// function handleLogin() {
	// 	setLoggedIn((loggedIn) => !loggedIn);
	// }
	function loggedInView() {
		return (
			<>
				<Nav.Link>
					<NavLink to="/manage" exact>
						Manage
					</NavLink>
				</Nav.Link>
				<Nav.Link onClick={handleLogin}>Logout</Nav.Link>
			</>
		);
	}
	return (
		<Navbar bg="dark" variant="dark" id="navbar">
			<Container>
				<Navbar.Brand>
					<NavLink to="/" exact>
						Fancy Photography
					</NavLink>
				</Navbar.Brand>
				<Nav className="justify-content-end">
					<Nav.Link>
						<NavLink to="/about" exact>
							About
						</NavLink>
					</Nav.Link>
					<Nav.Link>
						<NavLink to="/portfolio" exact>
							Portfolio
						</NavLink>
					</Nav.Link>
					<Nav.Link>
						<NavLink to="/contact" exact>
							Contact
						</NavLink>
					</Nav.Link>
					{loggedIn ? (
						loggedInView()
					) : (
						<Nav.Link onClick={handleLogin}>Login</Nav.Link>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Navbarr;
