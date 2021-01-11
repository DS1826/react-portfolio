import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Profile from "../profile.jpg";

function About() {
    return (
        <div>
        <h1 className="jumbotron text-center">Nice to meet you.</h1>
            <Container>
                <Row>
                    <Col size="md-4">
                    <img src={Profile} className="img-fluid" alt="placeholder"></img>
                    
                    </Col>

                    <Col size="md-8">
                        <h3>I'm Dina, a resourceful web developer who loves problem-solving and visually creative input and output in a
          variety of mediums.</h3>
                        <p>
                            I started coding in the mid 80s with my Texas Instrument TI-99 console. I cracked open the user manual and started my first coding project. After oh-so-many 
                            hours and oh-so-many lines of BASIC coded, I made that 16-bit Mr. Bojangles dance.
            </p>
            <p>
                            When I’m not in front of my computer, I love exploring new hiking trails, getting grounded on my yoga mat,
                            escaping into a mystery novel, sampling new recipes in the kitchen, taking things apart and putting them back
                            together and figuring out ways to make my kids laugh.
            </p>
            <p><a className="hello" href="https://drive.google.com/file/d/1QGAfLFQTcFb3ZRamSj402rffnu34rPWv/view?usp=sharing" target="_blank" rel="noreferrer">
          
          <h5 class="card-title align-bottom">View My Resume</h5> </a></p>
        
            <br></br>
        
                    </Col>
                </Row>
                
                <Row>
                    <Col size="md-4">
                    <h3>Languages:</h3>
                    <p>HTML, CSS, JavaScript</p>
                    
                        
                    </Col>
                    <Col size="md-4">
                    <h3>Libraries & Databases:</h3>
                    <p>Node, React, JQuery,</p>
                    <p>Express, mySQL, MongoDB,</p>
                    <p>Sequelize, Mongoose,</p>
                    <p>Bootstrap, Bulma, Handlebars</p>
                    </Col>
                    <Col size="md-4">
                    <h3>Development Tools:</h3>
                    <p>Git, GitHub, GitLab,</p>
                    <p>Visual Studio, Heroku </p>
                    <p>Agile Methodologies</p>
            
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default About;