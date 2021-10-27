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
import { useEffect } from 'react';

function App() {
	const [image, setImage] = useState([]);
	const [imageList, setImageList] = useState([]);
	const [checked, setChecked] = useState({
		Wedding: false,
		Portraits:false,
		Maternity:false,
		Family:false,
	})
	
	const [submittedMessage, setSubmittedMessage] = useState([]);
	const [imageSubmitSuccess, setImageSubmitSuccess] = useState(false)
	const [messageSubmitSuccess, setMessageSubmitSuccess] = useState(false)
	const [formMessage, setFormMessage] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const userID = init('user_NACkm4Te0UR15Mzzi2NOS');
	function handleSubmit(e) {
		fetch('http://localhost:3000/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(formMessage),
		})
			.then((r) => r.json())
			.then((msg) => {
				setSubmittedMessage([...submittedMessage, msg]);
				setMessageSubmitSuccess(messageSubmitSuccess=>!messageSubmitSuccess)
			});

		e.preventDefault();

		const templateParams = {
			to_name: 'Photographer',
			from_name: `${formMessage.name} (${formMessage.email})`,
			message: formMessage.message,
		};
		send(
			'service_44cpah8',
			'template_2c9kkfq',
			templateParams,
			userID
		).then(
			(result) => {
				console.log(result.text);
				alert('Your message has been sent!');
			},
			(error) => {
				console.log(error.text);
				alert('Something went wrong, please try again.');
			}
		);

		e.target.reset();
	}
	function handleChange(e) {
		setFormMessage({ ...formMessage, [e.target.name]: e.target.value });
	}
	function handleManageFormChange(e) {
		// console.log(e.target.name, e.target.value);
		setImage({ ...image, [e.target.name]: e.target.value });
	}

	function handleImageSubmit(e) {
		e.preventDefault();
		fetch('http://localhost:3000/images', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(image),
		})
			.then((r) => r.json())
			.then((pic) => {
				setImageList([...imageList, pic]);
				setImageSubmitSuccess(imageSubmitSuccess=>!imageSubmitSuccess)
			});
		e.target.reset();
	}

	useEffect(() => {
		fetch('http://localhost:3000/messages/')
			.then((r) => r.json())
			.then((data) => {
				setSubmittedMessage(data);
				// console.log(data);
			});
		fetch(' http://localhost:3000/images')
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setImageList(data);
			});
	}, []);


    function handleClick(e){
		setChecked({
			...checked,
			[e.target.name]:e.target.checked
		})
	  }
	 
	 

	
    const displayphoto=Object.keys(checked).filter((x)=>checked[x]===true)

	const toRender=()=>{
		if(displayphoto.length===0){
			return imageList
		}
		return imageList.filter((photo)=>displayphoto.includes(photo.subject))
	}
    

	return (
		<div className="App">
			<Navbarr />
			<Switch>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/portfolio">
					<Portfolio imageList={toRender()} checked={checked} handleClick={handleClick} />
				</Route>
				<Route exact path="/contact">
					<Contact
						handleSubmit={handleSubmit}
						formMessage={formMessage}
						handleChange={handleChange}
						messageSubmitSuccess={messageSubmitSuccess}
					/>
				</Route>
				<Route exact path="/manage">
					<Manage
						submittedMessage={submittedMessage}
						handleManageFormChange={handleManageFormChange}
						handleImageSubmit={handleImageSubmit}
						imageSubmitSuccess={imageSubmitSuccess}
					/>
				</Route>
				<Route exact path="/">
					<Landing />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
