import React, { Component } from 'react';
import { Card, Dropdown, Form, GalleryCard, Header, Table, Tab } from "tabler-react";

// Components
import CardHeader from './../components/CardHeader';
import SuperInput from './../components/SuperInput';

import data from './../mcGill.json';
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
                <Header.H4>Cuestionario del dolor de McGill</Header.H4>
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
                                            <div className={`col-sm-12 col-md-${12 / chunk.length} col-lg-${12 / chunk.length} col-xl-${12/chunk.length}`}>
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
                        title={"Analgésicos"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(data.analgesicos, 4).map((chunk, i) =>
                                <div className="row" key={`anal-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className={`col-sm-12 col-md-${12 / chunk.length} col-lg-${12 / chunk.length} col-xl-${12 / chunk.length}`}>
                                                <SuperInput field={c} key={`anal-field-${i}-${ci}`} />
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
                        title={"Localización del dolor"}
                    />
                    <Card.Body>
                        <GalleryCard>
                            <GalleryCard.Image src={pnuemo} />
                            <GalleryCard.Footer>
                                <GalleryCard.Details
                                    fullName="Señalar en el gráfico adjunto la zona donde se localiza el dolor."
                                    dateString="Si el dolor es externo: (E), Si es interno: (I), Si es ambos: (EI)."
                                />
                            </GalleryCard.Footer>
                        </GalleryCard>
                    </Card.Body>
                </Card>
                <Card>
                    <CardHeader
                        title={"Descripción del dolor"}
                    />
                    <Card.Body>
                        <p>Escoger una sola palabra de cada apartado que mejor defina el tipo de dolor que se padece en este momento:</p>
                        {
                            this.getChunksOf(data.parteDos, 1).map((chunk, i) =>
                                <div className="row" key={`parte-dos-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className={`col-sm-12 col-md-${12 / chunk.length} col-lg-${12 / chunk.length} col-xl-${12 / chunk.length}`}>
                                                <SuperInput field={c} key={`parte-dos-field-${i}-${ci}`} />
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
                        title={"Cambios que experimenta el dolor"}
                    />
                    <Card.Body>
                        <p>Escoger la palabra o las palabras que describan el modelo o patrón que sigue el dolor:</p>
                        {
                            this.getChunksOf(data.parteTres, 1).map((chunk, i) =>
                                <div className="row" key={`parte-tres-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className={`col-sm-12 col-md-${12 / chunk.length} col-lg-${12 / chunk.length} col-xl-${12 / chunk.length}`}>
                                                <SuperInput field={c} key={`parte-tres-field-${i}-${ci}`} />
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
                        title={"Intensidad del dolor (PPI)"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(data.parteCuatro, 1).map((chunk, i) =>
                                <div className="row" key={`parte-cuatro-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className={`col-sm-12 col-md-${12 / chunk.length} col-lg-${12 / chunk.length} col-xl-${12 / chunk.length}`}>
                                                <SuperInput field={c} key={`parte-cuatro-field-${i}-${ci}`} />
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
                        title={"Sistema de puntuación"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(data.puntuacion, 2).map((chunk, i) =>
                                <div className="row" key={`parte-puntuacion-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className={`col-sm-12 col-md-${12 / chunk.length} col-lg-${12 / chunk.length} col-xl-${12 / chunk.length}`}>
                                                <SuperInput field={c} key={`parte-puntuacion-field-${i}-${ci}`} />
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }

}