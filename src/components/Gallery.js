import chefs from "../images/chefs.jpg";
import chef2 from "../images/chef2.jpg";
import dark from "../images/dark-interior.jpg";
import dishes from "../images/dishes.jpg";
import pasta from "../images/pasta.jpg";

export default function Gallery() {
  return (
    <>
      <div className="flex justify-center items-center h-max bg-black">
        <div className="grid w-[80%] m-auto bg-black grid-cols-3 grid-rows-[300px,300px,300px,300px,300px] gap-1">
          <div className="col-span-2 row-span-1 bg-red-300">
            <img className="h-full w-full object-cover" src={chefs} />
          </div>
          <div className="col-span-1 row-span-2 bg-blue-200">
            <img className="h-full object-cover" src={dark} />
          </div>
          <div className="col-span-2 row-span-2 bg-blue-100">
            <img className="h-full w-full object-cover" src={chef2} />
          </div>
          <div className="col-span-1 row-span-2 bg-red-300">
            <img className="h-full object-cover" src={dishes} />
          </div>
          <div className="col-span-1 row-span-1 bg-blue-400">
            <img className="h-full w-full object-cover" src={pasta} />
          </div>
          <div className="col-span-3 row-span-1 bg-blue-200"></div>
        </div>
      </div>

      {/* <div className="flex justify-center items-center h-screen bg-slate-300">
        <div className="grid h-full w-full bg-black grid-cols-2 grid-rows-3">
          <div className="col-span-1 bg-red-300"></div>
          <div className="col-span-1 row-span-2 bg-blue-200"></div>
          <div className="col-span-1 row-span-1 bg-blue-400"></div>
          <div className="col-span-2 bg-red-400"></div>
        </div>
      </div> */}
    </>
  );
}
