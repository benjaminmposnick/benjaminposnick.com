import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';


import Head from 'next/head';
import React from 'react';
import Navigation from './navigation';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
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
                <div id="job">and I'm a software engineer.</div>
                <Container>
                  <Row className="align-items-center" id="icon-links" >
                    <Col className="text-center" xs="6" sm="6" md="3" lg="3" xl="3">
                      <FontAwesomeIcon icon={faFile} id="resume" />
                    </Col>
                    <Col className="text-center" xs="6" sm="6" md="3" lg="3" xl="3">
                      <a href="https://linkedin.com/in/bmposnick">
                        <FontAwesomeIcon icon={faLinkedin} id="linkedin" />
                      </a>
                    </Col>
                    <Col className="text-center" xs="6" sm="6" md="3" lg="3" xl="3">
                      <a href="https://github.com/benjaminmposnick">
                        <FontAwesomeIcon icon={faGithub} id="github" />
                      </a>
                    </Col>
                    <Col className="text-center" xs="6" sm="6" md="3" lg="3" xl="3">
                      <a href="https://scholar.google.com/citations?user=LCTqXdYAAAAJ&hl=en">
                        <FontAwesomeIcon icon={faGoogle} id="google" />
                      </a>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col xs="12" sm="12" md="5" lg="5" xl="5">
                <Image src="/slope_headshot.jpg" alt="Slope Headshot" id="slope-headshot" thumbnail />
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                <br />
                <div id="intro">
                  I am working for Microsoft in the Azure Edge and Platform (AEP) organization. Specifically, my work is
                  focused on security for Windows operating systems. I currently reside in New York City. In May 2021,
                  I graduated magna cum laude from Cornell University with a B.S. in computer science, and an
                  external specialization in economics. Broadly, I am interested in distributed systems and machine
                  learning. Check out the rest of my website to learn a bit more about my story, personal interests, and
                  the projects I have worked on.
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
    </div >
  )
}
