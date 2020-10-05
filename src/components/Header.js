import React from 'react';
import { Input } from './Input.js';
import '../App.css';
import search from '../assets/search.svg'

export const Header = () => {
    // const [characters, setCharacters] = useState("");

    // const handleSearchCharacters = (e) => {
    //     setCharacters(e.target.value);
    //   };
 
  return (
    <header className="header">
        <section className="max-width">
            <p className="logo">MARVEL</p>
            <label className="label-header">
            <Input 
                className="input-header" 
                placeholder="Pesquise personagens..."
                // onBlur={handleSearchCharacters}
            />
            <img className="search-icon" alt="search" src={search}></img>
            </label>
        </section>
    </header>
  );
}