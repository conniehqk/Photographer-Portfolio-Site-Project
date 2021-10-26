import { Container, Row, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap/cjs';
import Messages from './Messages';

function Manage({ submittedMessage }) {

	return (
		<Container className="p-5">
			<h1><ins>Manage My Content</ins></h1>
			<Row className="mb-3">
				<h3>Add new work to portfolio:</h3>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>New Image</Form.Label>
						<Form.Control type="text" placeholder="Enter Image URL" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Image Category</Form.Label>
						<Form.Select
							name="subject"
						>
							<option>Subject</option>
							<option value="wedding">Wedding</option>
							<option value="family">Family</option>
							<option value="maternity">Maternity</option>
							<option value="portraits">Portraits</option>
						</Form.Select>
					</Form.Group>
					<Button variant="dark" type="submit">
						Submit
					</Button>
				</Form>
			</Row>
			<hr/>
			<Row>
				<h3>Messages I have received:</h3>
				{submittedMessage.map((msg) => (
					<Messages message={msg} />
				))}
			</Row>
		</Container>
	);
}

export default Manage;
