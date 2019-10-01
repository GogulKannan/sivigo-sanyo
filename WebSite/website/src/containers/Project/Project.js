import React, { Component } from 'react';
import './Project.css';
import project1 from '../../assets/Images/project/1.jpg';

class Project extends Component {

  render() {
    return (

      <div className="projectMain">
        <div className="pimg" style={{ backgroundImage: "url(" + project1 + ")" }}>
          <div className="about-heading">
            <span className="borders">
              SANYO'S PROJECTS
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;