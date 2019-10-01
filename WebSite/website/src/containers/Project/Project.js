import React, { Component } from 'react';
import './Project.css';
import project1 from '../../assets/Images/project/1.jpg';
import ProjectCard from '../../components/UI/ProjectCard/projectCard';

class Project extends Component {

  render() {
    return (

      <div className="projectMain">
        <div className="pimg" style={{ backgroundImage: "url(" + project1 + ")" }}>
          <div className="ptext">
            <span className="borders">
              SANYO'S PROJECTS
            </span>
          </div>
        </div>
        <ProjectCard
          header="THYE HUA KWAN HOSPITAL"
        />
        <ProjectCard
          header="HDB INDUSTRIAL COMPLEX KB 1"
        />
        <ProjectCard
          header="FABRICATE AND INSTALL MEZZANINE FLOOR AT PCS"
        />
      </div>
    );
  }
}

export default Project;