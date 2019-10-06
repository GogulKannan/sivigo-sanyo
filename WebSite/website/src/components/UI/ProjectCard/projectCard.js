import React, { Component } from 'react';
import './projectCard.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Card, Col, Row, Table, Carousel } from 'react-bootstrap';
import projectBk from '../../../assets/Images/project/1.jpg';

import logoImage from '../../../assets/Images/logo.png';

class ProjectCard extends Component {

    render() {
        const carouselItems = this.props.colImageList.map((item) =>
            <Carousel.Item>
                <img className="d-block w-100 myColheight" src={item} alt="1 slide" />
            </Carousel.Item>
        );

        let attachedClasses = ["section"];
        if (this.props.side && this.props.side === 1) {
            attachedClasses = ["section", "section-light"];
        }else if(this.props.side && this.props.side === 2){
            attachedClasses = ["section", "section-light2"];
        }else{
            attachedClasses = ["section", "section-hidden"];
        }      
        
        

        return (
            <div>
                 <section className={attachedClasses.join(' ')}>
                    <ScrollAnimation animateIn={this.props.headerAnimation} offset={50}>
                        <h2 className="my-header">{this.props.header}</h2>
                    </ScrollAnimation>
                </section>
                <div className="pimgProject" style={{ backgroundImage: "url(" + projectBk + ")" }}>
                    <div className="pcard2">
                        <Row>
                            <Col className="stepImage" lg={{ span: 6, order: this.props.order }}>
                                <Carousel>
                                    {carouselItems}
                                </Carousel>
                            </Col>
                            <Col className="pcardCont" lg={{ span: 6 }}>
                                <Card className="pcardPara2" bg="light" text="black" >
                                    <Card.Header><img src={logoImage} alt="logo" className="LearnMoreLogo" /></Card.Header>
                                    <Card.Body>
                                        <Table striped bordered hover responsive>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;