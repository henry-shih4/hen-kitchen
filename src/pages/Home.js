import Main from "../components/Main";
import Info from "../components/Info";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <div>
        <Main />
        <Info />
        <Features />
        <Reviews />
        <Gallery />
      </div>
    </>
  );
}
