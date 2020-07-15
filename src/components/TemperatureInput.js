import React, { Component } from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onTemperatureChange(event.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter the temperature in {scaleName[scale]}: </legend>
                <input type='text' value={temperature} onChange={this.handleChange} />

            </fieldset>
        )
    }
}

export default TemperatureInput;