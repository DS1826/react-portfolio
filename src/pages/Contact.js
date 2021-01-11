import React from "react";
import Container from "../components/Container";

function Contact() {
    return (
        <div>
            <h1 className="jumbotron text-center">I <i class="fas fa-heart"></i> coding</h1>
            <Container style={{ marginLeft: 400, height: 300 }}>
                <h2>I also love freelance opportunities.</h2>
                <br></br>
                <p className="lead">Have an exciting project in mind?</p>
                <p className="lead">Need some help with your website development?</p>
                <p className="lead">Send me a <a href="mailto: dina.m.1826@gmail.com">message.</a></p>
                <p class="lead">You can also find me on <a href="https://www.linkedin.com/in/dina-saunders" target="_blank" rel="noreferrer">LinkedIn</a> and <a href="https://github.com/DS1826" target="_blank" rel="noreferrer">GitHub</a>.</p>
            </Container>
        </div>
    );
}

export default Contact;