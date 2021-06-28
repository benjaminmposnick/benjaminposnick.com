import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import Head from 'next/head';
import React from 'react';
import Navigation from './navigation';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Benjamin Posnick | Home
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Container>
        <Jumbotron id="jumbotron">
          <Container>
            <Row>
              <Col xs="5" sm="5" md="5" lg="5" xl="5">
                <Image src="/slope_headshot.jpg" alt="Headshot" className="headshot" thumbnail />
              </Col>
              <Col xs="7" sm="7" md="7" lg="7" xl="7">
                <div id="my-name-is">My name is</div>
                <div id="name">Benjamin Posnick</div>
                <div id="job">and I'm a software engineer.</div><br />
                <div id="intro">I am currently working for <strong>Microsoft</strong> in the Azure Edge and Platform (AEP)
                  organization. Specifically, my work is focused on security for Windows operating systems. I am
                  currently living in New York City.
                  I graduated <i>magna cum laude</i> from <strong>Cornell University</strong> in May 2021 with
                  a <strong>B.S. in computer science</strong>, with a focus in distributed systems and machine learning.
                  Check out the rest of my website to learn a bit more about me, my interests, and the projects I have
                  worked on.
                </div>
                <Container>
                  <Row className="align-items-center" id="icon-links" >
                    <Col className="text-center" xs="3" sm="3" md="3" lg="3" xl="3">
                      <a href="benjamin_posnick_resume.pdf">
                        <FontAwesomeIcon icon={faFile} id="resume" size="sm" />
                      </a>
                    </Col>
                    <Col className="text-center" xs="3" sm="3" md="3" lg="3" xl="3">
                      <a href="https://linkedin.com/in/bmposnick">
                        <FontAwesomeIcon icon={faLinkedin} id="linkedin" size="sm" />
                      </a>
                    </Col>
                    <Col className="text-center" xs="3" sm="3" md="3" lg="3" xl="3">
                      <a href="https://github.com/benjaminmposnick">
                        <FontAwesomeIcon icon={faGithub} id="github" size="sm" />
                      </a>
                    </Col>
                    <Col className="text-center" xs="3" sm="3" md="3" lg="3" xl="3">
                      <a href="https://scholar.google.com/citations?user=LCTqXdYAAAAJ&hl=en">
                        <FontAwesomeIcon icon={faGoogle} id="google" size="sm" />
                      </a>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
    </div >
  )
}
