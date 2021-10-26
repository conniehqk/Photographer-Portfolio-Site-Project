// import { useState } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
// import { send, init } from 'emailjs-com';

function Contact({ handleSubmit, handleChange }) {
	return (
		<Container className="p-5">
			<h1>Let's Chat!</h1>
			<Form onSubmit={handleSubmit}>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formFirstName">
						<Form.Label>First & Last Name</Form.Label>
						<Form.Control
							onChange={handleChange}
							name="name"
							type="text"
							placeholder="Enter First & Last Name"
						/>
					</Form.Group>
					{/* 
					<Form.Group as={Col} controlId="formLastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							onChange={handleChange}
							name="lastName"
							type="text"
							placeholder="Last Name"
						/>
					</Form.Group> */}
				</Row>

				<Form.Group className="mb-3" controlId="formGridEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						onChange={handleChange}
						name="email"
						type="email"
						placeholder="Enter email"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Type</Form.Label>

					<Form.Select
						onChange={handleChange}
						aria-label="Default select example"
						name="subject"
					>
						<option>Subject?</option>
						<option value="wedding">Wedding</option>
						<option value="family">Family</option>
						<option value="maternity">Maternity</option>
						<option value="portraits">Portraits</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className="mb-3" controlId="ControlTextarea1">
					<Form.Label>Message</Form.Label>
					<Form.Control
						onChange={handleChange}
						name="message"
						as="textarea"
						rows={3}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default Contact;
