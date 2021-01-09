import "./App.css";
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const App = () => {
  const [recipe, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  //Api Data
  const APP_ID = "54ef6245";
  const APP_KEY = "f600efde4207c2771450b0bdfd995f6a";
  const Search_url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    fetch_api();
  }, [query]);

  const fetch_api = async () => {
    const response = await fetch(Search_url);
    const data = await response.json();
    setRecipes(data.hits);
  };
  const onUpdateSearch = (e) => {
    setSearch(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      <h1>Recipe Search Engine</h1>
      <form className="saerch_form" onSubmit={onFormSubmit}>
        <input
          className="search_input"
          type="text"
          value={search}
          onChange={onUpdateSearch}
        />
        <button className="search_submit" type="submit">
          Search
        </button>
      </form>
      <div className="recipe-wrapper">
          {recipe.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url}
        />
      ))}
      </div>
    </div>
  );
};
export default App;
