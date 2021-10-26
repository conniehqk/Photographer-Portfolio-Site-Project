import { useEffect, useState } from 'react';
import PhotoCard from './PhotoCard';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

function Portfolio() {
	const [imageList, setImageList] = useState([]);

	useEffect(() => {
		fetch(' http://localhost:3000/images')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setImageList(data);
			});
	}, []);

	const photoToRender = imageList.map((photo) => {
		return <PhotoCard photo={photo} />;
	});

	const ratingChanged = (newRating) => {
		console.log(newRating);
	};

	return (
		<Container>
			<div className="checkbox">
				<form>
					<label>Wedding</label>
					<input type="checkbox" name="weddings"></input>
					<label>Portraits</label>
					<input type="checkbox" name="portraits"></input>
					<label>Martenity</label>
					<input type="checkbox" name="maternity"></input>
					<label>Family</label>
					<input type="checkbox" name="family"></input>
				</form>
			</div>
			<div className="cards">{photoToRender}</div>
			<div>
				<ReactStars
					count={5}
					onChange={ratingChanged}
					size={24}
					activeColor="#ffd700"
				/>

				<>
					<FloatingLabel
						controlId="floatingTextarea2"
						label="Comments"
					>
						<Form.Control
							as="textarea"
							placeholder="Leave a comment here"
							style={{ height: '100px', width: '600px' }}
						/>
					</FloatingLabel>
				</>
			</div>
		</Container>
	);
}

export default Portfolio;
