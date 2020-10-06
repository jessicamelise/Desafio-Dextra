import React, { useState } from 'react';
import '../App.css';
import { Header } from "../components/Header";
import { FooterComics } from "./FooterComics.js";
import { ComicsList } from "./ComicsList.js";
import { useHistory } from "react-router-dom";

export const Comics = ( { match } ) => {
  let [changePage, setChangePage] = useState(0);
  let history= useHistory();

  const handleClick = (condition) => {
    if (condition === "Previous") {
      if (changePage === 0) {
        setChangePage(0);
      } else {
        setChangePage(changePage-=1);
        history.push(`/home/${changePage}`);
      }
    } else {
      setChangePage(changePage+=1);
      history.push(`/home/${changePage}`);
    }   
  };

  return (
    <>
      <Header />
      <section className="main-comics">
        <ComicsList 
          pageNumber={match.params.page}
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
