import React from "react";
//eventos

//youtube
class Contador extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            contador:0 
        }

        this.sumar  = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e){
        this.setState({
            contador: this.state.contador + 1 
        });
    }

    restar(e){
        this.setState({
            contador: this.state.contador - 1 
        });
    }


    render(){
        return<>
            <h2>Constador: <span>{this.state.contador}</span> </h2>
            <button onClick={this.sumar}>sumar</button>
            <button onClick={this.restar}>restar</button>
        </>
    }
}

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

export {Evento, Contador}

//react envuele a todos los eventos con SyntecticCaseEvent que es para dar soprtes a todos los navegadores
// para ingrizar al evento natico se usa event.nativeEvent