import React  from "react";
// estados y ciclos de vida
//youtube
class Reloj extends React.Component {
     componentWillUnmount() {
        console.log(3, "El componente ha sido eliminado del DOM");
    }

    render() {
        return <h3>{this.props.hora}</h3>;
    }
}

export default class CicloVida extends React.Component {
    constructor(props) {
        super(props);
        // console.log(0, "El componente se inicializa, aún NO está en el DOM");

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false,
        };

        this.temporizador = null;
    }

    componentDidMount() {
        // console.log(1, "El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(2, "El estado o las props del componente han cambiado");
        // console.log(prevProps);
        // console.log(prevState);
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            });
        }, 1000);
    };

    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true,
        });
    };

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false,
        });
    };

    render() {
        // console.log(4, "El componente se dibuja (o redibuja por algun cambio) en el DOM");
        return (
            <>
                <h2>Ciclo de Vida de los Componentes de Clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.detener}>detener</button>
            </>
        );
    }
}


//documentacion
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()}
    }

    //metodo, se ejucuta una vez se renderize el componente
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(), 1000
        );
    }

    //se elimina 
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //metodo del reloj
    tick() {
        this.setState({
          date: new Date()
        });
    }

    render(){
        return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class ShowNames extends React.Component{
    constructor(props){
        super(props);
        this.names = ['martin', 'andres'];
        this.surname = ['acebey', 'laime'];
        this.indice = 0;
        this.state = {nombres: this.names[this.indice],
                    apellidos: this.surname[this.indice]
                }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(), 1000
        );
    }

    //se elimina 
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.indice++;
        if(this.indice >= this.names.length)
            this.indice = 0;
        
        this.setState({
            nombres : this.names[this.indice],
            apellidos : this.surname[this.indice]
        });
    }

    render(){
        return <h2>Hola {this.state.nombres} - {this.state.apellidos} un gusto</h2>
    }
}

export {Clock, ShowNames}