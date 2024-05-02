import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<WatchPage />} />
          <Route path="/results/" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
