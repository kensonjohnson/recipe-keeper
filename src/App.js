import React from "react";
import RecipeList from "./RecipeList";

function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

const sampleRecipes = [
  {
    id: 1,
    name: "Salted Chicken",
    servings: 5,
    cookTime: "1:45",
    instructions: "1. Step One\n 2. Step Two\n 3. Step Three",
  },
  {
    id: 1,
    name: "Salted Fish",
    servings: 4,
    cookTime: "1:45",
    instructions: "1. Step One\n 2. Step Two\n 3. Step Three",
  },
];

export default App;
