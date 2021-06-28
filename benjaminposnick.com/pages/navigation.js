import React from 'react';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="/">
          <strong>
            Benjamin Posnick
          </strong>
        </Navbar.Brand>
        <Button variant="primary" href="/">
          Home
        </Button>
        <Button variant="primary" href="/about">
          About Me
        </Button>
        <Button variant="primary" href="/projects">
          Projects
        </Button>
      </Navbar>
    </Container>
  )
}