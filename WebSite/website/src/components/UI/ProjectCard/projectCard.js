import React, { Component } from 'react';
import './projectCard.css';
import project1 from '../../../assets/Images/project/1.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import { Card, ListGroup, Container, Col, Row } from 'react-bootstrap';
import DummyImage from "../../../assets/Images/project/dummyImg2.png"
import logoImage from '../../../assets/Images/logo.png';

class ProjectCard extends Component {

    render() {
        return (
            <div>
                <section className="section section-light2">
                    <ScrollAnimation animateIn="slideInRight" offset={50}>
                        <h2 className="my-header">{this.props.header}</h2>
                    </ScrollAnimation>
                </section>
                <div className="pimg" style={{ backgroundImage: "url(" + project1 + ")" }}>
                    <div className="pcard">
                        <Container>
                            <Row>
                                <Col className="stepImage" lg={{ span: 7 }}>
                                    <Card.Img src={DummyImage} />
                                    <Card.Footer/>
                                </Col>
                                <Col lg={{ span: 5 }}>
                                    <Card className="pcardPara" bg="light" text="black" >
                                        <Card.Header><img src={logoImage} alt="logo" className="LearnMoreLogo" /></Card.Header>
                                        <Card.Body>
                                            <Card.Title>Primary Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </Card.Text>
                                            <ListGroup>
                                                <ListGroup.Item>CLIENT/OWNER :</ListGroup.Item>
                                                <ListGroup.Item>MAIN CONTRACTOR: </ListGroup.Item>
                                                <ListGroup.Item>DESCRIPTION OF PROJECT</ListGroup.Item>
                                                <ListGroup.Item>SCOPE OF WORK</ListGroup.Item>
                                                <ListGroup.Item>DURATION</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;