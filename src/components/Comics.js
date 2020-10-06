import React, { useState, useEffect } from 'react';
import '../App.css';
import { Header } from "../components/Header";
import { FooterComics } from "./FooterComics.js";
import { ComicsList } from "./ComicsList.js";
import { useHistory } from "react-router-dom";

export const Comics = () => {
  let [page, setPage] = useState(0);
  let history= useHistory();
  // let [path, setPath] = useState("");

  // useEffect(() => {
  //   history.listen((location) => {
  //     if (location.pathname === "/home" || location.pathname === "" || location.pathname === "/") {
  //       setPath("0");
  //     } else {
  //       let pathPage = location.pathname.split("/")[2];
  //       setPath(pathPage);
  //     }
  //   })
  // }, [history])

  const handleClick = (condition) => {
    if (condition === "Previous") {
      if (page === 0) {
        setPage(0);
      } else {
        setPage(page-=1);
        // history.push(`/home/${page}`);
      }
    } else {
      setPage(page+=1);
      // history.push(`/home/${page}`);
    }   
  };

  return (
    <>
      <Header />
      <section className="main-comics">
        {console.log(page)}
        <ComicsList 
          pageNumber={page}
        />
        <FooterComics 
          previous={handleClick}
          next={handleClick}
          page={page}
        />
      </section>
    </>
  );
}
