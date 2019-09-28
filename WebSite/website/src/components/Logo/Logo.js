import React from 'react';

import logoImage from '../../assets/Images/logo.png';
import   './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={logoImage} alt="logo" />
    </div>
);

export default logo;