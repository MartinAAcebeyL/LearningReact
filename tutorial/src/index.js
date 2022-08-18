import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world!</h1>);

/*
JSX
    * no es 1 html ni una cadena
    * Se usa para crear componentes react
    * no es obligatorio su uso pero muchos lo hacen, debido a que puede acoplar  

*/
// usaremos jsx

const root = ReactDOM.createRoot(document.getElementById('root'));

let people = {
    1:{
        name:"martin",
        age: 21,
        sex:'M'
    },
    2:{
        name:"andres",
        age: 5,
        sex:'M'
    },
    3:{
        name:"ale",
        age: 25,
        sex:'M'
    }
}

function people_description() {
    let descrption = [];
    for (const id in people) {
        descrption.push(<div key={id}><h2>hola{people[id].name}</h2>
                        <p>Age: {people[id].age} sex: {people[id].sex}</p></div>);
    }
    return descrption;
}

function elementHi(name){
    return <p>hola {name} :0</p>;
}

function isAdult(){
    let element = "";
    for (const person in people) {
        if(people[person].age > 18){
            element = (
                <div>
                    {elementHi(people[person].name)}!
                    <span>como estas:, {people[person].age}</span>
                </div>
            );
        }
    }
    return element;
}

function hiEverybody(){
    let message = "";
    for (const id in people) {
        message += "hi "+people[id].name + "-";
    }
    return <h2>Saludos a todos: {message}</h2>
}

let singleElement = (
    <div>
        <h3>Que tal <span>Recuerda que naciste el {2022 - 21}</span> </h3>
        <p>Eres una gran person :) {"no rendir"+" ser disciplinado"}</p>
    </div>
);
let element_hi = elementHi("Lucia");
let elementAdult = isAdult();
let elementHiEveryBody = hiEverybody();

function FirstComponent(){
    return(
        <div className='content'>
            {elementAdult}
            {singleElement}
        </div>
    );
}

function SecondComponent(){
    return(
        <div className='content'>
            {element_hi}
            {elementHiEveryBody}
        </div>
    );
}
let elementDescription = <div>{people_description()}</div>;
root.render(elementDescription);

/*
componentes:
    son funciones que reciben accesorios y devuelven elementos React
    permite dividir la interfas en pequenas partes e independientes
*/

const root_component = ReactDOM.createRoot(document.getElementById('root_components'));

function DescriptionComponent(props){
    return (
        <div>
            <p>Hi mi name is {props.name} and i like it</p>
            <ul>
                <li>play {props.game}</li>
                <li>lisent to {props.music}</li>
                <li>video game {props.videoGame}</li>
            </ul>
        </div>
        );
}

const element = <DescriptionComponent name="martin" game="soccer" music="rock" videoGame="Fornite"/>

function App(){
    return (
        <div>
            <DescriptionComponent name="martin" game="soccer" music="rock" videoGame="Fornite"/>
            <DescriptionComponent name="andres" game="raquet" music="argentic rock" videoGame="Purge"/>
            <DescriptionComponent name="paul" game="volley" music="Punk" videoGame="She"/>
        </div>
    );
}

root_component.render(<App/>)


//Se divide un componente en componentes mas pequenos
function CommentExtraccion1(props){
    return(
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function CommentExtraccion2(props){
    return(
        <div className="UserInfo">
          <CommentExtraccion1 user={props.user}/>
          <div className="UserInfo-name">
            {props.user.name}
          </div>
        </div>
    );
}

function Comment(props) {
    return (
      <div className="Comment">
        <CommentExtraccion2 user={props.author}/>
        <div className="Comment-text">
          {props.text}
        </div>
      </div>
    );
}


const comment = {
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

root_component.render(
    <Comment
      text={comment.text}
      author={comment.author} />
);

const root_components_class = ReactDOM.createRoot(document.getElementById('root_components_class')); 
class Nav extends React.Component{
    render(){
    let arr1 = [];
    for (let i=0; i < 3; i++) {
        arr1.push(<li key={i}>menu {i}</li>)
    }
    return (<nav>
                <ul>
                    {arr1}                
                </ul>
            </nav>)
    }
}

root_components_class.render(<Nav/>);
// estados y ciclos de vida

const root_states = ReactDOM.createRoot(document.getElementById('states'));

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

// root_states.render(<Clock/>)

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

root_states.render(<ShowNames/>)

//eventos
const root_eventos = ReactDOM.createRoot(document.getElementById('eventos'));

class Evento extends React.Component{
    constructor(props){
        super(props);
        this.state = {estado1:"",
                    estado2:false
        }
    }
    //para evitar el comportamiento predeterminado, que retorne false
    evitarCP(e){
        e.preventDefault();
        console.log('You clicked submit.');
    }

    render(){
        return (
            <form onSubmit={this.evitarCP}>
              <button type="submit">Submit</button>
            </form>
          );
    }

}

root_eventos.render(<Evento/>)