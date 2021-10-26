import { Container, Row } from 'react-bootstrap';
import Messages from './Messages';

function Manage({ submittedMessage }) {
	console.log(submittedMessage);
	// const listItem =

	return (
		<Container className="p-5">
			<h1>Manage Page</h1>
			<Row>
				<h3>Add new word to portfolio:</h3>
			</Row>
			<Row>
				<h3>Messages:</h3>
				{submittedMessage.map((msg) => (
					<Messages message={msg} />
				))}
			</Row>
		</Container>
	);
}

export default Manage;
