import intersectHelper from "../util/Helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  useEffect(() => {
    intersectHelper();
  }, []);

  return (
    <div className="flex justify-center items-center text-white min-h-[80vh] my-10 md:my-5">
      <div className="tracking-wide flex flex-col justify-center items-center text-center  w-5/6 space-y-10 md:justify-around">
        <div className="show-on-scroll flex flex-col justify-center items-center">
          <div className="text-3xl italic text-yellow-300 font-dosis tracking-widest">
            Discover
          </div>
          <div>What our food provides</div>
        </div>
        <div className="h-full show-on-scroll flex justify-center items-center flex-col gap-y-5 md:flex-row md:h-[400px]">
          <div className="gap-x-3 w-full h-[240px] min-h-[240px] flex flex-row justify-center items-center  md:w-1/3 md:flex-col md:space-y-3 md:h-full">
            <div className=" w-[80%] min-w-[130px] rounded-lg bg-slate-100 flex flex-col justify-center items-center h-full md:h-1/3">
              <img
                alt="food"
                src="/food.svg"
                className="hover:-translate-y-2 duration-300  max-h-[150px]"
              />
            </div>
            <div className="text-sm w-4/5 md:h-2/3 ">
              <div className="font-dosis tracking-widest text-xl mb-2">
                High-Quality Ingredients
              </div>
              <p className="">
                We use only the freshest, locally sourced ingredients
                <span className="hidden md:inline">
                  &nbsp; to create a menu that is both delicious and diverse.
                  Our experienced chefs are passionate about their craft and are
                  dedicated to providing you with an unforgettable dining
                  experience.
                </span>
              </p>
            </div>
          </div>

          <div className="gap-x-3 w-full h-[240px] min-h-[240px] flex flex-row justify-center items-center  md:w-1/3 md:flex-col md:space-y-3 md:h-full">
            <div className=" w-[80%] min-w-[130px] rounded-lg bg-slate-100 flex flex-col justify-center items-center h-full md:h-1/3">
              <img
                alt="team"
                src="/team.svg"
                className=" hover:-translate-y-2 duration-300  max-h-[150px]"
              />
            </div>
            <div className="text-sm w-4/5 md:h-2/3">
              <div className="font-dosis tracking-widest text-xl mb-2">
                Exceptional Service
              </div>
              <p>
                We strive to provide our customers with a truly exceptional
                dining experience.&nbsp;
                <span className="hidden md:inline">
                  Our friendly and attentive staff are dedicated to making sure
                  that your every need is taken care of, from the moment you
                  walk through the door until the moment you leave.
                </span>
              </p>
            </div>
          </div>

          <div className="gap-x-3 w-full h-[240px] min-h-[240px] flex flex-row justify-center items-center  md:w-1/3 md:flex-col md:space-y-3 md:h-full">
            <div className=" w-[80%] min-w-[130px]  rounded-lg bg-slate-100  flex flex-col justify-center items-center h-full  md:h-1/3">
              <img
                alt="dinner"
                src="/dinner.svg"
                className="hover:-translate-y-2 duration-300 max-h-[150px]"
              />
            </div>
            <div className="text-sm w-4/5 md:h-2/3 ">
              <div className="font-dosis tracking-widest text-xl mb-2">
                Atmosphere
              </div>
              <p>
                Experience the perfect blend of comfort and elegance.&nbsp;
                <span className="hidden md:inline">
                  With a warm and inviting atmosphere, comfortable seating, and
                  pleasant decor, our restaurant is the ideal spot for any
                  occasion.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <button
              className="m-3 bg-yellow-300 text-black font-bold text-2xl w-[160px] h-[60px] rounded-md ease-in-out hover:opacity-80 hover:cursor-pointer duration-300"
              onClick={() => {
                navigate("/menu");
              }}
            >
              <div className="flex justify-center items-center  tracking-widest h-full w-full">
                Menu
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
