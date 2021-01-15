import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
    return (
        <div style={{ minHeight: '400px', textAlign: 'left' }}>
            <h1 className="jumbotron text-center">I <i class="fas fa-heart" style={{ color: 'purple' }}></i> coding</h1>
            <Container>
                <Row>
                    <Col size="md-3"></Col>
                    <Col size="md-6">
                        <h2>I also love freelance opportunities.</h2>
                    </Col>
                    <Col size="md-3"></Col>
                </Row>
                <Row>
                <Col size="md-3"></Col>
                    <Col size="md-6">
                        <p className="lead">Have an exciting project in mind?</p>
                        <p className="lead">Need some help with your website development?</p>
                        <p className="lead">Send me a <a href="mailto: dina.m.1826@gmail.com">message.</a></p>
                        <p class="lead">You can also find me on <a href="https://www.linkedin.com/in/dina-saunders" target="_blank" rel="noreferrer">LinkedIn</a> and <a href="https://github.com/DS1826" target="_blank" rel="noreferrer">GitHub</a>.</p>
                    </Col>
                    <Col size="md-3"></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;