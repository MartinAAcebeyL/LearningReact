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

const root_saludo = ReactDOM.createRoot(document.getElementById('root'));

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

function hi(name) {
    return "hi "+name;
}

function isAdult(){
    for (const person in people) {
        if(people[person].age > 18){
            const element = (
                <h1>
                    {hi(people[person].name)} !
                    <p>como estas:, {people[person].age}</p>
                </h1>
            );
            root_saludo.render(element);

        }
    }
}

// isAdult();

function hiEverybody(){
    let message = "";
    for (const id in people) {
        message += "hi "+people[id].name + "-";
    }
    return <h2>this is: {message}</h2>
}

root_saludo.render(hiEverybody());

/*
componentes:
    son funciones que reciben accesorios y devuelven elementos React
    permite dividir la interfas en pequenas partes e independientes

*/
const root_component = ReactDOM.createRoot(document.getElementById('components'));

function Description_component(props){
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

const element = <Description_component name="martin" game="soccer" music="rock" videoGame="Fornite"/>

function App(){
    return (
        <div>
            <Description_component name="martin" game="soccer" music="rock" videoGame="Fornite"/>
            <Description_component name="andres" game="raquet" music="argentic rock" videoGame="Purge"/>
            <Description_component name="paul" game="volley" music="Punk" videoGame="She"/>
        </div>
    );
}

root_component.render(<App/>)