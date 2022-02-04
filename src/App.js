// import { Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar/Navbar";
import BrowserPage from "./pages/BrowserPage";
import GenerateMenuPage from "./pages/GenerateMenuPage/GenerateMenuPage";

const App = () => {
  return (
    <>
      <Navbar />

      {/* <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/browse" element={<BrowserPage />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/generate-menu" element={<GenerateMenu />} />
          <Route />
        </Routes> */}
      <GenerateMenuPage />
      <BrowserPage />
    </>
  );
};

export default App;
