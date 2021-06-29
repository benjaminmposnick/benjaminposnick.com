import Head from 'next/head';
import React from 'react';
import Navigation from './navigation';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

export default function Story() {
  return (
    <div>
      <Head>
        <title>Benjamin Posnick | My Story</title>
      </Head>
      <Navigation />
      <Container>
        <Jumbotron id="jumbotron">
          <div id="page-title">My Story</div>
          <br />
          <Container>
            <div id="page-body">
              I was born and raised in Syracuse, New York. I attended Onondaga Central High School, where I was a
              two-sport varsity athlete, competing in both track & field and cross country. I graduated
              valedictorian of my high school class in June 2017. In fall of 2017, I moved south
              (well, <i>technically</i> it is south, albeit less than 50 miles from my home) to Ithaca, New York to
              attend Cornell University's College of Engineering.
              <br /><br />
              I entered Cornell intending to study chemical engineering (ChemE). By the end of my freshman year,
              after having taken my first university-level chemistry course and working as a lab assistant in a
              polymer chemistry lab for a semester, I became disenchanted with the thought of continuing down the ChemE
              path. In the same semester that I worked as a lab assistant, I took my first computer science (CS)
              course -- CS 1110, introductory Python programming. It was this course, and the inspirational teaching
              of Professor Anne Bracy, that helped me to discover my passion for computer science and ultimately led
              me to switch my major to computer science.
              <br /><br />
              The summer after my freshman year, I was incredibly fortunate to be accepted into an REU (Research
              Experiences for Undergraduates) program at Syracuse University's Biomaterials Institute. In pursuit of
              gaining more experience in computer science, I asked my principal investigator, Dr. James Henderson,
              if there were any projects I could work on that were more computationally-focused. He did in fact
              have such a project. I was tasked with advancing existing computer vision software for cell tracking. I
              remained involved with this project even after the REU program, and was given the opportunity to present
              our research at the 2019 Biomedical Engineering Society (BMES) conference in Philadelphia.
              <br /><br />
              The summer after my sophomore year, I interned as a software engineer at SRC -- a government
              defense contractor -- working in the realms of DevOps, full-stack web development, and query language
              development. The experienced I gained at SRC that summer springboarded me into my junior
              year software engineeering internship with Microsoft, wherein I worked on security Windows
              operating systems.
              <br /><br />
              Throughout my undergraduate career as a CS major, I took a myriad of fascinating courses, including
              courses in distributed systems, cloud computing, machine learning, programming languages, artificial
              intelligence, and data science. I also became interested in economics during undergrad, taking courses
              in microeconomic theory, econometrics, and environmental economics. I also worked to improve my
              communication and teaching skills by serving as a teaching assistant for four different courses:
              algorithms, object-oriented programming and data structures, introductory Python programming,
              and introductory mechanics and thermodynamics. I was also a member of the Delta Tau Delta fraternity,
              serving on the executive board for three semesters.
              <br /><br />
              I have returned to Microsoft to begin my professional career as a software engineer, working
              on the same team I interned with during my junior year. I am currently working as a remote
              employee from New York City.
            </div>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  )
}