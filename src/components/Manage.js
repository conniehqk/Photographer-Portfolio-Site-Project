import { Container, Row } from 'react-bootstrap';
function Manage({ message }) {
	const listItem = message.map((m) => {
		console.log(m);
		return <li>{m.formMessage}</li>;
	});
	return (
		<Container className="p-5">
			<h1>Manage Page</h1>
			<Row>
				<h3>Add new word to portfolio:</h3>
			</Row>
			<Row>
				<h3>Messages:</h3>
				<ul>{listItem}</ul>
			</Row>
		</Container>
	);
}

export default Manage;
