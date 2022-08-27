import React from "react";

class Padre extends React.Component {

    state = {
        contador:0
    }

    //nos sirve para usar en la comunicacion hijo padre =>
    sumar = (e) =>{
        this.setState({
            contador:this.state.contador + 1
        });
    }

    render(){

        return(
            <>
                <h2>Soy el padre <span>Constador: {this.state.contador}</span> </h2>
                <h2>Padre a hijo</h2>
                <Hijo msj="Soy el hijo 2" />
                <h2>hijo a Padre</h2>                    
                <Hijo sumar={this.sumar} msj="Soy el hijo 1" />

            </>
        );
    }
}

function Hijo(props) {
    return (
        <>
            <h3>{props.msj}</h3>
            <button onClick={props.sumar}>Sumar</button>
        </>
    );
}

export {Padre};