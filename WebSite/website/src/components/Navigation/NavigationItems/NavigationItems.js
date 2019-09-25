import React from 'react';

import   './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>HOME</NavigationItem>
        <NavigationItem link="/">ABOUT</NavigationItem>
        <NavigationItem link="/">PROJECT</NavigationItem>
        <NavigationItem link="/">CONTACT US</NavigationItem>
    </ul>
);

export default navigationItems;