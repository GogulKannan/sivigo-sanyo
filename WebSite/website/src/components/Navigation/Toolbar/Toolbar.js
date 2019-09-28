import React, { Component } from 'react';

import  './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


class Toolbar extends Component {    

    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
  
        const currentScrollPos = window.pageYOffset;
        let visible = prevScrollpos > currentScrollPos;
    
        if(currentScrollPos < 50){
            visible = true;
        }

        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });

      };

    render () {
        let attachedClasses = ["Toolbar"];
        if (!this.state.visible) {
            attachedClasses = ["Toolbar", "Toolbar-hidden"];
        }
        return (
            <header className={attachedClasses.join(' ')}>
                <DrawerToggle clicked={this.props.drawerToggleClicked} />
                <nav className="DesktopOnly">
                    <NavigationItems />
                </nav>
                <div className="Logo">
                    <Logo />
                </div>
            </header>
        )
    }
}

export default Toolbar;