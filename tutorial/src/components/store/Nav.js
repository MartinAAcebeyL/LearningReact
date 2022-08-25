import React from "react"

export default function NavShop(props){
    return <nav>
        <ul>
            {
                props.links.map((element, index) => <li key={index}> {element} </li>)
            }
        </ul>
    </nav>
}