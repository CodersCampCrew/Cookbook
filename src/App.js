// import { Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar/Navbar";
import GeneratedMenuPage from "./pages/GeneratedMenuPage/GeneratedMenuPage"

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
      <GeneratedMenuPage />
    </>
  );
};

export default App;
