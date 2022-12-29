import chefs from "../images/chefs.jpg";
import chef2 from "../images/chef2.jpg";
import dark from "../images/dark-interior.jpg";
import dishes from "../images/dishes.jpg";
import pasta from "../images/pasta.jpg";
import drinks from "../images/drinks.jpg";
import dessert from "../images/dessert.jpg";
import lounge from "../images/lounge.jpg";

export default function Gallery() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-max bg-black overflow-hidden">
        <div className="text-white mb-2">Our Gallery</div>
        <div className="grid h-screen w-[90%] m-auto bg-black grid-cols-custom grid-rows-custom gap-2 mb-2 grid-flow-dense lg:h-full">
          <div className="col-span-2 row-span-1 overflow-hidden">
            <img
              className="h-full w-full object-cover duration-500 ease-in-out hover:scale-105 "
              alt="chefs"
              src={chefs}
              loading="lazy"
            />
          </div>
          <div className="col-span-1 row-span-2 overflow-hidden">
            <img
              className="h-full w-full object-cover duration-500 ease-in-out hover:scale-105"
              alt="dark-interior"
              src={dark}
              loading="lazy"
            />
          </div>
          <div className="col-span-2 row-span-2 overflow-hidden">
            <img
              className="h-full w-full object-cover duration-500 ease-in-out hover:scale-105"
              alt="chef"
              src={chef2}
              loading="lazy"
            />
          </div>
          <div className="col-span-1 row-span-2 overflow-hidden">
            <img
              className="h-full w-full object-cover duration-500 ease-in-out hover:scale-105"
              alt="dishes"
              src={dishes}
              loading="lazy"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img
              className="h-full w-full object-cover duration-500 ease-in-out hover:scale-105"
              alt="pasta"
              src={pasta}
              loading="lazy"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img
              className="h-full w-full object-cover duration-500 ease-in-out hover:scale-105"
              alt="dessert"
              src={dessert}
              loading="lazy"
            />
          </div>
          <div className="col-span-3 row-span-1 overflow-hidden">
            <img
              className="h-full w-full object-cover duration-500 ease-in-out hover:scale-105 "
              alt="drinks"
              src={drinks}
              loading="lazy"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img
              className="h-full w-full object-cover duration-500 ease-in-out hover:scale-105 "
              alt="lounge"
              src={lounge}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
