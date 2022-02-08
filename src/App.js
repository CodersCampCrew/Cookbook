import React from "react";
import { Routes, Route } from "react-router-dom";
import makeServer from "./server";

import AddRecipe from "./pages/AddRecipe/AddRecipe";
import Layout from "./Layout";
import BrowserPage from "./pages/BrowserPage/BrowserPage";

const App = () => {
  makeServer();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AddRecipe />} />
        <Route path="/browser-page" element={<BrowserPage />} />
      </Route>
    </Routes>
  );
};

export default App;
