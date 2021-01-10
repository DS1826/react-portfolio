import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import profile from "../profile.jpg";

function About() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-4" backgroundImage={profile}>

                    </Col>

                    <Col size="md-8">
                        <h2>I'm Dina, a web developer who loves researching, problem-solving and visually creative input and output in a
          variety of mediums.</h2>
                        <p>
                            I started coding in the mid 80s with my Texas Instrument TI-99 console. I cracked open the user manual and started my first coding project. After spending
                            hours coding lines of BASIC, I was thrileed to make a 16-bit Mr. Bojangles dance.
            </p>
                        <p>
                            Over the years, I've enjoyed punching-up Ebay listings for family members and customizing websites for small
                            businesses. I may even be known to have replaced a motherboard once upon a time. I still enjoy taking things apart
                            and putting them back together.
            </p>
                        <p>
                            When I’m not in front of my computer, I love exploring new hiking trails, getting grounded on my yoga mat,
                            escaping into a mystery novel, sampling new recipes in the kitchen and figuring out ways to make my kids
                            laugh.
            </p>
                    </Col>
                </Row>
                <Row>
                    <h2>Skills</h2>
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