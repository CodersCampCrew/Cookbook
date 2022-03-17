import React from "react";
import { Routes, Route } from "react-router-dom";

// import makeServer from "./server";
import Layout from "./Layout";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import AddedRecipe from "./pages/AddedRecipe/AddedRecipe";
import BrowserPage from "./pages/BrowserPage/BrowserPage";
import HomePage from "./pages/HomePage/HomePage";
import GenerateMenuPage from "./pages/GenerateMenuPage/GenerateMenuPage";
import GeneratedMenuPage from "./pages/GeneratedMenuPage/GeneratedMenuPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import MyCookbook from "./pages/MyCookbook/MyCookbook";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => {
  // makeServer();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/create_recipe" element={<AddRecipe />} />
        <Route path="/create_recipe/success" element={<AddedRecipe />} />
        <Route path="/recipes/:mealTime" element={<BrowserPage />} />
        <Route path="/dishes/:dishId" element={<RecipePage />} />
        <Route path="/generate_menu" element={<GenerateMenuPage />} />
        <Route path="/generated_menu" element={<GeneratedMenuPage />} />
        <Route path="/my_cookbook/mycookbook" element={<MyCookbook />} />
        <Route path="/my_cookbook/login" element={<LoginPage />} />
        <Route path="/my_cookbook/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
