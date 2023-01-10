import intersectHelper from "../util/Helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  useEffect(() => {
    intersectHelper();
  }, []);

  return (
    <div className="flex justify-center items-center  bg-black text-white min-h-max my-10 md:h-70v md:my-0">
      <div className="tracking-wide flex flex-col justify-center items-center text-center h-full w-5/6 space-y-10 md:justify-around">
        <div className="show-on-scroll flex flex-col justify-center items-center">
          <div className="text-3xl italic text-yellow-300 font-dosis tracking-widest">
            Discover
          </div>
          <div>What our food provides</div>
        </div>
        <div className=" show-on-scroll flex flex-col gap-y-5 md:flex-row">
          <div className="gap-x-3 w-full h-1/3 flex flex-row justify-center items-center md:w-1/3 md:flex-col md:h-full md:space-y-3">
            <div className="m-2 flex flex-col justify-center items-center w-1/3 md:h-1/3">
              <img
                alt="tomato"
                src="/tomato.svg"
                className="hover:-translate-y-2 duration-300 mb-1"
              />
              <div className="font-dosis tracking-widest">Always Fresh</div>
            </div>
            <div className="text-sm w-4/5 md:h-2/3 md:md:text-base">
              Freshness is something we strive for in our food. We believe fresh
              cuisine is best for the body and mind. We keep that in mind while
              we prepare your food.
            </div>
          </div>

          <div className="gap-x-3 w-full h-1/3 flex flex-row justify-center items-center  md:w-1/3 md:flex-col md:h-full md:space-y-3">
            <div className="m-2 flex flex-col justify-center items-center w-1/3 md:h-1/3">
              <img
                alt="plant"
                src="/plant.svg"
                className="hover:-translate-y-2 duration-300 mb-1"
              />
              <div className="font-dosis tracking-widest">
                Premium Ingredients
              </div>
            </div>
            <div className="text-sm w-4/5 md:h-2/3 md:md:text-base">
              Great ingredients are a must to take taste and health to the next
              level so that's why we only use oragnic ingredients to bring out
              the best in our ingredients.
            </div>
          </div>

          <div className="gap-x-3 w-full h-1/3 flex flex-row justify-center items-center md:w-1/3 md:flex-col md:h-full md:space-y-3">
            <div className=" m-2 flex flex-col justify-center items-center w-1/3 md:h-1/3">
              <img
                alt="trophy"
                src="/trophy.svg"
                className="hover:-translate-y-2 duration-300 mb-1"
              />
              <div className="font-dosis tracking-widest">Exquisite Taste</div>
            </div>
            <div className="text-sm w-4/5 md:h-2/3 md:text-base ">
              Serving delicious food is something we wish to provide for you
              each visit. We make sure the taste is packed with flavor,
              consistant and nutritious.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="m-3 text-lg font-dosis tracking-widest text-center">
            Menu
          </div>
          <div className="hover:cursor-pointer hover:scale-105 duration-300">
            <button
              className="show-on-scroll flex justify-center items-center bg-yellow-300 text-black text-center p-2 w-[80px] h-[80px] rounded-full transition-transform ease-in-out md:w-[100px] md:h-[100px]"
              onClick={() => {
                navigate("/menu");
              }}
            >
              <div className="">
                <img alt="menu" src="/cutlery.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
