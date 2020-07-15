import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

function toCelsius(f) {
    return (f-32)*5/9;
}

function toFahrenheit(c) {
    return (c*9/5)+32;
}

function tryCovert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'c',
            temperature: ''
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleCelsiusChange(temperature) {
        this.setState({
            scale:'c', temperature
        });
    }
    handleFahrenheitChange(temperature) {
        this.setState({
            scale:'f', temperature
        });
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'c'? temperature : tryCovert(temperature, toCelsius);
        const fahrenheit = scale === 'f'? temperature : tryCovert(temperature, toFahrenheit);

        return (
            <div>
                <TemperatureInput   scale='c'
                                    temperature={celsius}
                                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput   scale='f' 
                                    temperature={fahrenheit}
                                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsius={celsius} />
            </div>
        );
    }
}

export default Calculator;