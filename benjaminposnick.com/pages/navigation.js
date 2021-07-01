import React from 'react';

// Component imports
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
  return (
    <Container>
      <Navbar expand="md" id="navbar">
        <Navbar.Brand href="/" id="brand">Benjamin Posnick</Navbar.Brand>
        <Navbar.Toggle className="navbar-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Button href="/" id="navbar-link" variant="link">Home</Button>
          <Button href="/benjamin_posnick_resume.pdf" id="navbar-link" variant="link">Resume</Button>
          <Button href="/my_story" id="navbar-link" variant="link">My Story</Button>
          <Button href="/personal_interests" id="navbar-link" variant="link">Personal Interests</Button>
          <Button href="/projects" id="navbar-link" variant="link">Projects</Button>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}