import React, { Component } from 'react';
import './Contact.css';

import contactBk from '../../assets/Images/contact/1.jpg';
import { Form, Container, Card, Row, Col, Button } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div className="contactMain">
        <div className="pimg" style={{ backgroundImage: "url(" + contactBk + ")" }}>
          <div className="ptext">
            <span className="borders">
              {/* sanyo.eng@gmail.com */}
              get in touch
            </span>
          </div>
        </div>
        <Container className="contactCont">
          <h4 className="sendamessage">SEND A MESSAGE</h4>
          <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Form.Row>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" placeholder="Message"/>
            </Form.Group>
            <Button type="submit">SEND MESSAGE</Button>
          </Form>
        </Container>

        

        <div className="pimg" style={{ backgroundImage: "url(" + contactBk + ")" }}>
        <Container className="mapContainer">
          <Card className="mapHolder">
            MAP
          </Card>
        </Container>
        </div>


      </div>



    );
  }
}

export default Contact;