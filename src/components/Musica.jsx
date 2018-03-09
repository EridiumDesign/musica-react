import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Nav center>
            <NavItem>BROWSING ARTIST<br />Chet Faker - Built On Glass</NavItem>
          </Nav>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={12} md={8}>

            </Col>
            <Col xs={6} md={4}>

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
