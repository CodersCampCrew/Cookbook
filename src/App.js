import React from "react";
import { Routes, Route } from "react-router-dom";
import makeServer from "./server";

import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout";
import BrowserPage from "./pages/BrowserPage/BrowserPage";

const App = () => {
  makeServer();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/browser-page" element={<BrowserPage />} />
      </Route>
    </Routes>
  );
};

export default App;
