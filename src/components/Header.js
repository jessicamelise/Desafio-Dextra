import React, { useState } from 'react';
import { Input } from './Input.js';
import '../App.css';
import search from '../assets/search.svg';
import { useHistory, useLocation } from 'react-router-dom';

export const Header = () => {
  const [getSearch, setGetSearch] = useState('');
  let history = useHistory();
  let location = useLocation();

  const handleChange = (e) => {
    setGetSearch(e.target.value);
  };

  const handleClick = () => {
    history.push(`/search/${getSearch}`);
  };

  return (
    <header className='header'>
      <section className='max-width'>
        <p className='logo'>MARVEL</p>
        {location.pathname.split('/')[1] === 'home' &&
          <label className='label-header'>
            <Input
              className='input-header'
              placeholder='Search for characters'
              onChange={handleChange}
            />
            <img 
              className='search-icon' 
              alt='search' 
              src={search} 
              onClick={handleClick}></img>
          </label> 
        }
      </section>
    </header>
  );
}