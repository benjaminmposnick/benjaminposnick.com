// Font Awesome imports
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Library imports
import Head from 'next/head';
import React from 'react';

// Component imports
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigation from './navigation';
import Row from 'react-bootstrap/Row';

export default function Home() {
  return (
    <div>
      <Head><title>Benjamin Posnick | Home</title></Head>
      <Navigation />
      <Container>
        <Jumbotron id="jumbotron">
          <Container>
            <Row className="align-items-center">
              <Col xs="12" sm="12" md="7" lg="7" xl="7">
                <div id="mynameis">My name is</div>
                <div id="name">Benjamin Posnick</div>
                <div id="job">and I&#39;m a software engineer.</div>
                <Container>
                  <Row className="align-items-center" id="icon-links" >
                    <Col className="text-center" xs="6" sm="6" md="3" lg="3" xl="3">
                      <a href="/benjamin_posnick_resume.pdf"><FontAwesomeIcon icon={faFile} id="resume" /></a>
                    </Col>
                    <Col className="text-center" xs="6" sm="6" md="3" lg="3" xl="3">
                      <a href="https://linkedin.com/in/bmposnick"><FontAwesomeIcon icon={faLinkedin} id="linkedin" /></a>
                    </Col>
                    <Col className="text-center" xs="6" sm="6" md="3" lg="3" xl="3">
                      <a href="https://github.com/benjaminmposnick"><FontAwesomeIcon icon={faGithub} id="github" /></a>
                    </Col>
                    <Col className="text-center" xs="6" sm="6" md="3" lg="3" xl="3">
                      <a href="https://scholar.google.com/citations?user=LCTqXdYAAAAJ&hl=en"><FontAwesomeIcon
                        icon={faGoogle} id="google" /></a>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col xs="12" sm="12" md="5" lg="5" xl="5">
                <Carousel fade id="headshots">
                  <Carousel.Item><Image thumbnail src="/slope_headshot.jpg" alt="Slope Headshot" /></Carousel.Item>
                  <Carousel.Item><Image thumbnail src="/gates_headshot.jpg" alt="Gates Headshot" /></Carousel.Item>
                </Carousel>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                <br />
                <div id="intro">
                  I&#39;m currently working for Microsoft in the Azure Edge and Platform (AEP) organization.
                  Specifically, my work is focused on security for Windows operating systems. I currently reside in New
                  York City. In May 2021, I graduated <i>magna cum laude</i> from Cornell University with a B.S. in
                  computer science, along with an external specialization in economics. My interests and academic
                  background are in the areas of distributed systems and machine learning. Check out the rest of my
                  website to learn a bit more about my story, personal interests, and the projects I&#39;ve worked on.
                  If you would like to chat, my contact information is available on my resume, which is linked above.
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
    </div >
  )
}
