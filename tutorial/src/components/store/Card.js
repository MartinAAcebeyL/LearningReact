import React from "react";
import { productos } from "../../hepls/objs";



export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()}
    }

    render(){
        let aux = [];
        let a =0;
        for (const element in productos) {
            
            aux.push(
                <div key={a}>
                    <h2> {productos[element].nombre}</h2>
                </div>
            )
            a++;
        }
        return <>{aux}</> 
    }
}