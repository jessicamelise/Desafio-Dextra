import React, { useEffect, useState } from 'react';
import '../App.css';
import { loadComicIdApi, loadComicCharactersApi } from "../loadApis/api.js";

export const ComicsInformation = (props) => {
  const [infComic, setInfComic] = useState(null);
  const [infCharacters, setInfCharacters] = useState([]);

  useEffect(() => {
    loadComicIdApi(props.path.id).then((comic) => {
      setInfComic(comic.data.results[0]);
    });
  }, []);

  useEffect(() => {
    loadComicCharactersApi(props.path.id).then((characters) => {
      setInfCharacters(characters.data.results);
      console.log(characters.data.results)
    });
  }, []);

  return (
    <div className="max-width-return">
      {infComic &&
        <>
          <section>
            <img className="img-detailed" alt={infComic.title} src={`${infComic.thumbnail.path}.${infComic.thumbnail.extension}`}></img>
          </section>
          <aside className="width-aside">
            <h1 className="font-roboto-title font-size-title">{infComic.title}</h1>
            <h3 className="p-margin font-roboto-title">On Sale Date</h3>
            <h4 className="p-margin font-roboto-body">{new Date(infComic.dates[0].date).toLocaleDateString()}</h4>
            {infComic.creators.items.length === 0 ?
              <p className="p-margin"></p> :
              <>
                <p className="p-margin font-roboto-title font-size-margin">Creators</p>
                <p className="p-margin font-roboto-body font-size-body">
                  {infComic.creators.items.map((creator, index) => <span className="list-creator" key={index}> {creator.name}/ </span>)}
                </p>
              </>
            }
            {infCharacters.length === 0 ?
              <p className="p-margin"></p> :
              <>
                <p className="p-margin font-roboto-title font-size-margin">Characters</p>
                <p className="p-margin font-roboto-body font-size-body">
                  {infCharacters.map((characters, index) => <span className="list-creator" key={index}> {characters.name}/ </span>)}
                </p>
              </>
            }
            {infComic.textObjects.length === 0 ?
              <p className="p-margin"></p> :
              <p className="font-roboto-body">{infComic.textObjects[0].text}</p>
            }
          </aside>
        </>
      }
    </div>
  );
}