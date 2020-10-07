import React, { useEffect, useState } from 'react';
import '../App.css';
import { Header } from '../components/Header';
import { ReturnPage } from '../components/ReturnPage.js';
import { loadCharactersApi, loadCharactersSearchApi } from '../loadApis/api.js';
import { useHistory } from 'react-router-dom';
import { FooterComics } from './FooterComics.js';

export const SearchCharacters = ({ match }) => {
  const [getId, setGetId] = useState('');
  const [getComics, setGetComics] = useState(null);
  const [notFound, setNotfound] = useState('');
  const [changePage, setChangePage] = useState(0);
  let history = useHistory();

  useEffect(() => {
    loadCharactersApi(match.params.character).then((character) => {
      if (character.data.results.length !== 0) {
        let array = [];
        character.data.results.map((eachName) => {
          array.push(eachName.id);
        });
        setGetId(array.join(','));
      } else {
        setNotfound(`Results not found for ${match.params.character}`);
      }
    })
  }, []);

  useEffect(() => {
    if (getId) {
      loadCharactersSearchApi(getId, changePage).then((comicsPerCharacter) => {
        setGetComics(comicsPerCharacter.data);
      });
    }
  }, [getId, changePage]);

  const handleClickComic = (id) => {
    history.push(`/detailed/${id}`);
  }

  const handleClick = (condition) => {
    if (condition === 'Previous') {
      if (changePage >= 0) {
        history.push(`/search/${match.params.character}/${changePage-1}`);
        setChangePage(changePage-1);
      }
    } else {
      history.push(`/search/${match.params.character}/${changePage+1}`);
      setChangePage(changePage+1);
    }   
  };

  return (
    <>
      <Header />
      <section className='main-comics'>
        {notFound &&
          <p>{notFound}</p>
        }
        {getComics &&
          <>
            <div className='max-width-main'>
              {getComics.results.map((eachComic, index) => (
                <div className='each-comic' key={index} onClick={() => handleClickComic(eachComic.id)}>
                  <img
                    alt={eachComic.title}
                    src={`${eachComic.thumbnail.path}.${eachComic.thumbnail.extension}`}
                    className='thumbnails'
                  >
                  </img>
                  <p className='p-margin p-font-bold'>{eachComic.title}</p>
                  {eachComic.creators.items.length === 0 ?
                    <p className='p-margin'></p> :
                    <p className='p-margin p-font-body'>
                      {eachComic.creators.items.map((creator, index) => <span className='list-creator' key={index}>{creator.name}/ </span>)}
                    </p>
                  }
                </div>
              ))}
            </div>
            <FooterComics 
              previous={handleClick}
              next={handleClick}
              page={changePage}
              count={getComics ? getComics.count : 10}
            />
          </>
        }
        <ReturnPage return = 'initial'/>
      </section>
    </>
  );
}