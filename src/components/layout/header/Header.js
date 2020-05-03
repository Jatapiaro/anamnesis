import React, { Component } from 'react';
import TopHeader from './TopHeader';
import NavMenu from './NavMenu';
import NavLink from './../../../models/NavLink';

export default class Header extends Component {

    state = {
        isCollapsedMenuOpen: false
    }

    constructor(props) {
        super(props);
        this.navlinks = [
            new NavLink('Pacientes', 'fa fa-user', '/patients', true),
        ];
    }

    toggleCollapsedMenu = () => {
        this.setState((prevState) => {
            return {
                isCollapsedMenuOpen: !prevState.isCollapsedMenuOpen
            }
        })
    }

    render() {

        return (
            <React.Fragment>
                <TopHeader
                    toggleCollapsedMenu={this.toggleCollapsedMenu} />
                <NavMenu
                    navlinks={this.navlinks}
                    isCollapsedMenuOpen={this.state.isCollapsedMenuOpen} />
            </React.Fragment>
        );

    }

}