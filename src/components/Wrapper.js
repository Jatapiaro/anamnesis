import React, { Component } from 'react';
import Layout from './layout/Layout';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './../pages/Home';

import Patients from '../pages/patients/Index';
import History from '../pages/patients/History';

export default class Wrapper extends Component {

    render() {
        return (
            <Layout>
                <BrowserRouter>
                    <div className="container content">
                        <Switch>

                            <Route path="/"
                                render={(props) =>
                                    <Home
                                        {...props}
                                    />
                                }
                            exact={true} />

                            <Route path="/patients"
                                render={(props) =>
                                    <Patients
                                        {...props}
                                    />
                                }
                            exact={true} />

                            <Route path="/patients/:id/history"
                                render={(props) =>
                                    <History
                                        {...props}
                                    />
                                }
                            exact={true} />

                        </Switch>
                    </div>
                </BrowserRouter>
                <ToastContainer />
            </Layout>
        );
    }

}