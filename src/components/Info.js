import burger from "../images/burger.jpg";
import { useEffect } from "react";
import intersectHelper from "../util/Helper";

export default function Info() {
  useEffect(() => {
    intersectHelper();
  }, []);

  return (
    <div className="flex justify-center items-center h-max mb-2 bg-black md:h-80v">
      <div className=" flex flex-col justify-center items-center w-5/6 h-max md:flex-row md:h-full">
        <div className="show-on-scroll  flex flex-col justify-center items-center space-y-4 w-2/3 h-full mb-3 text-white md:items-start">
          <div className="text-3xl">So...why us?</div>
          <div className="text-xl">
            We aim to serve
            <span className="font-bold text-3xl m-2 text-yellow-300">you</span>!
          </div>
          <div className="text-base w-3/4 lg:text-lg">
            Our mission is to provide a setting where customers can enjoy the
            best food, service, and ambiance for any occassion. Customer
            satisfaction is our first priority and we work hard to achieve that.
          </div>
          <div className="flex justify-center items-center">
            <button className="m-3 bg-yellow-300 text-black text-center p-2 w-[160px] h-[60px] rounded-md ease-in-out hover:opacity-80 duration-300">
              <div className="text-xl ">About Us</div>
            </button>
          </div>
        </div>
        <div className="show-on-scroll min-w-1/2 h-[400px] flex justify-center items-center md:h-3/4">
          <img className="object-cover h-full" src={burger} />
        </div>
      </div>
    </div>
  );
}
