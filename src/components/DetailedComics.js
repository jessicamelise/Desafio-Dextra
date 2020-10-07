import React from 'react';
import { Header } from "../components/Header";
import { ReturnPage } from "../components/ReturnPage.js";
import { ComicsInformation } from "../components/ComicsInformation.js"
import '../App.css';

export const DetailedComics = ({ match }) => {
 
  return (
    <>
      <Header />
      <section className="main-comics">
        <ComicsInformation path={match.params}/>
        <ReturnPage />
      </section>
    </>
  );
}