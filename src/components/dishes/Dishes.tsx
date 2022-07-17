import React from "react";
import "./Dishes.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Card from "../card/Card";

export interface Meal {
  meals: Meal[];
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export default function Dishes() {
  const location = useLocation();
  let [items, setItems] = React.useState<Meal>();
  React.useEffect(() => {
    const getItems = async () => {
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
      );
      setItems((items = result.data));
      console.log(items);
    };
    getItems();
  }, []);

  return (
    <>
      <div className="dishes">
        <div className="dishes__row">
          <h2 className="dishes__row-text">Choose Dishes</h2>
          <select name="" id=""></select>
        </div>
        <div className="dishes__list">
          {items?.meals.map((item) => (
            <div>{item.strMeal}</div>
          ))}
        </div>
      </div>
    </>
  );
}
