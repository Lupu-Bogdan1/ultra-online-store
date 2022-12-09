import React from 'react';
import './SearchBar.css';
import img from '../images/search-icon.jpeg';

const SearchBar = () => (
    
        <div className='container'>
            <form id="form" role="search">
                <input type="text" 
                placeholder="Search for devices"
                aria-label="Search through site content"/>
                <button className='search-form-btn'>
                <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </form>
        </div>
    
);

export default SearchBar;