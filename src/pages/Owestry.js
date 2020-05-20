import React, { Component } from 'react';
import { Card, Dropdown, Form, GalleryCard, Header, Table, Tab } from "tabler-react";

// Components
import CardHeader from './../components/CardHeader';
import SuperInput from './../components/SuperInput';

import data from './../oswestry.json';
import pnuemo from './../images/pneumo.png';

export default class Owestry extends Component {

    componentWillMount() {
    }

    getChunksOf = (array, pieces) => {
        let results = [];
        while (array.length) {
            results.push(array.splice(0, pieces))
        }
        return results;
    }

    render() {
        return (
            <React.Fragment>
                <Header.H4>ÍNDICE DE DISCAPACIDAD DE OSWESTRY (IDO)</Header.H4>
                <Card>
                    <CardHeader
                        title={"Prueba"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(data.oswestry, 1).map((chunk, i) =>
                                <div className="row" key={`general-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className={`col-sm-12 col-md-${12 / chunk.length} col-lg-${12 / chunk.length} col-xl-${12 / chunk.length}`}>
                                                <SuperInput field={c} key={`general-field-${i}-${ci}`} />
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                        <div className="row">
                            <div className={`col-sm-12 col-md-12 col-lg-12 col-xl-12`}>
                                <SuperInput field={data.total} />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }

}