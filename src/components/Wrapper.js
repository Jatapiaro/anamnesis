import React, { Component } from 'react';
import Layout from './layout/Layout';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './../pages/Home';

import Patients from '../pages/patients/Index';
import History from '../pages/patients/History';
import Anamnesis from '../pages/patients/Anamnesis';

import McGill from './../pages/McGill';
import Espanol from './../pages/DolorEspanol';
import Latinen from './../pages/Latinen';
import Oswestry from './../pages/Owestry';

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

                            <Route path="/mc-gill"
                                render={(props) =>
                                    <McGill
                                        {...props}
                                    />
                                }
                                exact={true} />
                            
                            <Route path="/espanol"
                                render={(props) =>
                                    <Espanol
                                        {...props}
                                    />
                                }
                                exact={true} />

                            <Route path="/latinen"
                                render={(props) =>
                                    <Latinen
                                        {...props}
                                    />
                                }
                                exact={true} />

                            <Route path="/oswestry"
                                render={(props) =>
                                    <Oswestry
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

                            <Route path="/patients/:id/anamnesis"
                                render={(props) =>
                                    <Anamnesis
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