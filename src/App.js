import { Route, Routes } from "react-router-dom";
import { Book, Construction, Home, Location } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Construction />} />
      <Route path="/book" element={<Book />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
};

export default App;
