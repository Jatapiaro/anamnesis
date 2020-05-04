import React, { Component } from 'react';
import { Card, Dropdown, GalleryCard, Header, Table, Tab } from "tabler-react";

// Components
import CardHeader from './../../components/CardHeader';
import SuperInput from './../../components/SuperInput';

import data from '../../data.json';

export default class Anamnesis extends Component {

    state = {
        patient: null
    }

    componentWillMount() {
        let id = this.props.match.params.id;
        this.setState({
            patient: data[id]
        });
    }

    getChunksOf = (array, pieces) => {
        let results = [];
        while (array.length) {
            results.push(array.splice(0, pieces))
        }
        console.log(results);
        return results;
    }

    render() {
        return (
            <React.Fragment>
                <Header.H4>Anamnesis</Header.H4>
                <Card>
                    <CardHeader
                        title={"Datos Generales"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.generalData, 3).map((chunk, i) =>
                                <div className="row" key={`general-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`general-field-${i}-${ci}`} />
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </Card.Body>
                    <Card.Footer>
                        <p><b>Fecha:</b> 2/05/2020</p>
                        <p><b>Hora:</b> 9:34 am </p>
                    </Card.Footer>
                </Card>
                <Card>
                    <CardHeader
                        title={"Aspecto a la primera vista"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.aspectoPrimeraVista, 4).map((chunk, i) =>
                                <div className="row" key={`primera-vista-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-12 col-md-3 col-lg-4 col-xl-4">
                                                <SuperInput field={c} key={`primera-vista-field-${i}-${ci}`} />
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
                        title={"Historia sobre salud en general / Antecedentes patológicos generales"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.historiaSaludGeneral, 3).map((chunk, i) =>
                                <div className="row" key={`primera-vista-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`primera-vista-field-${i}-${ci}`} />
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
                        title={"Prácticas de salud recreativa, religiosa, nutricional "}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.actividades, 2).map((chunk, i) =>
                                <div className="row" key={`primera-vista-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-12 col-md-2 col-lg-4 col-xl-4">
                                                <SuperInput field={c} key={`primera-vista-field-${i}-${ci}`} />
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
                        title={"Profesionales de la salud utilizados"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.profesionalesSalud, 4).map((chunk, i) =>
                                <div className="row" key={`profesionales-salud-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-12 col-md-2 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`profesionales-salud-field-${i}-${ci}`} />
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
                        title={"Alergías"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.alergias, 3).map((chunk, i) =>
                                <div className="row" key={`alergias-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`alergias-field-${i}-${ci}`} />
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
                        title={"Medicaciones"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.medicaciones, 4).map((chunk, i) =>
                                <div className="row" key={`medicaciones-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`medicaciones-field-${i}-${ci}`} />
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
                        title={"Datos básicos específicos de salud-enfermedad valoración psicosocial"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.psicosocial, 4).map((chunk, i) =>
                                <div className="row" key={`psicosocial-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                <SuperInput field={c} key={`psicosocial-field-${i}-${ci}`} />
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