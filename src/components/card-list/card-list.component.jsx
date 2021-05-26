import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

{/* Retrieving data off of the props that come from the Apps.js file */}
export const CardList = props => (
    <div className='card-list'>
        {
            props.monsters.map(
                monster=>(
                    <h1 id={monster.id}>{monster.name}</h1>
                )
            )
        }  
    </div>
);



