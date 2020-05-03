import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './Footer';

export default class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                    {this.props.children}
                <Footer />
            </React.Fragment>
        );
    } 

}