import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
        <Map />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
