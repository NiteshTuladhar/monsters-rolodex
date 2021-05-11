import React from 'react';
import './card.styles.css';

export const Card = (props) =>(
    <div className='card-container'>
        <img alt="monster" src={'https://robohash.org/${props.monster.id}?set=set2&size=120x120'} />
        <h4>{props.monster.name}</h4>
        <h6>{props.monster.email}</h6>
    </div>
);
