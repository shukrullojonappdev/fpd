import React from "react";
import "./Card.scss";

export default function Card(props: {
  strMeal: string;
  strMealThump: string;
  idMeal: any;
}) {
  return (
    <>
      <div className="card">
        <img src={props.strMealThump} alt={props.idMeal} />
        {props.strMeal}
      </div>
    </>
  );
}
