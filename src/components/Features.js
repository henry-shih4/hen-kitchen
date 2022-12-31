import intersectHelper from "../util/Helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  useEffect(() => {
    intersectHelper();
  }, []);

  return (
    <div className="flex justify-center items-center  bg-black text-white min-h-90v md:h-90v">
      <div className="show-on-scroll flex flex-col justify-around items-center text-center h-1/2 w-5/6">
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl italic text-yellow-400">Discover</div>
          <div>What our food provides</div>
        </div>
        <div className="flex flex-col gap-y-5 md:flex-row">
          <div className="w-full h-1/3 flex flex-row justify-center items-center space-y-3 md:w-1/3 md:flex-col md:h-full">
            <div className="m-2 flex flex-col justify-center items-center w-1/3 md:h-1/3">
              <img
                alt="tomato"
                src="/tomato.svg"
                className="hover:-translate-y-2 duration-300 mb-1"
              />
              <div>Always Fresh</div>
            </div>
            <div className="text-sm w-4/5 md:h-2/3 md:md:text-base">
              Freshness is something we strive for in our food. We believe fresh
              cuisine is best for the body and mind. We keep that in mind while
              we prepare your food.
            </div>
          </div>

          <div className="w-full h-1/3 flex flex-row justify-center items-center space-y-3 md:w-1/3 md:flex-col md:h-full">
            <div className="m-2 flex flex-col justify-center items-center w-1/3 md:h-1/3">
              <img
                alt="plant"
                src="/plant.svg"
                className="hover:-translate-y-2 duration-300 mb-1"
              />
              <div>Premium Ingredients</div>
            </div>
            <div className="text-sm w-4/5 md:h-2/3 md:md:text-base">
              Great ingredients are a must to take taste and health to the next
              level so that's why we only use oragnic ingredients to bring out
              the best in our ingredients.
            </div>
          </div>

          <div className="w-full h-1/3 flex flex-row justify-center items-center space-y-3 md:w-1/3 md:flex-col md:h-full">
            <div className=" m-2 flex flex-col justify-center items-center w-1/3 md:h-1/3">
              <img
                alt="trophy"
                src="/trophy.svg"
                className="hover:-translate-y-2 duration-300 mb-1"
              />
              <div>Exquisite Taste</div>
            </div>
            <div className="text-sm w-4/5 md:h-2/3 md:text-base ">
              Serving delicious food is something we wish to provide for you
              each visit. We make sure the taste is packed with flavor,
              consistant and nutritious.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="flex justify-center items-center bg-yellow-300 text-black text-center p-2 w-[80px] h-[80px] rounded-full transition-transform ease-in-out hover:scale-110 hover:cursor-pointer md:w-[100px] md:h-[100px]"
            onClick={() => {
              navigate("/menu");
            }}
          >
            <div>
              <img alt="menu" src="/cutlery.svg" />
            </div>
          </button>
          {/* <div className="m-3 text-sm">Menu</div> */}
        </div>
      </div>
    </div>
  );
}
