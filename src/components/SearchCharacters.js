import React, { useEffect, useState } from 'react';
import '../App.css';
import { Header } from "../components/Header";
import { ReturnPage } from "../components/ReturnPage.js";
import { loadCharactersApi } from "../loadApis/api.js";
// import { CharactersInformation } from "../components/CharactersInformation.js"

export const SearchCharacters = ({ match }) => {
  const [getId, setGetId] = useState([]);

  useEffect(() => {
    loadCharactersApi(match.params.character).then((character) => {
      let array = []
      character.data.results.map((eachName) => {
        array.push(eachName.id)
      });
      setGetId(array.join(", "))
    });
  }, []);

  return (
    <>
      <Header />
      <section className="main-comics">
        {getId}
        {/* <CharactersInformation character={match.params.character}/> */}
        <ReturnPage />
      </section>
    </>
  );
}