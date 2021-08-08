import React from "react";
import Reloj from "./Reloj";

export default class DateComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount(){
        this.temporizadorId = setInterval(()=>{ this.tick()} ,1000)
    }
    componentWillUnmount(){
        clearInterval(this.temporizadorId);
    }
    tick(){
        this.setState ({ date: new Date()});
    }
    render(){
        return(
            <Reloj date = {this.state.date}/>
        );
    }
}