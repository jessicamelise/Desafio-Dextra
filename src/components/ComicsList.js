import React, { useState, useEffect } from 'react';
import '../App.css';
import { loadComicsApi } from '../loadApis/api.js';
import { useHistory } from 'react-router-dom';

export const ComicsList = (props) => {
  const [comics, setComics] = useState([]);
  let history = useHistory();

  useEffect(() => {
    loadComicsApi(props.pageNumber).then((list) => {
      setComics(list.data.results);
    });
  }, [props.pageNumber]);

  const handleClickComic = (id) => {
    history.push(`/detailed/${id}`);
  }

  return (
    <div className='max-width-main'>
      {comics.map((eachComic, index) => (
        <div className='each-comic' key={index} onClick={() => handleClickComic(eachComic.id)}>
          <img
            alt={eachComic.title}
            src={`${eachComic.thumbnail.path}.${eachComic.thumbnail.extension}`}
            className="thumbnails"
          >
          </img>
          <p className="p-margin p-font-bold">{eachComic.title}</p>
          {eachComic.creators.items.length === 0 ?
            <p className="p-margin"></p> :
            <p className="p-margin p-font-body">
              {eachComic.creators.items.map((creator, index) => <span className="list-creator" key={index}>{creator.name}/ </span>)}
            </p>
          }
        </div>
      ))}
    </div>
  );
}
