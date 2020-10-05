import React, { useState, useEffect } from 'react';
// import '../App.css';
import { loadComicsApi } from "../loadApis/api.js";

export const Comics = () => {
  const [comics, setComics] = useState([]);
 
  useEffect(() => {
    loadComicsApi(1).then((list) => {
      setComics(list.data.results);
    });
  }, []);

  return (
    <div>
      {comics.map((eachComic, index) => (
        <div key={index}>
          <p>{eachComic.id}</p>
          <p>{eachComic.title}</p>
          <img alt={eachComic.title} scr={`${eachComic.thumbnail.path}.${eachComic.thumbnail.extension}`}></img>
          {eachComic.creators.items.length === 0 ? 
            <p>não encontrado</p> : 
            eachComic.creators.items.map((eachCreator, index) => <p key={index}>{eachCreator.name}</p>
          )}
        </div>
      ))}
    </div>
  );
}
