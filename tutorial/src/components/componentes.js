import React from "react";

/*
componentes:
    son funciones que reciben accesorios y devuelven elementos React
    permite dividir la interfas en pequenas partes e independientes
*/

//youtube
function HiComponent(props) {
    return (
        <h2>hola <span>{props.name}</span> </h2>
    );
}

//documentos
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

function DocumentationComponentApp(){
    return (
        <div>
            <DescriptionComponent name="martin" game="soccer" music="rock" videoGame="Fornite"/>
            <DescriptionComponent name="andres" game="raquet" music="argentic rock" videoGame="Purge"/>
            <DescriptionComponent name="paul" game="volley" music="Punk" videoGame="She"/>
        </div>
    );
}

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
class ClassComponent extends React.Component{
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

export {HiComponent, DescriptionComponent, DocumentationComponentApp, Comment, ClassComponent};