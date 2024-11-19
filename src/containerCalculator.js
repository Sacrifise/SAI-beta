import React from "react";
import { useEffect, useState } from "react";

let buffer = "";
class ContainerCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buffer: ' ',
        }
        this.targetFinder = this.targetFinder.bind(this);
        this.clearbuffer = this.clearbuffer.bind(this);
        this.handleCalc = this.handleCalc.bind(this);
    }

    targetFinder(event){
        let val;
        val = event.target.innerText;
        buffer += val;
        this.setState({buffer: buffer});
    }

    clearbuffer(){
        buffer = '';
        this.setState({buffer: ''});
      }

    handleCalc(){
        const result = (eval(buffer));
        this.setState({buffer: result});
        buffer = result;
      }

    render(){
        return(
            <div className = 'container-item calculator'>
            <div className="container-calculate" id='display'>
                <div className="window_container">
                    <div className="blockequal" id="label">{this.state.buffer}</div>
                </div>
                <div className="window_container">
                    <div onClick={this.targetFinder} className="block" id="1">1</div>
                    <div onClick={this.targetFinder} className="block" id="2">2</div>
                    <div onClick={this.targetFinder} className="block" id="3">3</div>
                    <div onClick={this.targetFinder} className="block" id="plus">+</div>
                    <div onClick={this.targetFinder} className="block" id="separate">/</div>
                </div>
                <div className="window_container">
                    <div onClick={this.targetFinder} className="block" id="4">4</div>
                    <div onClick={this.targetFinder} className="block" id="5">5</div>
                    <div onClick={this.targetFinder} className="block" id="6">6</div>
                    <div onClick={this.targetFinder} className="block" id="substruct">-</div>
                    <div onClick={this.targetFinder} className="block" id="multiply">*</div>
                </div>
                <div className="window_container">
                    <div onClick={this.targetFinder} className="block" id="7">7</div>
                    <div onClick={this.targetFinder} className="block" id="8">8</div>
                    <div onClick={this.targetFinder} className="block" id="9">9</div>
                    <div onClick={this.targetFinder} className="block" id="pow">**</div>
                    <div onClick={this.targetFinder} className="block" id="0">0</div>
                </div>
                <div className="window_container">
                    <div onClick={this.handleCalc} className="blockbot" id="butt">=</div>
                    <div onClick={this.clearbuffer} className="blockbot" id="clearbut">C</div>
                </div>
          </div>
        </div>
        )
    }
}





export default ContainerCalculator;