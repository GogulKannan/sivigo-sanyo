import React, { Component } from 'react';
import './Contact.css';

import contactBk from '../../assets/Images/contact/1.jpg';

import emailIC from '../../assets/Images/contact/email.png';
import phoneIC from '../../assets/Images/contact/phone.png';
import mapIC from '../../assets/Images/contact/map.png';

import { Form, Container, Card, Row, Col, Button, Image } from 'react-bootstrap';

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
          <h2 className="contactUsheading" >CONTACT US</h2>
          <Row className="iconRow">
            <Col><Image src={phoneIC} />
              <h5 className="iconHead">PHONE</h5>
              <p>TEL NO: +65 6677 2335<br />FAX NO: +65 6677 2335</p>
            </Col>
            <Col>
              <Image src={emailIC} />
              <h5 className="iconHead">EMAIL</h5>
              <p>SANYO.ENG@GMAIL.COM</p>
            </Col>
            <Col><Image src={mapIC} />
              <h5 className="iconHead">LOCATION </h5>
              <p>2 TUAS SOUTH AVE 2<br />#02-07 TUAS VISTA<br />SINGAPORE 637601</p>
            </Col>
          </Row>

        </Container>


        <div className="sendMessDiv">
          <Container>
            <h2 className="contactUsheading">ENQUIRY</h2>
            <Form>
              <Form.Group controlId="exampleForm.ControlInputName">
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInputEmail">
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextMess">
                <Form.Control as="textarea" rows="3" placeholder="Message" />
              </Form.Group>
              <Button type="submit">SEND MESSAGE</Button>
            </Form>
          </Container>
        </div>




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