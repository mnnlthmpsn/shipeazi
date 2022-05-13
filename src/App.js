import { Route, Routes } from "react-router-dom";
import { Book, Home, Location } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<Book />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
};

export default App;
