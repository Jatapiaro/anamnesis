import React, { Component } from 'react';
import { Card, Dropdown, Table } from "tabler-react";

// Components
import CardHeader from './../../components/CardHeader';
import TableHeader from './../../components/TableHeader';

import { toast } from 'react-toastify';

import data from '../../data.json';

export default class Books extends Component {

    state = {
        patients: data
    };

    constructor(props) {
        super(props);
        let generalDataSample = this.state.patients[0].generalData;
        this.columns = [];
        generalDataSample.map((v) => {
            let dataName = v.displayName? v.displayName : v.name;
            this.columns.push(dataName);
        });
        this.columns.push("Acciones");
    }

    /**
     * Executes before the page is loaded
     */
    componentWillMount() {

    }

    /**
     * Renders the page content
     */
    render() {
        return (
            <div className="container">
                <Card>
                    <CardHeader
                        title={"Pacientes"}
                    />
                    <Card.Body>
                        <Table>
                            <TableHeader cols={this.columns} />
                            <Table.Body>
                                {
                                    this.state.patients.map((p, i) =>
                                        <Table.Row id={`${p.register}-i`}>
                                            {
                                                <React.Fragment>
                                                    {
                                                        p.generalData.map((gd, pi) =>
                                                            <Table.Col id={`${p.register}-${i}-${pi}`}>
                                                                {gd.name === "sex" ? gd.options[gd.value] : gd.value}
                                                            </Table.Col>
                                                        )
                                                    }
                                                    <Table.Col>
                                                        <Dropdown
                                                            type="button"
                                                            color="primary"
                                                            triggerContent="Acciones"
                                                            items={[
                                                                <Dropdown.Item
                                                                    key={1}
                                                                    onClick={() => this.props.history.push(`/patients/${i}/history`)}>
                                                                    <i className="fa fa-eye" />
                                                                    <span> Ver Historia Clínica</span>
                                                                </Dropdown.Item>,
                                                                <Dropdown.Item
                                                                    key={2}
                                                                    onClick={() => this.props.history.push(`/patients/${i}/anamnesis`)}>
                                                                    <i className="fe fe-eye" />
                                                                    <span> Anamnesis</span>
                                                                </Dropdown.Item>
                                                            ]}
                                                        />
                                                    </Table.Col>
                                                </React.Fragment>
                                            }
                                        </Table.Row>
                                    )
                                }
                            </Table.Body>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}