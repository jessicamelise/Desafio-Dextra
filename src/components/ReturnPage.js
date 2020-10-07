import React from 'react';
import returnPage from "../assets/return.svg";
import '../App.css';
import { useHistory } from 'react-router-dom';

export const ReturnPage = (props) => {
  let history = useHistory();

  const handleClickReturn = () => {
    props.return === "goBack" ? history.goBack() : history.push("/");
  }

  return (
    <div className="max-width-return">
      <img className="return-icon" alt="return-page" src={returnPage} onClick={handleClickReturn}></img>
    </div>
  );
}