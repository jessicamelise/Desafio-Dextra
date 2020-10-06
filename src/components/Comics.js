import React, { useState, useEffect } from 'react';
import '../App.css';
import { Header } from "../components/Header";
import { loadComicsApi } from "../loadApis/api.js";
import { Button } from "./Button.js";

export const Comics = () => {
  const [comics, setComics] = useState([]);

  // const handleClick = (path) => {
  //   history.push(path);
  // };

  useEffect(() => {
    loadComicsApi(16).then((list) => {
      setComics(list.data.results);
    });
  }, []);

  return (
    <>
      <Header />
      <section className="main-comics">
        <div className="max-width-main">
          {comics.map((eachComic, index) => (
            <div className="each-comic" key={index}>
              <img
                alt={eachComic.title}
                src={`${eachComic.thumbnail.path}.${eachComic.thumbnail.extension}`}
                className="thumbnails"
              >
              </img>
              <p>{eachComic.id}</p>
              <p>Title: {eachComic.title}</p>
              {eachComic.creators.items.length === 0 ?
                <p>Creators: Não Encontrado</p> :
                <p>Creators:
                  {eachComic.creators.items.map((creator, index) => <li className="list-creator" key={index}>{creator.name}</li>)}
                </p>
              }
            </div>
          ))}
        </div>
        <div className="max-width-button">
          <Button
            className="button-comics"
            name="Previous"
            // onClick={() => handleClick(parameter)}
          />
          <Button
            className="button-comics"
            name="Next"
          // onClick={() => handleClick(parameter)}
          />
        </div>
      </section>
    </>
  );
}
