import React from 'react';


import NavigationItems from '../NavigationItems/NavigationItems';
import   './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/_Aux/_Aux';

const sideDrawer = ( props ) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;