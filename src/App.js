import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import Popular from "./components/Popular/Popular.jsx";

const NotFound = () => {
  return <h1>NotFound</h1>;
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Popular />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
//<Route path="/movies" element={<Movies />} />
