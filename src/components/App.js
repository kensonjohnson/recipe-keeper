import React from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";

function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

const sampleRecipes = [
  {
    id: 1,
    name: "Salted Chicken",
    servings: 5,
    cookTime: "1:45",
    instructions: "1. Step One\n2. Step Two\n3. Step Three",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbsp",
      },
    ],
  },
  {
    id: 2,
    name: "Salted Fish",
    servings: 4,
    cookTime: "1:45",
    instructions: "1. Step One\n 2. Step Two\n 3. Step Three",
    ingredients: [
      {
        id: 1,
        name: "Fish",
        amount: "1.5 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbsp",
      },
    ],
  },
];

export default App;
