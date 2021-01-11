import React from "react";
import Project from "../components/Project";
import Container from "../components/Container";
import Storm from "../img/storm.jpg";
import Traveler from "../img/travelers.jpg";
import Quiz from "../img/quiz.jpg";
import Team from "../img/team.jpg";
import Money from "../img/money.jpg";
import Runner from "../img/runners.jpg";


const projects = [
    {
        id: 1,
        title: "Employee Directory",
        desc: "This Employee Directory is a React application that displays non-sensitive employee information through components with filtering and sorting functionality.",
        launch: 'https://ds1826.github.io/employee-directory/',
        github: 'https://github.com/DS1826/employee-directory.git',
        image: Team
    
    },
    {
        id: 2,
        title: "Traveler's Memoir",
        desc: "This online community features current personal travel experiences and resources. The app uses the MVC paradigm the development team's own server-side API.",
        launch: 'https://project-2-vasd.herokuapp.com/',
        github: 'https://github.com/DS1826/travelers-memoir.git',
        image: Traveler
    },
    {
        id: 3,
        title: "Budget Tracker",
        desc: "This budget tracker application has been converted into a PWA enabling offline access and functionality.",
        launch: 'https://calm-sea-50773.herokuapp.com/',
        github: 'https://github.com/DS1826/budget-tracker.git',
        image: Money
    },
    {
        id: 4,
        title: "Fitness Tracker",
        desc: "This fitness application enables the user to create and track daily workouts using a Mongo database and an Express server.",
        launch: 'https://limitless-dusk-38143.herokuapp.com/',
        github: 'https://github.com/DS1826/fitness-tracker.git',
        image: Runner
    },
    {
        id: 5,
        title: "Weather Dashboard",
        desc: "This Weather Dashboard displays a current and 5-day forecast based on the browser's geolocation or the user's search criteria, which will be stored and displayed in the search history.",
        launch: 'https://ds1826.github.io/weather-dashboard/',
        github: 'https://github.com/DS1826/weather-dashboard.git',
        image: Storm
    },
    {
        id: 6,
        title: "Code Quiz",
        desc: "This timed JavaScript code quiz runs in a browser and features dynamically updated HTML and CSS powered by JavaScript.",
        launch: 'https://ds1826.github.io/code-quiz/',
        github: 'https://github.com/DS1826/code-quiz.git',
        image: Quiz
    }
];

function Portfolio() {
    return (
        <div>
            <h1 className="jumbotron text-center">My Projects</h1>
            <Container>
                <Project projects={projects} />
            </Container>
        </div>
    );
}

export default Portfolio;