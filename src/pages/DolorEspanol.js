import React, { Component } from 'react';
import { Card, Dropdown, Form, GalleryCard, Header, Table, Tab } from "tabler-react";

// Components
import CardHeader from './../components/CardHeader';
import SuperInput from './../components/SuperInput';

import data from './../dolorEspanol.json';
import pnuemo from './../images/pneumo.png';

export default class McGill extends Component {

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
                <Header.H4>CUESTIONARIO DEL DOLOR EN ESPAÑOL (CDE)</Header.H4>
                <Card>
                    <CardHeader
                        title={"Datos Generales"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(data.datosGenerales, 4).map((chunk, i) =>
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
                    </Card.Body>
                </Card>
                <Card>
                    <CardHeader
                        title={"Prueba"}
                    />
                    <Card.Body>
                        <p>Instrucciones: Si alguna palabra de las 14 categorías describe su dolor, márquela con una (X).</p>
                        {
                            this.getChunksOf(data.prueba, 1).map((chunk, i) =>
                                <div className="row" key={`prueba-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className={`col-sm-12 col-md-${12 / chunk.length} col-lg-${12 / chunk.length} col-xl-${12 / chunk.length}`}>
                                                <SuperInput field={c} key={`prueba-field-${i}-${ci}`} />
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                        <div className="row">
                            <div className={`col-sm-12 col-md-12 col-lg-12 col-xl-12`}>
                                <SuperInput field={data.intensidad} />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <CardHeader
                        title={"ESCALA VISUAL ANALOGICA"}
                    />
                    <Card.Body>
                        <GalleryCard>
                            <GalleryCard.Image src={pnuemo} />
                            <GalleryCard.Footer>
                                <GalleryCard.Details
                                    fullName="Marque con una (x)sobre la línea cuánto dolor siente actualmente:"
                                    dateString="Sin dolor: __________________  Dolor insoportable: __________________"
                                />
                            </GalleryCard.Footer>
                        </GalleryCard>
                    </Card.Body>
                </Card>                
            </React.Fragment>
        );
    }

}