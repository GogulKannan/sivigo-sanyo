import React, { Component } from 'react';
import './Project.css';
import projectBk from '../../assets/Images/project/1.jpg';
import ProjectCard from '../../components/UI/ProjectCard/projectCard';
import ScrollAnimation from 'react-animate-on-scroll';
import { Card, Container, Table } from 'react-bootstrap';


import ca1A from '../../assets/Images/project/cal/1A.jpeg';
import ca1B from '../../assets/Images/project/cal/1B.jpeg';
import ca1C from '../../assets/Images/project/cal/1C.jpeg';
import ca1D from '../../assets/Images/project/cal/1D.jpeg';

import ca2A from '../../assets/Images/project/cal/2A.jpg';
import ca2B from '../../assets/Images/project/cal/2B.jpg';
import ca2C from '../../assets/Images/project/cal/2C.jpg';


import ca3A from '../../assets/Images/project/cal/3A.jpg';
import ca3B from '../../assets/Images/project/cal/3B.jpg';
import ca3C from '../../assets/Images/project/cal/3C.jpg';
import ca3D from '../../assets/Images/project/cal/3D.jpg';

import certBG from '../../assets/Images/project/certBG.png';


class Project extends Component {


  constructor(props) {
    super(props);

    this.state = {
      currentScrollHeight: window.scrollY
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      // this.setState({currentScrollHeight: window.scrollY});
      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
    if (this.state.currentScrollHeight != newScrollHeight){
        this.setState({currentScrollHeight: newScrollHeight})
    }
    }
  }

  
  render() {
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1)-0.1;

    return (

      <div className="projectMain">
        <div className="pimg" style={{ backgroundImage: "url(" + projectBk + ")" }}>
          <div className="ptext">
            <span className="borders">
              SANYO'S PROJECTS
            </span>
          </div>
        </div>

        <ProjectCard
          header="HDB INDUSTRIAL COMPLEX KB 1"
          side={1} 
          headerAnimation="slideInLeft"
          order="0"
          colImageList={[ca1A, ca1B, ca1C, ca1D]}
          list1="HDB / QXY RESOURCES PTE LTD"
          list2="ORAS ENGINEERING & CONSTRUCTION (S) PTE LTD"
          list3="REPAIR & REDECORATIONS WORK AT HDB INDUSTRIAL COMPLEX KB-1"
          list4="MANUAL EXCAVATION WITH LEAN CONCRETE"
          list5="MAR-17 -  MAY-17"
        />

        <ProjectCard
          header="THYE HUA KWAN HOSPITAL"
          side={2}
          headerAnimation="slideInRight"
          order="1"
          colImageList={[ca2A, ca2B, ca2C]}
          list1="THYE HUA KWAN HOSPITAL"
          list2="JPS ENGINEERING PTE LTD"
          list3="EXTENSION PROJECT"
          list4="INSULATION FOR CHILLER PIPING"
          list5="FEB-17 - JUN-17"
        />
         <ProjectCard
          header="PAINTING WORKS AT DENKA WAREHOUSE"
          side={1} 
          headerAnimation="slideInLeft"
          order="0"
          colImageList={[ca3A, ca3B, ca3C, ca3D]}
          list1="DENKA SINGAPORE PTE LTD"
          list2="DENKA SINGAPORE PTE LTD"
          list3="MAINTENANCE"
          list4="PAINTING WORK AT DSPL: 1 AND 2"
          list5="SEP-16 - FEB-17"
        />

        



        {/* <ProjectCard
          header="HDB INDUSTRIAL COMPLEX KB 1"
          image={project2}
          list1="HDB / QXY RESOURCES PTE LTD"
          list2="ORAS ENGINEERING & CONSTRUCTION (S) PTE LTD"
          list3="REPAIR & REDECORATIONS WORK AT HDB INDUSTRIAL COMPLEX KB-1"
          list4="MANUAL EXCAVATION WITH LEAN CONCRETE"
          list5="MAR-17 -  MAY-17"
        />
        <ProjectCard
          header="FABRICATE AND INSTALL MEZZANINE FLOOR AT PCS"
          image={project3}
          list1="PETROCHEMICAL CORPORATION OF SINGAPORE (PRIVATE) LIMITED"
          list2="MEISEI INTERNATIONAL PTE LTD"
          list3="MAINTENANCE"
          list4="FABRICATE AND INSTALL MEZZANINE FLOOR"
          list5="NOV-16 - DEC-16"
        />
        <ProjectCard
          header="PAINTING WORKS AT DENKA WAREHOUSE"
          image={project4}
          list1=""
          list2=""
          list3=""
          list4=""
          list5=""
        />
        <ProjectCard
          header="PAINTING WORKS AT DENKA PLANT 2"
          image={dummy}
          list1=""
          list2=""
          list3=""
          list4=""
          list5=""
        />
        <ProjectCard
          header="CIVIL WORKS AT PCS/TPC"
          image={dummy}
          list1=""
          list2=""
          list3=""
          list4=""
          list5=""
        />
        <ProjectCard
          header="CIVIL WORKS AT SHELL SERAYA"
          image={dummy}
          list1=""
          list2=""
          list3=""
          list4=""
          list5=""
        />
        <ProjectCard
          header="CIVIL WORKS AT 3SB PIPE RACK FOUNDATION"
          image={dummy}
          list1=""
          list2=""
          list3=""
          list4=""
          list5=""
        /> */}
        <section className="section section-light2">
          <ScrollAnimation animateIn="slideInRight" offset={50}>
            <h2 className="my-header">OTHER SANYO'S PROJECTS</h2>
          </ScrollAnimation>
        </section>
        <div className="pimg" style={{ backgroundImage: "url(" + projectBk + ")" }}>
          <Container className="moreProjectTable">
            <Card>
              <Card.Body>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>CLIENT  /OWNER</th>
                      <th>MAIN CONTRACTOR</th>
                      <th>DESCRIPTION OF PROJECT</th>
                      <th>SCOPE OF WORK</th>
                      <th>DURATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>SHELL EASTERN PETROLEUM PTE LTD (SERAYA)</td>
                      <td>RADIANT I&E ENGINEERING PTD LTD</td>
                      <td>MAINTENANCE & PROJECT</td>
                      <td>CIVIL WORKS</td>
                      <td>DEC 18 - ON GOING</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>ROBINSON TOWER</td>
                      <td>ALSTERN TECHNOLOGIES SINGAPORE PTE LTD</td>
                      <td>MAINTENANCE</td>
                      <td>CHILLER PIPE PU INSULATION REPLACEMENT</td>
                      <td>FEB-18 - AUG-18</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>10 RAFFLES CITY SWISS HOTEL</td>
                      <td>NEW TECH CONSTRUCTION & ENGINEERING PTE LTD</td>
                      <td>HOTEL UPGRADING PROJECT</td>
                      <td>PROVISION OF SKILLED WORKERS FOR INSULATION WORKS</td>
                      <td>JUN-17 JUL-17</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

          </Container>

        </div>
        
        <section className="section section-light2">
          <ScrollAnimation animateIn="slideInRight" offset={50}>
            <h2 className="my-header">BIZSAFE CERTIFICATE</h2>
          </ScrollAnimation>
        </section>
        <div className="pimg biZcert" style={{ backgroundImage: "url(" +certBG  + ")" }}></div>

        <div style={{ opacity }} className="arrow bounce" />
      </div>
    );
  }
}

export default Project;