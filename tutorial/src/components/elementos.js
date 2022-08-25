import { people } from '../hepls/objs';

function people_description() {
    let descrption = [];
    descrption.push(<h2 key={465}><u>Descripcion de people</u></h2>);
    for (const id in people) {
        descrption.push(<div key={id}>
                            <h2>hola{people[id].name}</h2>
                            <p>Age: {people[id].age} sex: {people[id].sex}</p>
                        </div>
                        );
    }
    return descrption;
}

function elementHi(name, only=false){
    if(only){
        return( <>
            <h2><u>Saludo unico</u></h2>
            <p>hola {name} :0</p>   
        </>);
    }        
    return( <>
        <p>hola {name} :0</p>   
    </>);
}

function greetingOldPeople(){
    let element;
    for (const person in people) {
        if(people[person].age > 18){
            element = (
                <>
                    <h2><u>Hi a old people</u></h2>
                    {elementHi(people[person].name)}
                    <span>Age:, {people[person].age}</span>
                </>
            );
        }
    }
    return element;
}

function hiEverybody(){
    let message = "";
    for (const id in people) {
        message += "hi "+people[id].name + " ";
    }
    return <h2><u>Saludos a todos:</u><br/> {message}</h2>
}

let singleElement = (
    <div>
        <h2><u>Single Element</u></h2>
        <h3>Que tal <span>Recuerda que naciste el {2022 - 21}</span> </h3>
        <p>Eres una gran person :) {"no rendir ser disciplinado"}</p>
    </div>
);

let element_hi = elementHi("Lucia", true);
let elementAdult = greetingOldPeople();
let elementHiEveryBody = hiEverybody();
let elementDescription = <div>{people_description()}</div>;

export default function CallElements(){
    return(
        <>
            {elementAdult}
            {singleElement}
            {element_hi}
            {elementHiEveryBody}
            {elementDescription}
        </>
    );
}