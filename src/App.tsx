import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Page from "./Components/Page";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Main />} />
        <Route path="*" element={"Not Found"} />
      </Route>
    </Routes>
  );
};

export default App;
