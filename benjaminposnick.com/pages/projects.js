import Head from 'next/head';
import React from 'react';
import Navigation from './navigation';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Benjamin Posnick | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Container>
        <Jumbotron id="jumbotron">
          <h1>Projects</h1>
          <br />
          <Container>
            <Card>
              <Card.Body>
                <Card.Title>
                  A sharded, linearizable key-value storage system with dynamic load balancing
                </Card.Title>
                <Card.Text>
                  For my practicum project for my distributed systems course, I collaborated with my friend William Long
                  to design a distributed key-value storage system in Java capable of handling network partitions and
                  redistributing shards across replica groups while maintaining linearizability. We implemented
                  a version of multi-Paxos, as described in Robbert van Renesse's
                  paper <a href="https://www.cs.cornell.edu/home/rvr/Paxos/paxos.pdf">
                    <i>Paxos Made Moderately Complex</i>
                  </a>, to ensure fault tolerance of replica groups, optimized with mechanisms for garbage
                  collection and electing a distinguished proposer. The project was done in a framework that was
                  created by a research group at the University of Washington. The framework provides tests for
                  correctness and performance and is also equipped with a model checker. Since the framework is
                  used by students at other universities, I am unable to publically post our code for academic
                  integrity purposes. However, I am happy to talk about the project on an individual basis, so
                  feel free to reach out if you would like to hear more about it. Check out the DSLabs framework in the
                  link below.
                </Card.Text>
                <Button variant="primary" href="https://github.com/emichael/dslabs">
                  DSLabs Github Repo
                </Button>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <Card.Title>
                  ChipotLang. An interpreted functional programming language for concurrent programming
                </Card.Title>
                <Card.Text>
                  For my final project for my programming languages course, I collaborated with my friend William Long
                  to design an functional programming language for concurrent programming. Our vision was that ChipotLang
                  could be used as an educational tool to help bridge the gap between functional and systems
                  programming. The interpreter, which was build in OCaml, translates functional expressions into
                  continuation-passing style and then evaluates them using the semantics of lambda calculus. Check
                  out our Github repo below.
                </Card.Text>
                <Button variant="primary" href="https://github.com/wlong123/ChipotLang">
                  ChipotLang Github Repo
                </Button>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <Card.Title>
                  OCamulator. A domain-specific language for linear algebra, probability, and statistics
                </Card.Title>
                <Card.Text>
                  For my final project for my functional programming course, I collaborated with my friends Matthew
                  Frucht and Stephen Tse to create an interpreted domain-specific language (DSL) in OCaml for
                  mathematical computations. We created a read-eval-print-loop (REPL), where users can write
                  OCamulator code and obtain results, similarly to MATLAB's language shell. The OCamulator language
                  is capable of linear algebraic computations, such as row reduction, PLU matrix factorization, solving
                  linear systems, inverting square matricies, finding determinants of square matrices, and matrix-vector
                  arithmetic. In the OCamulator language, users can also perform basic arithmetic, solve algebraic
                  expressions symbolically, calculate statistical measures datasets, run linear regressions, and evaluate
                  probability density functions (PDFs) and cumulative distribution functions (CDFs) for various
                  common probability distributions. Check out our Github repo below.
                </Card.Text>
                <Button variant="primary" href="https://github.com/benjaminmposnick/OCamulator">
                  OCamulator Github Repo
                </Button>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <Card.Title>
                  Proving the t-distribution arises from sampling normally-distributed populations
                </Card.Title>
                <Card.Text>
                  For my final project for my engineering probability and statistics course, I proved that the
                  t-distribution arises from sampling normal populations when the variance is unknown and is taken from
                  the sample itself. Check out the PDF of my proof below.
                </Card.Text>
                <Button variant="primary" href="t_dist_proof.pdf">
                  Proof
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </Jumbotron>
      </Container >
    </div >
  )
}