import React, { Component } from 'react';
import { Card, Dropdown, GalleryCard, Header, Table, Tab } from "tabler-react";

// Components
import CardHeader from './../../components/CardHeader';
import SuperInput from './../../components/SuperInput';

import data from '../../data.json';
import cerebro from './../../images/cerebro.png';

export default class History extends Component {

    state =  {
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
                <Header.H4>Historía Clínica</Header.H4>
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
                                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`general-field-${i}-${ci}`}/>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                        <SuperInput field={this.state.patient.motive} />
                    </Card.Body>
                </Card>
                <Card>
                    <CardHeader
                        title={"Antecedentes personales patológicos"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.antescedentesPersonalesPatologicos, 2).map((chunk, i) =>
                                <div className="row" key={`antescedentes-1-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`antescedentes-1-field-${i}-${ci}`} />
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
                        title={"Antecedentes personales no patológicos"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.antescedentesPersonalesNoPatologicos, 2).map((chunk, i) =>
                                <div className="row" key={`antescedentes-2-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`antescedentes-2-field-${i}-${ci}`} />
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
                        title={"Antecedentes familiares"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.antescedentesFamiliares, 2).map((chunk, i) =>
                                <div className="row" key={`antescedentes-3-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`antescedentes-3-field-${i}-${ci}`} />
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
                        title={"Antecedentes gineco-obstétricos "}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.antescedentesGinecoObstetricos, 4).map((chunk, i) =>
                                <div className="row" key={`antescedentes-3-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`antescedentes-3-field-${i}-${ci}`} />
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
                        title={"Exploración física"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.exploracionFisica, 4).map((chunk, i) =>
                                <div className="row" key={`exploracion-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`exploracion-field-${i}-${ci}`} />
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
                        title={"Laboratorio"}
                    />
                    <Card.Body>
                        {
                            this.getChunksOf(this.state.patient.laboratorio, 4).map((chunk, i) =>
                                <div className="row" key={`laboratorio-row-${i}`}>
                                    {
                                        chunk.map((c, ci) =>
                                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                <SuperInput field={c} key={`laboratorio-field-${i}-${ci}`} />
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
                        title={"Estudios de imagen"}
                    />
                    <Card.Body>
                        <GalleryCard>
                            <GalleryCard.Image src={cerebro} />
                            <GalleryCard.Footer>
                                <GalleryCard.Details
                                    fullName="Jorge Ramirez Martinez"
                                    dateString="Resonancia magnética cerebral"
                                />
                            </GalleryCard.Footer>
                        </GalleryCard>
                    </Card.Body>
                </Card>
                <Card>
                    <CardHeader
                        title={"Otros estudios"}
                    />
                    <Card.Body>
                        <SuperInput field={this.state.patient.otrosEstudios}/>
                    </Card.Body>
                    <Card.Footer>
                        <p>* Grupo obstetricio comparado con el Grupo Control</p>
                        <p>† Valores expresados como media ± DE</p>
                    </Card.Footer>
                </Card>
            </React.Fragment>
        );
    }

}