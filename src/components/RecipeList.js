import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  return (
    <>
      <div className="recipe-list">
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
        <div className="recipe-list-btn-container">
          <button className="btn--primary">Add Recipe</button>
        </div>
      </div>
    </>
  );
}
