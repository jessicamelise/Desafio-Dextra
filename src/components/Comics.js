import React from 'react';
import '../App.css';
import { Header } from "../components/Header";
import { FooterComics } from "./FooterComics.js";
import { ComicsList } from "./ComicsList.js";
import { useHistory } from "react-router-dom";

export const Comics = ( { match } ) => {
  let changePage = parseInt(match.params.page) || 0;
  let history= useHistory();

  const handleClick = (condition) => {
    if (condition === "Previous") {
      if (changePage >= 0) {
        history.push(`/home/${changePage-1}`);
      }
    } else {
      history.push(`/home/${changePage+1}`);
    }   
  };

  return (
    <>
      <Header />
      <section className="main-comics">
        <ComicsList 
          pageNumber={changePage}
        />
        <FooterComics 
          previous={handleClick}
          next={handleClick}
          page={changePage}
        />
      </section>
    </>
  );
}
