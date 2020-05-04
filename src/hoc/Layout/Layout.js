import React, { Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar';

import classes from './Layout.css';
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler =props => {

        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler =props => {
        this.setState({showSideDrawer: true});
    }

    render(){
        return(
            <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
            open = {this.state.showSideDrawer}
            closed = {this.sideDrawerClosedHandler}/>
            <main className = {classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
};

export default Layout;