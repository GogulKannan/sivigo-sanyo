import React, { Component } from 'react';

import './About.css';
import aboutBg1 from '../../assets/Images/about/1.png';
import BasicDesign from '../../components/UI/BasicDesign/BasicDesign';
import aboutBg2 from '../../assets/Images/about/2.png';
import aboutBg3 from '../../assets/Images/about/3.png';
import aboutBg4 from '../../assets/Images/about/4.png';
import aboutBg5 from '../../assets/Images/about/5.png';
import aboutBg6 from '../../assets/Images/about/6.png';
import aboutBg7 from '../../assets/Images/about/7.png';
import aboutBg8 from '../../assets/Images/about/8.png';

import Modal from '../../components/UI/Modal/Modal';
import LearnMore from '../../components/LearnMore/LearnMore';
import {Card,CardDeck,ListGroup,Container} from 'react-bootstrap';

import man from '../.././assets/Images/about/man.jpg';


import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

let learnMore = null;
let currentScrollPosAbout = 0;

class About extends Component {

  state = {
    showModal: false,
    detailsObj: []
  }


  showMoreDetails = (detailsObj, id) => {

    this.setState({ 
        showModal: true 
    });


    console.log("showMore")
    learnMore = <LearnMore 
                  heading={detailsObj[id].header} 
                  modalList={detailsObj[id].modalList} 
                  content={detailsObj[id].content}
                  closeModal={this.closeShowMore}/>;

    var startScroll = document.getElementsByClassName("AboutMain")[0];
    if(startScroll){
      currentScrollPosAbout = window.pageYOffset;
      startScroll.classList.add("no-body-scroll");
    }

  }

  closeShowMore = () => {
      var stopScroll = document.getElementsByClassName("AboutMain")[0];
      if(stopScroll){
        stopScroll.classList.remove("no-body-scroll");
        window.scrollTo(0, currentScrollPosAbout);
      }
      this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="AboutMain" >
        <div className="pimg" style={{ backgroundImage: "url(" + aboutBg1 + ")" }}>
          <div className="ptext">
            <span className="borders">
              CONSTRUCTION PROFESSIONALS
            </span>
          </div>
        </div>
        <section className="section section-light-about">
          <h2 className="my-header-main">WHAT WE DO</h2>
          <ScrollAnimation animateIn="slideInLeft" offset={50}>
            <div className="ptext-aboutMessage">
                Sanyo Engineering Pte Ltd was establish in Feb 2014, as a young,
                dynamic contractor specializing in the Integrated Civil Engineering,
                Project Management and M&E Works. We have been constantly striving hard
                to greater heights through hard work, innovation, value engineering and
                sustainable progressive growth providing responsive and quality services to our clients.
            </div>
          </ScrollAnimation> 
          <h2 className="my-header-sub">PLANT CIVIL WORK</h2>
        </section>

        <BasicDesign 
          bg={aboutBg2} 
          side={0} 
          header="PLANT CIVIL WORK" 
          id={1} 
          animation={0}
          subHeading="SAFETY WORKS"
          content="Since its founding, Sanyo Engineering Pte Ltd has been one of the most trusted names in the industry. Hire us for this service and
          learn how we cater to the needs of each client, ensuring the results you need and deserve." 
          modalList ={[{id: 1, value:"Construction of Roads"},
          {id:2,value:"Widening, Extension, Re-marking and Maintenance of Roads"},
          {id:3,value:"Construction of Walkways"},
          {id:4,value:"Construction & Maintenance of Road Drainage"},
          {id:5,value:"Equipment foundation"},
          {id:6,value:"Cable Trench excavation and backfilling"}]}
          modalShow={this.showMoreDetails}/>
        <BasicDesign 
          bg={aboutBg3} 
          side={1} 
          header="SCAFFOLDING WORKS"  
          id={2}
          animation={0}
          subHeading="BUILT WITH GOOD SUPPORT"
          content="Since its founding, Sanyo Engineering Pte Ltd has been one of the most trusted names in the industry.
          Hire us for this service and learn how we cater to the needs of each client,
          ensuring the results you need and deserve." 
          modalList ={[{id: 1, value:"Erection and Dismantling of Scaffolds"},
          {id:2,value:"Supply qualified scaffold supervisors and erectors"}]}
          modalShow={this.showMoreDetails}/>
        <BasicDesign 
          bg={aboutBg4} 
          side={2} 
          header="INSULATION WORKS"  
          id={3} 
          animation={1}
          subHeading="ATTENTION TO DETAILS"
          content="Sanyo Engineering Pte Ltd is committed to getting the job done, especially when it comes to this service. You can count on us to be professional,
          timely, efficient and make sure you’re satisfied every step of the way." 
          modalList ={[{id: 1, value:"Hot and Cold Insulation Services"},
          {id:2,value:"Supply of Insulation Materials"},
          {id:3,value:"Installation of Insulation for pipes and equipment’s in Process & Construction Industry"}]}
          modalShow={this.showMoreDetails}/>
        <BasicDesign 
          bg={aboutBg5} 
          side={1} 
          header="MANPOWER PROVISION"  
          id={4} 
          animation={0}
          subHeading="SKILLED AND EXPERIENCE"
          content="We have the experience and skills necessary to tackle just about every type of job that comes our way. With Sanyo Engineering Pte Ltd,
          clients know exactly what to expect - professionalism, efficiency and exceptional results." 
          modalList ={[{id: 1, value:"Provides professionals"},
          {id:2,value:"skilled / semi-skilled tradesmen for the Process Maintenance & Construction"},
          {id:3,value:"Building Construction"},
          {id:4,value:"Oil and Gas Industry"}]}
          modalShow={this.showMoreDetails}/>
        <BasicDesign 
          bg={aboutBg6} 
          side={2} 
          header="BLASTING / PAINTING WORKS"  
          id={5}
          animation={1}
          subHeading= "GOOD QUALITY FINISH"
          content="We have the experience and skills necessary to tackle just about every type of job 
          that comes our way. With Sanyo Engineering Pte Ltd, clients know exactly what to expect - 
          professionalism, efficiency and exceptional results." 
          modalList ={[{id: 1, value:"On Site Painting Services"},
          {id:2,value:"On Site Blasting Services"},
          {id:3,value:"Power Brush & Roller Painting"},
          {id:4,value:"Hydro Jet Washing"}]}
          modalShow={this.showMoreDetails}/>
        
        <section className="section section-light">
            <ScrollAnimation animateIn="slideInLeft" offset={50}>
                <h2 className="my-header">OTHER SPECIALIZATION</h2>
            </ScrollAnimation>   
        </section>                
        <div className="pimg" style={{backgroundImage: "url(" +aboutBg7+ ")"}}>
          <Container className="otherSpec">
          <Card  bg="light" text="black" >
          <Card.Body>
            <ListGroup variant="flush">
            <ListGroup.Item>Maintenance Services in Process Plant</ListGroup.Item>
              <ListGroup.Item>Mechanical Works</ListGroup.Item>
              <ListGroup.Item>Steel Structural Works</ListGroup.Item>
              <ListGroup.Item>Concrete Repair Works</ListGroup.Item>
              <ListGroup.Item>Coring Works</ListGroup.Item>
              <ListGroup.Item>Demolition Works</ListGroup.Item>
              <ListGroup.Item>Road Works</ListGroup.Item>
              <ListGroup.Item>Excavation of Ground</ListGroup.Item>
              <ListGroup.Item>Backfilling of Soil/Sand</ListGroup.Item>
            </ListGroup>   
            </Card.Body>     
        </Card>
          </Container>
        
        </div>



        {/* <BasicDesign 
          bg={aboutBg7}  
          side={1} 
          header="MAINTENANCE PROCESS PLANT"  
          id={6} 
          animation={0}
          subHeading= "QUALITY MANAGEMENT"
          content="We have the experience and skills necessary to tackle just about every type of job that comes 
          our way. With Sanyo Engineering Pte Ltd, clients know exactly what to expect - 
          professionalism, efficiency and exceptional results." 
          modalList ={[{id: 1, value:"?"}]}
          modalShow={this.showMoreDetails}/> */}

        <Modal show={this.state.showModal} modalClosed={this.closeShowMore}>
                    {learnMore}
        </Modal>
        <section className="section section-light2">
          <ScrollAnimation animateIn="slideInRight" offset={50}>
            <h2 className="my-header">THE SANYO TEAM</h2>
          </ScrollAnimation>        
        </section>
        <div className="pimg"  style={{backgroundImage: "url(" + aboutBg8 + ")"}}>
          <div className="team">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={man} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">email@sanyo.com</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={man} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">email@sanyo.com</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={man} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">email@sanyo.com</small>
              </Card.Footer>
            </Card>
          </CardDeck>
          </div>
        </div>
      </div>
    );
  }
}

export default About;