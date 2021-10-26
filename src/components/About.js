import { Container, Col, Row } from 'react-bootstrap';

function About() {
	return (
		<Container fluid>
			<h1>About Me</h1>
			<Row>
				<Col>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Lorem ipsum dolor sit amet consectetur
						adipiscing. Morbi tristique senectus et netus et
						malesuada fames. Ut consequat semper viverra nam libero
						justo laoreet. Vestibulum lorem sed risus ultricies
						tristique nulla aliquet. Commodo odio aenean sed
						adipiscing diam donec adipiscing. Aliquet risus feugiat
						in ante. Ultrices vitae auctor eu augue ut lectus. Fusce
						ut placerat orci nulla pellentesque dignissim. Volutpat
						blandit aliquam etiam erat velit scelerisque in dictum.
						Condimentum vitae sapien pellentesque habitant morbi.
						Nunc faucibus a pellentesque sit amet. Amet volutpat
						consequat mauris nunc congue nisi vitae suscipit tellus.{' '}
					</p>
					<ul>
						<h3>Education</h3>
						<li>Harvard Photography School</li>
						<li>Nasa Photography School</li>
						<li>Kindergarten</li>
					</ul>
				</Col>
				<Col>
					<img
						width="400"
						height="auto"
						src="https://www.verywellhealth.com/thmb/tEddNlzxxnifDuyWOKGb8cz617M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-139541971-1f2cdfcfae93447bacabe425dec3d65a.jpg"
						alt="a person"
					/>
					<ul>
						<li>
							<a href="twitter.com">Twitter</a>
						</li>

						<li>
							<a href="instagram.com">Instagram</a>
						</li>
						<li>
							<a href="google.com">google</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
