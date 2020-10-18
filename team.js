import React from 'react';

function Team(props) {
    return(
        <li>
            <article>
                <header>
                    <h3>{props.responsibility}</h3>
                </header>
                <figure>
                    <img src={props.photo} alt={props.name} />
                    <figcaption>{props.name}</figcaption>
                </figure>
            </article>
        </li>
    )
}

export default Team