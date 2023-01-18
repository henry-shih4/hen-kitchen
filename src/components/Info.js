import burger from "../images/burger.jpg";
import { useEffect } from "react";
import intersectHelper from "../util/Helper";
import { useNavigate } from "react-router-dom";

export default function Info() {
  useEffect(() => {
    intersectHelper();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-max my-2 md:h-max">
      <div className=" flex flex-col justify-center items-center w-5/6 h-max md:flex-row md:h-full">
        <div className="show-on-scroll  flex flex-col justify-center items-center space-y-4 w-full h-full mb-3 text-white text-center md:items-start md:text-left md:w-2/3">
          <div className="text-3xl font-dosis tracking-widest ">
            So...why us?
          </div>
          <div className="text-xl font-dosis tracking-widest">
            We aim to serve
            <span className="font-bold text-3xl m-2 text-yellow-300">you</span>!
          </div>
          <div className="text-base w-3/4 tracking-widest lg:text-lg">
            Our mission is to provide a setting where customers can enjoy the
            best food, service, and ambiance for any occassion. Customer
            satisfaction is our first priority and we work hard to achieve that.
          </div>
          <div className="flex justify-center items-center">
            <button
              className="m-3 bg-yellow-300 text-black text-center p-2 w-[160px] h-[60px] rounded-md ease-in-out hover:opacity-80 duration-300"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div className="text-xl ">About Us</div>
            </button>
          </div>
        </div>
        <div className="show-on-scroll min-w-1/2 h-[400px] flex justify-center items-center">
          <img alt="burger" className="object-cover h-full" src={burger} />
        </div>
      </div>
    </div>
  );
}
