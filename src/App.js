import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

import "./App.css";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            path="/"
            element={<Home />}
          ></Route>
          <Route path="menu" element={<Menu />}></Route>
        </Routes>
        <Map />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
