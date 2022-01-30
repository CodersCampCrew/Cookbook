import { Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <nav>
        <Routes>
          {/* <Route path="/home" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/generate-menu" element={<GenerateMenu />} /> */}
          <Route/>
        </Routes>
      </nav>
    </>
  );
};

export default App;
