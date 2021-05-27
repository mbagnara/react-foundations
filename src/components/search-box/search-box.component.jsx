import React from 'react';
import './search-box.styles.css';

// A Functional component gets some props and returns html
export const SearchBox = ({placeholder, handleChange}) => (   
    <input 
    className="search"
    type="search" 
    placeholder={placeholder}
    onChange={handleChange}
    />
)

