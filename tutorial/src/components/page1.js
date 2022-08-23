import React from "react";
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function titulo() {
    return (
        <h2>hola</h2>
    );
}

root.render(titulo());