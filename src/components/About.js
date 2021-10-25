import { Accordion, Container, Col, Image, Row } from 'react-bootstrap';

function About() {
	return (
		<Container fluid>
			<h1>About Me</h1>
			<Row>
				<Col>
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>About Me</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Lorem ipsum dolor sit amet consectetur
								adipiscing. Morbi tristique senectus et netus et
								malesuada fames. Ut consequat semper viverra nam
								libero justo laoreet. Vestibulum lorem sed risus
								ultricies tristique nulla aliquet. Commodo odio
								aenean sed adipiscing diam donec adipiscing.
								Aliquet risus feugiat in ante. Ultrices vitae
								auctor eu augue ut lectus. Fusce ut placerat
								orci nulla pellentesque dignissim. Volutpat
								blandit aliquam etiam erat velit scelerisque in
								dictum. Condimentum vitae sapien pellentesque
								habitant morbi. Nunc faucibus a pellentesque sit
								amet. Amet volutpat consequat mauris nunc congue
								nisi vitae suscipit tellus. <br /> Sed odio
								morbi quis commodo odio aenean sed. Arcu
								bibendum at varius vel pharetra vel. Aliquam
								etiam erat velit scelerisque in dictum non.
								Tortor condimentum lacinia quis vel eros donec
								ac odio. Ullamcorper velit sed ullamcorper morbi
								tincidunt ornare massa eget. Platea dictumst
								vestibulum rhoncus est pellentesque elit. Sed
								viverra tellus in hac habitasse platea dictumst.
								Libero volutpat sed cras ornare arcu dui vivamus
								arcu. Convallis posuere morbi leo urna molestie
								at elementum eu facilisis. Tincidunt nunc
								pulvinar sapien et ligula ullamcorper. Nunc
								consequat interdum varius sit amet. Pulvinar
								elementum integer enim neque. Tristique nulla
								aliquet enim tortor at auctor urna. Sit amet
								purus gravida quis blandit turpis cursus in hac.
								Lacinia quis vel eros donec ac. Orci porta non
								pulvinar neque laoreet.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
				<Col>
					<img
						width="400"
						height="auto"
						src="https://www.verywellhealth.com/thmb/tEddNlzxxnifDuyWOKGb8cz617M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-139541971-1f2cdfcfae93447bacabe425dec3d65a.jpg"
						alt="a person"
					/>
					<ul>
						<h3>Education</h3>
						<li>Harvard Photography School</li>
						<li>Nasa Photography School</li>
						<li>Kindergarten</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
