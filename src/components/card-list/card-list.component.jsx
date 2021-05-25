import React from 'react';
import './card-list.styles.css';

// Card List Component Using JS Arrow Function
export const CardList = props => {
    return <div className='card-list'>{props.children}</div>
}