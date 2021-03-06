import { Container, Row, Button, Alert } from 'react-bootstrap';
import { Form } from 'react-bootstrap/cjs';
import Messages from './Messages';

function Manage({
	handleImageSubmit,
	submittedMessage,
	handleManageFormChange,
	imageSubmitSuccess,
	handleDeleteMessage,
}) {
	return (
		<Container className="p-5">
			<h1>
				<ins>Manage My Content</ins>
			</h1>
			<Row className="mb-3">
				<h3>Add new work to portfolio:</h3>
				{imageSubmitSuccess ? (
					<Alert variant="success">Success!</Alert>
				) : null}
				<Form onSubmit={handleImageSubmit}>
					<Form.Group className="mb-3">
						<Form.Label>New Image</Form.Label>
						<Form.Control
							onChange={handleManageFormChange}
							type="text"
							name="image"
							placeholder="Enter Image URL"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Image Category</Form.Label>
						<Form.Select
							onChange={handleManageFormChange}
							name="subject"
						>
							<option>Subject</option>
							<option value="Wedding">Wedding</option>
							<option value="Family">Family</option>
							<option value="Maternity">Maternity</option>
							<option value="Portraits">Portraits</option>
						</Form.Select>
					</Form.Group>
					<Button variant="dark" type="submit">
						Submit
					</Button>
				</Form>
			</Row>
			<hr />
			<Row>
				<h3>Messages I have received:</h3>
				{submittedMessage.map((msg, index) => (
					<Messages
						handleDeleteMessage={handleDeleteMessage}
						key={index}
						message={msg}
					/>
				))}
			</Row>
		</Container>
	);
}

export default Manage;
