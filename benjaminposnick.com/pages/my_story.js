// Library imports
import Head from 'next/head';
import React from 'react';

// Component imports
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigation from './navigation';

export default function MyStory() {
  return (
    <div>
      <Head><title>Benjamin Posnick | My Story</title></Head>
      <Navigation />
      <Container>
        <Jumbotron id="jumbotron">
          <div id="page-title">My Story</div>
          <br />
          <div id="page-body">
            I was born and raised in Syracuse, New York. I
            attended <a href="http://www.onondagacsd.org/highschool">Onondaga Central High School</a>, where I was a
            two-sport varsity athlete, competing in both track & field and cross country. I graduated valedictorian of
            my high school class in June 2017. I then moved south (well, <i>technically</i>, albeit less than 50 miles
            from my home) to Ithaca, New York to attend Cornell University&#39;s College of Engineering.
            <br /><br />
            I entered Cornell intending to study chemical engineering (ChemE). After taking my first university-level
            chemistry course during my freshman fall and working as a lab assistant in a chemical engineering lab during
            my freshman spring, I became disenchanted with the idea of continuing down the ChemE path. During my
            freshman spring, I took my first computer science (CS) course -- CS 1110, introductory Python programming.
            It was this course, and the inspirational teaching of <a href="http://www.cs.cornell.edu/~bracy/">Professor
              Anne Bracy</a>, that helped me to discover my passion for computer science, which ultimately led me to
            switch my major to CS.
            <br /><br />
            The summer after my freshman year, I was incredibly fortunate to be accepted into an REU (Research
            Experiences for Undergraduates) program at Syracuse University&#39;s Biomaterials Institute. I was placed
            in the same research group I had worked with previously during a research internship I participated in
            during the summer after my junior year of high school. The work I did during that high school internship
            involved synthesizing and characterizing a new type of polymer, known as a quadruple shape memory polymer
            (Q-SMP). This work was eventually published in the peer-reviewed journal ChemPhysChem in
            2018. You can find that
            paper <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/cphc.201800389">linked here</a>.
            <br /><br />
            Instead of continuing to do work in polymer chemistry during my REU, I wanted to gain some experience in
            computer science. Hence, I asked my principal investigator, <a href="https://henderson.syr.edu/">Dr. James
              Henderson</a>, if there were any projects I could work on that were more computationally-focused.
            Thankfully, he did have such a project. I was tasked with advancing existing computer vision software for
            cell tracking, known
            as <a href="https://royalsocietypublishing.org/doi/10.1098/rsif.2014.0386">ACTIVE</a> (Automated
            Contour-based Tracking for <i>In Vitro</i> Environments). I remained involved with this project even after
            the REU program and was later given the opportunity to present our research at the 2019 Biomedical
            Engineering Society (BMES) conference in Philadelphia.
            <br /><br />
            The summer after my sophomore year, I interned as a software engineer
            at <a href="https://www.srcinc.com/">SRC Inc</a> -- a government defense contractor -- working in the realms
            of DevOps, full-stack web development, and interpreter development. The experienced I gained at SRC that
            summer springboarded me into my junior year software engineering internship with Microsoft, wherein I worked
            on security for Windows operating systems.
            <br /><br />
            Throughout my undergraduate career as a CS major, I took a myriad of fascinating courses, including courses
            in distributed systems, cloud computing, machine learning, programming languages, artificial intelligence,
            and data science. I also became interested in economics during undergrad, taking courses in microeconomic
            theory, econometrics, and environmental economics. I was a member of
            the <a href="https://www.cornelldelts.org/">Delta Tau Delta fraternity</a>, serving on the executive board
            for three semesters. In 2019, I was the Vice President for Communications of Cornell&#39;s Interfraternity
            Council (IFC). Additionally, I served as a teaching assistant for four different courses (and numerous
            incredible professors):
            <ul id="page-body">
              <li>
                <a href="https://classes.cornell.edu/browse/roster/FA20/class/CS/4820">CS 4820</a>:
                Introduction to Analysis of Algorithms | Professor: <a
                  href="https://www.cs.cornell.edu/~kozen/">Dexter Kozen</a>
              </li>
              <li>
                <a href="https://classes.cornell.edu/browse/roster/SP20/class/CS/2110">CS 2110</a>: Object-Oriented
                Programming and Data Structures | Professors: <a href="https://www.cs.cornell.edu/gries/">David
                  Gries</a>
                , <a href="http://www.cs.cornell.edu/~bracy/">Anne Bracy</a>
                , <a href="https://www.cs.cornell.edu/~clarkson/">Michael Clarkson</a>
              </li>
              <li>
                <a href="https://classes.cornell.edu/browse/roster/SP19/class/CS/1110">CS 1110</a>: Introduction to
                Computing Using Python | Professor: <a href="http://www.cs.cornell.edu/~bracy/">Anne Bracy</a>
              </li>
              <li>
                <a href="https://classes.cornell.edu/browse/roster/FA18/class/PHYS/1112">PHYS 1112</a>: Physics I
                - Mechanics and Heat | Professors: <a href="https://physics.cornell.edu/jeevak-parpia">Jeevak Parpia</a>
                , <a href="https://physics.cornell.edu/philip-krasicky">Philip Krasicky</a>
              </li>
            </ul>
            <br />
            I have since returned to Microsoft to begin my professional career as a software engineer, working
            on the same team I interned with during my junior year: the Platform Integrity (PI) team within the Azure
            Edge and Platform (AEP) organization. I am currently working remote from New York City.
          </div>
        </Jumbotron>
      </Container>
    </div >
  )
}