import "./App.css";
import React from "react";

function Recipe({ title, calories, image, ingredients, url }) {
  return (
    <div className="item">
      <div className="content">
        <h2>{title}</h2>
        <p> Calories: {Math.floor(calories)}</p>
        <img className="recipe_image" src={image} alt="" />
      </div>
      <ol key={Math.floor(Math.random() * 20)}>
        {ingredients.map((item, i) => i < 5 && <li key={i}> {item.text} </li>)}
      </ol>
      <a className="btn" href={url} target="_blank">
        Read more..
      </a>
    </div>
  );
}

export default Recipe;
