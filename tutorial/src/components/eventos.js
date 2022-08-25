import React from "react";

//eventos


//documentacion
class Evento extends React.Component{
    constructor(props){
        super(props);
        this.state = {estado1:"",
                    encendido:false
        }

        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.switchF = this.switchF.bind(this);
    }
    //on | off 1er evento
    switchF(){
        // this.setState(prevState => ({
        //     encendido: !prevState.encendido
        //   }));
        this.setState({encendido: !this.state.encendido})
    }

    //para evitar el comportamiento predeterminado, que retorne false
    evitarComportamientoPredeterminado(e){
        e.preventDefault();
        console.log('You clicked submit.');
    }

    render(){
        return (
            <>
            <form onSubmit={this.evitarComportamientoPredeterminado}>
                <button type="submit">Submit</button>
                
            </form>
            <button onClick={this.switchF}>
                {this.state.encendido ? 'ON' : 'OFF'}
            </button>
            </>
          );
    }

}

export {Evento}