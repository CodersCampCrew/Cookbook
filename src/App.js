import React from "react";
import { Routes, Route } from "react-router-dom";

import makeServer from "./server";
import Layout from "./Layout";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import AddedRecipe from "./pages/AddedRecipe/AddedRecipe";
import BrowserPage from "./pages/BrowserPage/BrowserPage";
import HomePage from "./pages/HomePage/HomePage";
import GenerateMenuPage from "./pages/GenerateMenuPage/GenerateMenuPage";
import GeneratedMenuPage from "./pages/GeneratedMenuPage/GeneratedMenuPage";
import RecipePage from "./pages/RecipePage/RecipePage";

const App = () => {
  makeServer();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/create_recipe" element={<AddRecipe />} />
        <Route path="/create_recipe/success" element={<AddedRecipe />} />
        <Route path="/recipes/*" element={<BrowserPage />} />
        <Route path="/dishes/:dishId" element={<RecipePage />} />
        <Route path="/generate_menu" element={<GenerateMenuPage />} />
        <Route path="/genereted_menu" element={<GeneratedMenuPage />} />
      </Route>
    </Routes>
  );
};

export default App;
