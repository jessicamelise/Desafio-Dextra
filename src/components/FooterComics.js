import React from 'react';
import { Button } from "./Button.js";
import '../App.css';

export const FooterComics = (props) => {

  return (
    <div className="max-width-button">
      <Button
        className="button-comics"
        name="Previous"
        onClick={() => props.previous("Previous")}
      />
      <Button
        className="button-comics"
        name="Next"
        onClick={() => props.next("Next")}
      />
      <p className="p-margin p-font-body p-align">Page: {props.page}</p>
    </div>
  );
}