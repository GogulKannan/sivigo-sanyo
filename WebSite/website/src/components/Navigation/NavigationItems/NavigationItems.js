import React from 'react';

import   './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems" onClick={props.clicked}>
        <NavigationItem link="/" exact>HOME</NavigationItem>
        <NavigationItem link="/about">ABOUT</NavigationItem>
        <NavigationItem link="/project">PROJECT</NavigationItem>
        <NavigationItem link="/contact">CONTACT US</NavigationItem>
    </ul>
);

export default navigationItems;