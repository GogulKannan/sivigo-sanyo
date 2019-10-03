import React, { Component } from 'react';
import './projectCard.css';
import project1 from '../../../assets/Images/project/1.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { Card, Container, Col, Row, Table } from 'react-bootstrap';

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
                <div className="pimg" style={{ backgroundImage: "url(" + project1 + ")" }}> >
                    <div className="pcard">
                        <Container>
                            <Row>
                                <Col className="stepImage" lg={{ span: 7 }}>
                                    <Card.Img src={this.props.image} />
                                    <Card.Footer />
                                </Col>
                                <Col lg={{ span: 5 }}>
                                    <Card className="pcardPara" bg="light" text="black" >
                                        <Card.Header><img src={logoImage} alt="logo" className="LearnMoreLogo" /></Card.Header>
                                        <Card.Body>
                                            
                                            <Table striped bordered hover responsive  >
                                                <tbody>
                                                    <tr>
                                                        <td>CLIENT/OWNER</td>
                                                        <td>{this.props.list1}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>MAIN CONTRACTOR</td>
                                                        <td>{this.props.list2}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>DESCRIPTION OF PROJECT</td>
                                                        <td>{this.props.list3}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>SCOPE OF WORK</td>
                                                        <td>{this.props.list4}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>DURATION</td>
                                                        <td>{this.props.list5}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
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