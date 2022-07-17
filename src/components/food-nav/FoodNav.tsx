import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Dishes from "../dishes/Dishes";
import "./FoodNav.scss";

function FoodNavItem(prop: { title: string; onClick: any; className: any }) {
  return (
    <>
      <div
        className={`food-nav__item ${prop.className}`}
        onClick={prop.onClick}
      >
        {prop.title}
      </div>
    </>
  );
}

export interface Category {
  categories: Category[];
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default function FoodNav() {
  let [position, setPosition] = React.useState(0);

  const [data, setData] = React.useState<Category>();
  React.useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setData(response.data);
    })();
  }, []);

  return (
    <>
      <div className="food-nav">
        {data?.categories.map((item, index) => (
          <Link to={data.categories[index].strCategory}>
            <FoodNavItem
              key={index}
              className={index === 0 ? "active__item" : ""}
              title={item.strCategory}
              onClick={(e: any) => {
                const pos = e.target.getBoundingClientRect().left;
                const foodNavItems: any =
                  document.querySelectorAll(".food-nav__item");
                const posfi = foodNavItems[0].getBoundingClientRect().left;
                const line = document.querySelector(".food-nav__active-line");
                setPosition((position = pos - posfi));
                line?.classList.add("food-nav__active-line--move");
                setTimeout(() => {
                  line?.classList.remove("food-nav__active-line--move");
                }, 500);

                for (let i = 0; i < foodNavItems.length; i++) {
                  if (e.target === foodNavItems[i]) {
                    foodNavItems[i].classList.add("active__item");
                  } else {
                    foodNavItems[i].classList.remove("active__item");
                  }
                }
              }}
            />
          </Link>
        ))}
        <div className="food-nav__active-line" style={{ left: position }}></div>
      </div>
      <Dishes />
    </>
  );
}
