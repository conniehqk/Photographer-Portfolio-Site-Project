// import { useState } from 'react';
import { Container, Row, Form, Col, Button, Alert } from 'react-bootstrap';
// import { send, init } from 'emailjs-com';

function Contact({ handleSubmit, handleChange, messageSubmitSuccess }) {
	return (
		<Container className="p-5">
			<Row>
				<Col sm={6} className="d-flex justify-content-end p-3">
					<iframe width="400" height="250" title="map" id="gmap_canvas" src="https://maps.google.com/maps?q=12%20Clinton%20St,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
				</Col>
				<Col sm={6} className="align-items-center p-4">
					<h1>Contact Us</h1>
					<p className='pt-5'>Fancy Photography is located at <strong>12 Clinton St, Brooklyn, NY 11201</strong></p>
					<p>You can reach us by phone <strong>917-123-4567</strong></p>
				</Col>
			</Row>
			<hr />
			<Row className="px-5">
				<h1>Send a message</h1>
				{messageSubmitSuccess?<Alert variant="success">Success!</Alert>:null}
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
			</Row>
		</Container>
	);
}

export default Contact;
