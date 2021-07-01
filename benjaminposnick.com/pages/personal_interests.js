// Library imports
import Head from 'next/head';
import React from 'react';

// Component imports
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigation from './navigation';

export default function PersonalInterests() {
  return (
    <div>
      <Head>
        <title>Benjamin Posnick | Personal Interests</title>
      </Head>
      <Navigation />
      <Container>
        <Jumbotron id="jumbotron">
          <div id="page-title">Personal Interests</div>
          <br />
          <Container>
            <div id="page-body">
              In my spare time, I love running, hiking, golfing, playing guitar, cooking, and traveling. I am also an
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