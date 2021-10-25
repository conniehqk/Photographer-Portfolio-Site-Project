import Navbarr from './Navbarr';
import Landing from './Landing';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Manage from './Manage';
import './App.css';
import { send, init } from 'emailjs-com';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';

function App() {
	const [submittedMessage, setSubmittedMessage] = useState('');
	const [formMessage, setFormMessage] = useState({
		name: '',
		email: '',
		message: '',
	});

	useEffect(() => {
		fetch('http://localhost:3000/messages/')
			.then((r) => r.json())
			.then((data) => {
				setSubmittedMessage(data);
				console.log(data);
			});
	}, []);

	const userID = init('user_NACkm4Te0UR15Mzzi2NOS');
	function handleSubmit(e) {
		fetch('http://localhost:3000/messages/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formMessage.message),
		})
			.then((r) => r.json())
			.then((message) => {
				// setSubmittedMessage(...submittedMessage, message);

				console.log(message);
			});

		e.preventDefault();

		const templateParams = {
			to_name: 'Connie',
			from_name: `${formMessage.name} (${formMessage.email})`,
			message: formMessage.message,
		};
		// send(
		// 	'service_44cpah8',
		// 	'template_2c9kkfq',
		// 	templateParams,
		// 	userID
		// ).then(
		// 	(result) => {
		// 		console.log(result.text);
		// 		alert('Your message has been sent!');
		// 	},
		// 	(error) => {
		// 		console.log(error.text);
		// 		alert('Something went wrong, please try again.');
		// 	}
		// );

		e.target.reset();
	}
	function handleChange(e) {
		setFormMessage({ ...formMessage, [e.target.name]: e.target.value });
	}

	return (
		<div className="App">
			<Navbarr />
			<Switch>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/portfolio">
					<Portfolio />
				</Route>
				<Route exact path="/contact">
					<Contact
						handleSubmit={handleSubmit}
						formMessage={formMessage}
						handleChange={handleChange}
					/>
				</Route>
				<Route exact path="/manage">
					<Manage message={submittedMessage} />
				</Route>
				<Route exact path="/">
					<Landing />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
