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
        } else if (this.props.field.type === "date") {

            component = (
                <Form.Group label={displayName}>
                    <Form.DatePicker
                        disabled
                        defaultDate={new Date("2020-05-20T03:24:46.553Z")}
                        format="mm/dd/yyyy"
                        maxYear={2020}
                        minYear={1897}
                        monthLabels={[
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December'
                        ]}
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
        } else if (this.props.field.type === "options-no-inline") {
            let radios = [];
            this.props.field.options.map((op, i) => {
                if (i === this.props.field.value) {
                    radios.push(
                        <Form.Radio
                            disabled
                            checked
                            label={op}
                        />
                    );
                } else {
                    radios.push(
                        <Form.Radio
                            disabled
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
        } else if (this.props.field.type === "checkbox") {
            let radios = [];
            this.props.field.checkbox.map((op, i) => {
                if (i === this.props.field.value) {
                    radios.push(
                        <Form.Checkbox
                            disabled
                            isInline
                            checked
                            label={op}
                        />
                    );
                } else {
                    radios.push(
                        <Form.Checkbox
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