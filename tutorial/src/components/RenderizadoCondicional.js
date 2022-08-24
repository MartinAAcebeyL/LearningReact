import { render } from "@testing-library/react";
import React  from "react";

// De YouTube
function Login(props) {
    return (
        <button onClick={props.onClick}><h2>{props.msg}</h2></button>
    );
}

function Logout(props) {
    return (
        <button onClick={props.onClick}><h2>{props.msg}</h2></button>
    );
}
//se aplico renderizado condicional y paso de parametros al componentes hijos
export class ComponenteCondicionalYT extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            session:true,
            msgLogin:'estas en login',
            msgLogout:'estas en logout'
        }
    }
    render(){
        return <>
            <hr/>
            <h2>Componente condicional</h2>
            {this.state.session?<Logout msg={this.state.msgLogout} />:<Login msg={this.state.msgLogin}/>}
        </>
    }
}

// De Documentacion

export default class ComponenteCondicionalDC extends React.Component{
    constructor(props){
        super(props);
        this.buttonLogin = this.buttonLogin.bind(this);
        this.buttonLogout = this.buttonLogout.bind(this);
        this.state = {
            session:true
        };
    }

    buttonLogout(){
        this.setState({session:false});
    }

    buttonLogin(){
        this.setState({session:true});
    }

    render(){
        const session = this.state.session;
        let button;
        if(session){
            button = <Logout msg="Documentacion/Logout" onClick={this.buttonLogout} />;
        }else{
            button = <Login msg="Documentacion/Login" onClick={this.buttonLogin}/>;
        }
        return <>
            <h2>Documentacion</h2>
            {button}
        </>
    }

}