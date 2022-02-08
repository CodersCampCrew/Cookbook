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

const App = () => {
  makeServer();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/addrecipe-page" element={<AddRecipe />} />
        <Route path="/addedrecipe-page" element={<AddedRecipe />} />
        <Route path="/browser-page" element={<BrowserPage />} />
        <Route path="/generatemenu-page" element={<GenerateMenuPage />} />
        <Route path="/generetedmenu-page" element={<GeneratedMenuPage />} />
      </Route>
    </Routes>
  );
};

export default App;
