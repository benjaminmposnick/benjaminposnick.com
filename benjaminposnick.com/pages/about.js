import Head from 'next/head';
import React from 'react';
import Navigation from './navigation';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

export default function About() {
  return (
    <div>
      <Head>
        <title>Benjamin Posnick | About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Container>
        <Jumbotron id="jumbotron">
          <h1>About Me</h1>
          <br />
          <Container>
            <Row>
              <Col xs="6" sm="6" md="6" lg="6" xl="6">
                <Image src="/gates_headshot.jpg" alt="Headshot" className="headshot" thumbnail />
              </Col>
              <Col xs="6" sm="6" md="6" lg="6" xl="6">
                <div id="intro">
                  I was born and raised in Syracuse, New York. I attended Onondaga Central High School, where I was a
                  two-sport varsity athlete, competing in both track & field and cross country. I graduated
                  valedictorian of my high school class in June 2017. In August 2017, I moved south
                  (well, <i>technically</i> it is south, albeit less than 50 miles from my home) to Ithaca, NY to
                  attend Cornell University's College of Engineering.
                  <br /><br />
                  I entered Cornell thinking I wanted to study chemical engineering (ChemE). By the end of my freshman year,
                  after having taken my first university-level chemistry course and working as a lab assistant in a
                  polymer chemistry lab for a semester, I became disenchanted with the thought of continuing down the ChemE
                  path. That same semester that I worked as a lab assistant, I took my first computer science (CS)
                  course -- CS 1110, the introductory Python programming course at Cornell. It was in this course that I
                  discovered my passion for computer science. I was inspired by the course's two professors Anne Bracy
                  and Lillian Lee to change my trajectory and switch into the computer science major.
                </div>
              </Col>
            </Row>
            <br />
            <div id="intro">
              The summer after my freshman year, I was incredibly fortunate to be accepted into an REU (Research
              Experiences for Undergraduates) program at Syracuse University's Biomaterials Institute. In pursuit of
              gaining some experience in computer science, I asked my principal investigator, Dr. James Henderson,
              if there were any projects I could work on that were more computationally-focused. Fortunately, he had
              such a project and I was charged with advancing existing computer vision software for cell tracking. I
              remained involved with the project even after the REU program, and was given the opportunity to present
              our research at the 2019 Biomedical Engineering Society (BMES) conference in Philadelphia.
              <br /><br />
              The summer after my sophomore year, I interned as a software engineer at SRC -- a government
              defense contractor -- working in the areas of DevOps, full-stack web development, and query language
              development. The engineering experienced I gained at SRC that summer helped me in obtaining my junior
              year internship with Microsoft. I interned remotely (due to the COVID-19 pandemic) as a software engineer
              with Microsoft, working on security for Windows operating systems.
              <br /><br />
              Throughout my undergraduate career as a CS major, I took a myriad of fascinating courses, including
              courses in distributed systems, cloud computing, machine learning, programming languages, artificial
              intelligence, and data science. I also became interested in economics during undergrad, taking courses
              in microeconomic theory, econometrics, and environental economics. I also worked to improve my
              communication and teaching skills by serving as a teaching assistant for four different courses over
              the years: algorithms, object-oriented programming and data structures, introductory Python programming,
              and introductory mechanics and thermodynamics. I was also a member of the Delta Tau Delta fraternity,
              serving on the executive board for three semesters.
              <br /><br />
              In my spare time, I love running, hiking, golfing, playing guitar, cooking, and traveling. I also am an
              aspiring connoisseur of wine -- an interest sparked after I took the famous wines course at Cornell.
              Check out <a href="https://www.vivino.com/users/benjamin.posnick">my Vivino profile</a> to see the kinds
              of wines I have tried and my thoughts on them!
            </div>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  )
}