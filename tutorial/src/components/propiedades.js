import React from "react";
import PropTypes from 'prop-types'; 

export default function Prop1(props) {
    return (
        <>
            <h2>Hi!, i am props</h2>
            <p>{props.porDefecto}</p>
            <hr/>
            <ol>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.flotante}</li>
                <li>{props.booleano?"true":"false"}</li>
                <li>{props.array.join(" ")}</li>
                <li>{props.objeto.nombre+" "+props.objeto.edad}</li>
                <li>{props.funcion(15)}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ol>
        </>
    );
}

//establecer propiedades por defecto
Prop1.defaultProps = {
    porDefecto:"Por defecto"
}

Prop1.propTypes={
    cadena: PropTypes.string.isRequired,
    numero: PropTypes.number
}