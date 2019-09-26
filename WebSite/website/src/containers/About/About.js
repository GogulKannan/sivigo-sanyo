import React from 'react';
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function About() {
    return (
      
  <div className="AboutBase">
    <div className="mainHeading">
     
      CONSTRUCTION PROFESSIONALS
    
    </div>
    <div className="firstIntro">
    Sanyo Engineering Pte Ltd was establish in Feb 2014, as a young, 
    dynamic contractor specializing in the Integrated Civil Engineering, 
    Project Management and M&E Works. We have been constantly striving hard 
    to greater heights through hard work, innovation, value engineering and 
    sustainable progressive growth providing responsive and quality services to our clients.
    </div>

    <div className="secondHeading">
    <h1>WHAT WE DO</h1>
    <Container>

  <Row>
    <Col><div className="firstRowOf2Heading">PLANT CIVIL WORKS</div></Col>
    <Col><div className="firstRowOf2Heading">SCAFFOLDING WORKS</div></Col>
    <Col><div className="firstRowOf2Heading">INSULATION WORKS</div></Col>
  </Row>

  <Row>
    <Col><div className="firstRowOf2Heading">BLASTING / PAINTING WORKS</div></Col>
    <Col><div className="firstRowOf2Heading">MANPOWER PROVISION</div></Col>
    <Col><div className="firstRowOf2Heading">MAINTENANCE PROCESS PLANT</div></Col>
  </Row>
  
</Container>
</div>
    

    
  </div>
 );
}
        
export default About;