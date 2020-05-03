import React, { Component } from 'react';
import { Form, Table } from 'tabler-react';
import TableHeader from './../components/TableHeader';


export default class SuperInput extends Component {

    render() {
        let component = <div></div>;
        const displayName = this.props.field.displayName ? this.props.field.displayName : this.props.field.name;
        if (this.props.field.type === 'text') {
            component = (
                <Form.Group label={displayName}>
                    <Form.Input
                        disabled
                        value={this.props.field.value}
                    />
                </Form.Group>
            );
        } else if (this.props.field.type === "textarea") {
            component = (
                <Form.Group label={displayName}>
                    <Form.Textarea
                        disabled
                        defaultValue={this.props.field.value}
                        rows={6}
                    />
                </Form.Group>
            );
        } else if (this.props.field.type === "options") {
            let radios = [];
            this.props.field.options.map((op, i) => {
                if (i === this.props.field.value) {
                    radios.push(
                        <Form.Radio
                            disabled
                            isInline
                            checked
                            label={op}
                        />
                    );
                } else {
                    radios.push(
                        <Form.Radio
                            disabled
                            isInline
                            label={op}
                        />
                    );
                } 
            });
            component = (
                <Form.Group label={displayName}>
                    {
                        radios.map((r, i) => 
                            r
                        )
                    }
                </Form.Group>
            );
        } else if (this.props.field.type === "table") {
            component = (
                <Table>
                    <TableHeader cols={this.props.field.headerColumns} />
                    <Table.Body>
                        {
                            this.props.field.rowColumns.map((rc, i) => 
                                <Table.Row id={`${this.props.field.name}-${i}`}>
                                    {
                                        rc.map((col, ic) => 
                                            <Table.Col id={`${this.props.field.name}-${i}-${ic}`}>
                                                {col}
                                            </Table.Col>
                                        )
                                    }
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
            );
        }
        return component;
    }

}

SuperInput.defaultProps = {
    field: {
        type: "text",
        value: ""
    }
}