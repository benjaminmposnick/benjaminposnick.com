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
      </Head>
      <Navigation />
      <Container>
        <Jumbotron id="jumbotron">
          <div id="page-title">Projects</div>
          <br />
          <Container>
            <Card>
              <Card.Body>
                <Card.Title id="card-title">
                  A sharded, linearizable key-value storage system with dynamic load balancing
                </Card.Title>
                <Card.Subtitle id="card-subtitle">
                  Practicum Project | <a href="https://www.cs.cornell.edu/courses/cs5414/2020fa/"> CS 5414: Distributed
                    Computing Principles</a> | Collaborator: William Long
                </Card.Subtitle>
                <br />
                <Card.Text id="card-body">
                  We designed a distributed key-value storage system in Java capable of handling network partitions and
                  redistributing shards across replica groups while maintaining linearizability. We implemented
                  a version of multi-Paxos, as described in
                  in <a href="https://www.cs.cornell.edu/home/rvr/">Robbert van Renesse&#39;s</a> famous
                  paper <a href="https://www.cs.cornell.edu/home/rvr/Paxos/paxos.pdf">
                    <i>Paxos Made Moderately Complex</i>
                  </a> (fun fact: Prof. van Renesse was actually my operating systems professor), to ensure fault tolerance of replica groups, optimized with mechanisms for garbage
                  collection and electing a distinguished proposer. The project was carried out in a framework that was
                  created by a research group at the University of Washington, known as DSLabs. The DSLabs framework provides correctness
                  and performance tests for our distributed system, and is also equipped with a model checker. Since the framework is
                  used by students at other universities, I am unable to publicly post our code for academic
                  integrity reasons. However, I am happy to talk about the project more in-depth on an individual basis, so
                  feel free to reach out if you would like to hear more about it. Check out the DSLabs framework in the
                  link below.
                </Card.Text>
                <Button href="https://github.com/emichael/dslabs" id="card-button">
                  DSLabs Github Repo
                </Button>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <Card.Title id="card-title">
                  ChipotLang. An interpreted functional programming language for concurrent programming
                </Card.Title>
                <Card.Subtitle id="card-subtitle">
                  Final Project | <a href="https://www.cs.cornell.edu/courses/cs4110/2020fa/"> CS 4110: Programming
                    Languages and Logics</a> | Collaborator: William Long
                </Card.Subtitle>
                <br />
                <Card.Text id="card-body">
                  We designed a functional programming language for concurrent programming, known as ChipotLang. Our vision was that ChipotLang
                  could be used as an educational tool to help bridge the gap between functional and systems
                  programming. The interpreter, which was built in OCaml, translates functional expressions
                  into <a href="https://en.wikipedia.org/wiki/Continuation-passing_style">continuation-passing style (CPS)</a> and then evaluates them using the semantics of lambda calculus. Check
                  out our Github repo below.
                </Card.Text>
                <Button href="https://github.com/wlong123/ChipotLang" id="card-button">
                  ChipotLang Github Repo
                </Button>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <Card.Title id="card-title">
                  OCamulator. A domain-specific language for linear algebra, probability, and statistics
                </Card.Title>
                <Card.Subtitle id="card-subtitle">
                  Final Project | <a href="https://classes.cornell.edu/browse/roster/FA20/class/CS/3110"> CS 3110: Data
                    Structures and Functional Programming</a> | Collaborators: Matthew Frucht, Stephen Tse
                </Card.Subtitle>
                <br />
                <Card.Text id="card-body">
                  We created an interpreted domain-specific language (DSL) in OCaml for
                  mathematical computations. We created a read-eval-print-loop (REPL), where users can write
                  OCamulator code and obtain results, similarly to MATLAB&#39;s language shell. The OCamulator language
                  is capable of linear algebraic computations, such as row reduction, PLU matrix factorization, solving
                  linear systems, inverting square matrices, finding determinants of square matrices, and matrix-vector
                  arithmetic. In the OCamulator language, users can also perform basic arithmetic, solve algebraic
                  expressions symbolically, calculate statistical measures of datasets, run linear regressions, and evaluate
                  probability density functions (PDFs) and cumulative distribution functions (CDFs) for various
                  common probability distributions. Check out our Github repo below.
                </Card.Text>
                <Button href="https://github.com/benjaminmposnick/OCamulator" id="card-button">
                  OCamulator Github Repo
                </Button>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <Card.Title id="card-title">
                  Proving the t-distribution arises from sampling normally-distributed populations
                </Card.Title>
                <Card.Subtitle id="card-subtitle">
                  Final Project | <a href="https://classes.cornell.edu/browse/roster/SP20/class/ENGRD/2700"> ENGRD 2700:
                    Engineering Probability and Statistics</a>
                </Card.Subtitle>
                <br />
                <Card.Text id="card-body">
                  I rigorously proved that the t-distribution arises from sampling normal populations when the variance is unknown and is taken from
                  the sample itself. Check out the PDF of my proof below.
                </Card.Text>
                <Button href="t_dist_proof.pdf" id="card-button">
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