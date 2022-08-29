import React from "react";

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}

export default class AjaxApis extends React.Component {
    state = {
        pokemons: [],
    };

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                data.results.forEach((el) => {
                    // console.log(el)
                    fetch(el.url)
                        .then((res) => res.json())
                        .then((data1) => {
                            // console.log(data1);
                            let pokemon = {
                                id: data1.id,
                                name: data1.name,
                                avatar: data1.sprites.front_default,
                            };

                            let pokemons = [...this.state.pokemons, pokemon];
                            console.log(pokemons); 
                            this.setState({ pokemons });
                            // console.log(this.state.pokemons)
                        });
                });
            });
    }

    render() {
        return (
            <>
                <h2>Peticiones Asíncronas en Componentes de Clase</h2>
                {this.state.pokemons.length === 0 ? (
                    <h3>Cargando...</h3>
                ) : (
                    this.state.pokemons.map((el) => (
                        <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                    ))
                )}
            </>
        );
    }
}