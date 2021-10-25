import { useState } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { send, init } from 'emailjs-com'

function Contact() {
	const [formMessage, setFormMessage] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	})
	const userID = init("user_NACkm4Te0UR15Mzzi2NOS")
	function handleSubmit(e) {
		e.preventDefault()
		const templateParams = {
			to_name: "Connie",
			from_name: `${formMessage.firstName} ${formMessage.lastName} (${formMessage.email})`,
			message: formMessage.message
		}
		send("service_44cpah8", "template_2c9kkfq",templateParams,userID).then((result)=>{
			console.log(result.text)
			alert("Your message has been sent!")
		}, (error)=>{
			console.log(error.text)
			alert("Something went wrong, please try again.")
		})
		e.target.reset()
	}
	function handleChange(e) {
		setFormMessage(
			{...formMessage,
			[e.target.name]:e.target.value}
		)
	}
	return (
		<Container className="p-5">
			<h1>Let's Chat!</h1>
			<Form onSubmit={handleSubmit}>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formFirstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control onChange={handleChange} name="firstName" type="text" placeholder="First Name" />
					</Form.Group>

					<Form.Group as={Col} controlId="formLastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control onChange={handleChange} name="lastName" type="text" placeholder="Last Name" />
					</Form.Group>
				</Row>

				<Form.Group className="mb-3"controlId="formGridEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="ControlTextarea1">
					<Form.Label>Message</Form.Label>
					<Form.Control onChange={handleChange} name="message" as="textarea" rows={3} />
				</Form.Group>
				
				<Button variant="primary" type="submit">
					Submit
				</Button>
				</Form>
		</Container>
	);
}

export default Contact;
