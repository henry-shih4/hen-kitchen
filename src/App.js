import Header from "./components/Header";
import Main from "./components/Main";
import Info from "./components/Info";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Info />
      <Features />
      <Reviews />
      <Gallery />
      <Map />
      <Contact />
    </div>
  );
}

export default App;
