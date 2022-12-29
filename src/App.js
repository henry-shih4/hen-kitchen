import Header from "./components/Header";
import Main from "./components/Main";
import Info from "./components/Info";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
