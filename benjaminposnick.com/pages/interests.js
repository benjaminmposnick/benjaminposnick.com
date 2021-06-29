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

export default function Interests() {
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