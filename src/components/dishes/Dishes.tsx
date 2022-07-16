import React from "react";
import "./Dishes.scss";

import Card from "../card/Card";

export default function Dishes(props: {}) {
  return (
    <>
      <div className="dishes">
        <div className="dishes__row">
          <h2 className="dishes__row-text">Choose Dishes</h2>
          <select name="" id=""></select>
        </div>
        <Card />
      </div>
    </>
  );
}
