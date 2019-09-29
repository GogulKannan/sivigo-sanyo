import React from 'react';


import NavigationItems from '../NavigationItems/NavigationItems';
import   './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/_Aux/_Aux';
let count = 0;

const sideDrawer = ( props ) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    if(count === 0){
        attachedClasses = ["SideDrawer", "initial-close"];
        count++;
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                
                <nav>
                    <NavigationItems clicked={props.closed}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;