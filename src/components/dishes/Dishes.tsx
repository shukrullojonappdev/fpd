import React from "react";
import "./Dishes.scss";
import axios from "axios";
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
  let [items, setItems] = React.useState<Meal>();
  React.useEffect(() => {
    const pathName: any = window.location.pathname;
    const pathStr: any = pathName.slice(1);
    const getItems = async () => {
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
          pathStr === "/" ? "Beef" : pathStr
        }`
      );
      setItems(result.data);
      console.log(items);
    };
    getItems();
  }, [items]);

  return (
    <>
      <div className="dishes">
        <div className="dishes__row">
          <h2 className="dishes__row-text">Choose Dishes</h2>
          <select name="" id=""></select>
        </div>
        <div className="dishes__list">
          {items?.meals.map((item, index) => (
            <Card
              strMeal={item.strMeal}
              strMealThump={item.strMealThumb}
              idMeal={item.idMeal}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
