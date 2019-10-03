import React, { Component } from 'react';
import './Project.css';
import projectBk from '../../assets/Images/project/1.jpg';
import ProjectCard from '../../components/UI/ProjectCard/projectCard';
import project1 from '../../assets/Images/project/project1.png';
import project2 from '../../assets/Images/project/project2.png';

class Project extends Component {

  render() {
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
          header="THYE HUA KWAN HOSPITAL"
          image={project1}
          list1="THYE HUA KWAN HOSPITAL"
          list2="JPS ENGINEERING PTE LTD"
          list3="EXTENSION PROJECT"
          list4="INSULATION FOR CHILLER PIPING"
          list5="FEB-17 - JUN-17"
        />
        <ProjectCard
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
          // image={}
          // list1="PETROCHEMICAL CORPORATION OF SINGAPORE (PRIVATE) LIMITED"
          // list2=""
        />
      </div>
    );
  }
}

export default Project;