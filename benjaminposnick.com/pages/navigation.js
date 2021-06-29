import React from 'react';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
  return (
    <Container>
      <Navbar expand="md" className="navbar">
        <Navbar.Brand href="/" id="brand">Benjamin Posnick</Navbar.Brand>
        <Navbar.Toggle className="navbar-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Button variant="link" href="/" className="navbar-link">Home</Button>
          <Button variant="link" href="/benjamin_posnick_resume.pdf" className="navbar-link">Resume</Button>
          <Button variant="link" href="/story" className="navbar-link">My Story</Button>
          <Button variant="link" href="/interests" className="navbar-link">Personal Interests</Button>
          <Button variant="link" href="/projects" className="navbar-link">Projects</Button>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}