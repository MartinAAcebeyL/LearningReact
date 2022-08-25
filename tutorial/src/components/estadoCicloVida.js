import React  from "react";
// estados y ciclos de vida
//youtube



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