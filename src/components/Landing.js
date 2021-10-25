import { Container, Row, Col, Card } from "react-bootstrap";

function Landing() {
    return (
      <div id="landing">
        <Container className="p-5">
          <Row className="justify-content-center">
            <Card id="landingCard">
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1586796676778-2c50b6bc3937?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" />
              <Card.Body>
                <Card.Title id="landingname">John Anderson</Card.Title>
              </Card.Body>
            </Card>
          </Row>
          <Row className="justify-content-center px-5">
            <Col md="auto" className="px-5">
              <p id="intro">Hello, my name is John Anderson, thank you for visiting. I am a NYC-based photographer with 10+ years of experience. I specialize in wedding, newborns, family outings, pet, etc. Feel free to check out my previous work and learn more about me. When you are ready, let's talk about what you need!</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Landing