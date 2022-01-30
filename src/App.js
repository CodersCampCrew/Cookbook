import Icontosort from "./components/IconToSort/IconToSort";
import SubpageTitle from "./components/SubpageTitle/SubpageTitle";
import Navbar from "./container/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <SubpageTitle subpageTitle="Breakfast" />
      <Icontosort />
    </>
  );
};

export default App;
