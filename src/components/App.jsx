import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/Home";
import AnimeDetails from "../pages/AnimeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="anime/:id" element={<AnimeDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
