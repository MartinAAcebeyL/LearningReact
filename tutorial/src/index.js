import React from 'react';
import ReactDOM from 'react-dom/client';

import CallElements from './components/elementos';
import {HiComponent, DocumentationComponentApp, Comment, ClassComponent} from './components/componentes';
import Prop1 from './components/propiedades';
import { Clock, ShowNames } from './components/estadoCicloVida';
import { Evento, Contador } from './components/eventos';
import ComponenteCondicionalDC, {ComponenteCondicionalYT} from './components/RenderizadoCondicional';
import { EmailImput, ReservationForm } from './components/Formularios';
import { Padre } from './components/ComunicacionComponentes';
import { Calculator } from './components/LevantandoEstado';
import AjaxApis from './components/AjaxApi'; 
import CicloVida from './components/estadoCicloVida';
//tienda
import Card from './components/store/Card';
import NavShop from './components/store/Nav'; 

import { comment } from './hepls/objs';
import './index.css';

// usaremos jsx

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component{
    render(){
        return(
            <>
                <h2 style={{textAlign: 'center'}}><u><i>Elementos React</i></u></h2>
                    <CallElements/>
                <hr/>
                <h2 style={{textAlign:'center'}}><b><u>Componentes</u></b></h2>
                    <DocumentationComponentApp/>
                <h2 style={{textAlign:'center'}}><b><u>Desectruracion de Componentes</u></b></h2>
                    <Comment
                        text={comment.text}
                        author={comment.author} />
                <h2 style={{textAlign:'center'}}><b><u>Componente de clase</u></b></h2>
                    <ClassComponent/>
                <hr/>
                <h2 style={{textAlign:'center'}}><b><u>Estados y ciclos de vida</u></b></h2>
                    <Clock/>
                    <ShowNames/>
                <hr/>
                <h2 style={{textAlign:'center'}}><b><u>Eventos</u></b></h2>
                    <Evento/>
                <hr/>
                <h2 style={{textAlign:'center'}}><b><u>Renderizado Condicional</u></b></h2>
                    <ComponenteCondicionalDC/>
                <hr/>
                <h2 style={{ textAlign: "center" }}>Formularios</h2>
                    <EmailImput />
                    <ReservationForm/>
                <hr />
                <h2 style={{ textAlign: "center" }}>Levantando Estado</h2>
                    <Calculator/>
                <hr/>

            </>
        );
    }
}

root.render(<App/>);

// right
const rootYT = ReactDOM.createRoot(document.getElementById('youtube'));
class AppYoutube extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
        <div>
            <h2 style={{textAlign:"center"}}>propiedades/props</h2>
            <Prop1
                cadena="atributo cadena"
                numero={5}
                flotante={5.5}
                booleano={true}
                array={["i","am","a","array"]}
                objeto={{nombre:"martin",apellido:"acebey",edad:21}}
                funcion = {x => x*2}
                elementoReact={<p>soy un elemento <b>React</b></p>}
                componenteReact = {<HiComponent name="MArtin andres"/>}
            />
            <hr/>
            <h2 style={{textAlign:"center"}}>componentes Condicionales</h2>
                <ComponenteCondicionalYT/>
            <hr/>
            <h2 style={{textAlign:"center"}}>Eventos</h2>
                <Contador/>
            <hr/>
            <h2 style={{ textAlign: "center" }}>Comunicacion entre Componentes</h2>
                <Padre/>
            <hr/>
            <h2 style={{ textAlign: "center" }}>Ciclo de vida</h2>
                <CicloVida></CicloVida>
            <hr />
            <h2 style={{ textAlign: "center" }}>Ajax apis</h2>
                <AjaxApis/>
            <hr/>
        </div>
        )
        
    }
}

rootYT.render(<AppYoutube/>)

//tienda
const tienda = ReactDOM.createRoot(document.getElementById('tienda'));

function AppShop() {
    return (<>
        <NavShop links={["home", "shop", "contact", "our team"]} />
        <Card/>
    </>);
}

tienda.render(<AppShop/>)