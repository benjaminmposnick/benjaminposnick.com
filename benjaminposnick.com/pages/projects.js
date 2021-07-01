// Library imports
import Head from 'next/head';
import React from 'react';

// Component imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigation from './navigation';

export default function Projects() {
  return (
    <div>
      <Head><title>Benjamin Posnick | Projects</title></Head>
      <Navigation />
      <Container>
        <Jumbotron id="jumbotron">
          <div id="page-title">Projects</div>
          <br />
          <div id="page-body">Below is a description of some of the projects I worked on during my undergraduate
            career. The selected projects listed here showcase my experience in building distributed systems, designing
            and implementing new programming languages, proving theorems with advanced mathematics, and building
            robust machine learning models.</div>
          <br />
          <Container>
            <Card id="card">
              <Card.Body>
                <Card.Title id="card-title">
                  A sharded, linearizable key-value storage system with dynamic load balancing
                </Card.Title>
                <Card.Subtitle id="card-subtitle">
                  Practicum Project | <a href="https://www.cs.cornell.edu/courses/cs5414/2020fa/"> CS 5414</a>
                  : Distributed Computing Principles |
                  Collaborator: <a href="https://www.linkedin.com/in/william-long-062128150/">William Long</a>
                </Card.Subtitle>
                <br />
                <Card.Text id="card-body">
                  We designed a distributed key-value storage system in Java capable of handling network partitions and
                  redistributing shards across replica groups while maintaining linearizability. We implemented
                  a version of multi-Paxos, as described in
                  in <a href="https://www.cs.cornell.edu/home/rvr/">Robbert van Renesse&#39;s</a> famous
                  paper <a href="https://www.cs.cornell.edu/home/rvr/Paxos/paxos.pdf">
                    <i>Paxos Made Moderately Complex</i>
                  </a>, to ensure fault tolerance of replica groups. (Fun fact: Prof. van Renesse was actually my
                  operating systems professor in undergrad.) We optimized our Paxos implementation with mechanisms for
                  garbage collection and electing a distinguished proposer. The project was carried out in a framework
                  that was created by a research group at the University of Washington, known as DSLabs. The DSLabs
                  framework provides correctness and performance tests for our distributed key-value store, and is also
                  equipped with a model checker. Since the framework is used by students at other universities, I am
                  unable to publicly post our code for academic integrity reasons. However, I am more than happy to talk
                  about the project on an individual basis, so feel free to reach out if you would like to hear more
                  about it.
                </Card.Text>
                <Button href="https://github.com/emichael/dslabs" id="card-button">DSLabs Github Repo</Button>
              </Card.Body>
            </Card>
            <br />
            <Card id="card">
              <Card.Body>
                <Card.Title id="card-title">
                  ChipotLang. An interpreted functional programming language for concurrent programming
                </Card.Title>
                <Card.Subtitle id="card-subtitle">
                  Final Project | <a href="https://www.cs.cornell.edu/courses/cs4110/2020fa/">CS 4110</a>: Programming
                  Languages and Logics |
                  Collaborator: <a href="https://www.linkedin.com/in/william-long-062128150/">William Long</a>
                </Card.Subtitle>
                <br />
                <Card.Text id="card-body">
                  We designed a functional programming language for concurrent programming, known as ChipotLang. Our
                  vision was that ChipotLang could be used as an educational tool to help bridge the gap between
                  functional and systems programming. The interpreter, which was built in OCaml, translates functional
                  expressions
                  into <a
                    href="https://en.wikipedia.org/wiki/Continuation-passing_style">continuation-passing style</a> (CPS)
                  and then evaluates them using the semantics of lambda calculus.
                </Card.Text>
                <Button href="https://github.com/wlong123/ChipotLang" id="card-button">ChipotLang Github Repo</Button>
              </Card.Body>
            </Card>
            <br />
            <Card id="card">
              <Card.Body>
                <Card.Title id="card-title">
                  OCamulator. A domain-specific language for linear algebra, probability, and statistics
                </Card.Title>
                <Card.Subtitle id="card-subtitle">
                  Final Project | <a href="https://classes.cornell.edu/browse/roster/FA20/class/CS/3110">CS 3110</a>:
                  Data Structures and Functional Programming |
                  Collaborators: <a href="https://www.linkedin.com/in/matthewfrucht/">Matthew Frucht</a>
                  , <a href="https://www.linkedin.com/in/stephen-tse-00/">Stephen Tse</a>
                </Card.Subtitle>
                <br />
                <Card.Text id="card-body">
                  We created an interpreted domain-specific language (DSL) in OCaml for mathematical computations. We
                  built a read-eval-print-loop (REPL), where users can write OCamulator code and obtain results,
                  similarly to MATLAB&#39;s shell. The OCamulator language is capable of linear algebraic computations,
                  such as row reduction, PLU matrix factorization, solving linear systems, inverting square matrices,
                  finding determinants of square matrices, and matrix-vector arithmetic. In the OCamulator language,
                  users can also perform basic arithmetic, solve algebraic expressions symbolically, calculate
                  statistical measures of datasets, perform linear regressions, and evaluate PDFs and CDFs for various
                  common probability distributions.
                </Card.Text>
                <Button href="https://github.com/benjaminmposnick/OCamulator" id="card-button">
                  OCamulator Github Repo
                </Button>
              </Card.Body>
            </Card>
            <br />
            <Card id="card">
              <Card.Body>
                <Card.Title id="card-title">
                  Proving the t-distribution arises from sampling normally-distributed populations
                </Card.Title>
                <Card.Subtitle id="card-subtitle">
                  Final Project
                  | <a href="https://classes.cornell.edu/browse/roster/SP20/class/ENGRD/2700">ENGRD 2700</a>:
                  Engineering Probability and Statistics
                </Card.Subtitle>
                <br />
                <Card.Text id="card-body">
                  I rigorously proved that the t-distribution arises from sampling normal populations when the variance
                  is unknown and is taken from the sample itself. The proof relies on topics from probability theory,
                  statistics, linear algebra, and multivariate calculus.
                </Card.Text>
                <Button href="t_dist_proof.pdf" id="card-button">Proof</Button>
              </Card.Body>
            </Card>
            <br />
            <Card id="card">
              <Card.Body>
                <Card.Title id="card-title">
                  Predicting radio signal modulation scheme with an ensemble of convolutional neural networks
                </Card.Title>
                <Card.Subtitle id="card-subtitle">
                  Midterm Project
                  | <a href="https://classes.cornell.edu/browse/roster/SP20/class/ECE/4200">ECE 4200</a>:
                  Fundamentals of Machine Learning
                </Card.Subtitle>
                <br />
                <Card.Text id="card-body">
                  I built a deep learning model for predicting the modulation scheme used to encode a radio signal using
                  time series data - specifically, the in-phase and quadrature (I/Q) components of a signal sampled
                  at a periodic rate. After experimenting with a variety of machine learning algorithms and models, the
                  final model chosen was an ensemble of convolutional neural networks. With ten possible modulation
                  schemes in the dataset and low signal-to-noise ratio, this model was able to predict which scheme was
                  used to encode a given signal with 61.820% accuracy on the test set.
                </Card.Text>
                <Button href="https://github.com/benjaminmposnick/Modulation-Prediction" id="card-button"
                  className="mr-2">Modulation Prediction Github Repo</Button>
                <Button href="modulation_prediction.pdf" id="card-button">Report</Button>
              </Card.Body>
            </Card>
          </Container>
        </Jumbotron>
      </Container >
    </div >
  )
}