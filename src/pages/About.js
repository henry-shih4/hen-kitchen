import chefs4 from "../images/chefs4.jpg";
import manager from "../images/manager.jpg";
import headchef from "../images/head-chef.jpg";
import souschef from "../images/sous-chef.jpg";
import owner from "../images/owner.jpg";
import hostess from "../images/hostess.jpg";
import bartender from "../images/bartender.jpg";
import intersectHelper from "../util/Helper";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    intersectHelper();
  }, []);

  const employees = [
    {
      name: "Tana Page",
      role: "Restaurant Manager",
      image: manager,
    },
    {
      name: "Gemma Noel",
      role: "Head Chef",
      image: headchef,
    },
    {
      name: "Jonathan Gibbs",
      role: "Sous Chef",
      image: souschef,
    },
    {
      name: "Nash Young",
      role: "Owner",
      image: owner,
    },
    {
      name: "Emma Byers",
      role: "Head Hostess",
      image: hostess,
    },
    {
      name: "Lance Alford",
      role: "Head Bartender",
      image: bartender,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-black">
        <div className="absolute w-full h-screen bg-chef2 bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute z-30 flex flex-col w-full justify-center items-center text-white text-4xl font-bold  p-3 space-y-3 text-center font-dosis tracking-widest ">
          <div>Experience.</div>
          <div>Service.</div>
          <div>Quality.</div>
        </div>
        <div className="invisible animate-fade max-w-[1/2] max-h-[600px] overflow-hidden z-20 md:visible">
          <img
            alt="chef-cooking"
            className="w-full h-full scale-[2.5] object-cover  -translate-y-10"
            src={chefs4}
          />
        </div>
      </div>
      <div className="min-h-[80vh] bg-black text-white flex justify-center items-center">
        <div className="show-on-scroll my-4 w-3/4 flex flex-col justify-around items-start h-max gap-y-4 md:w-1/2">
          <div className="text-2xl text-yellow-400">About Us</div>
          <div className="font-bold text-3xl font-dosis tracking-widest">
            Hen's Kitchen
          </div>
          <div>
            We welcome you to sit back, unwind and appreciate the lovely sights
            and hints of the city while our gourmet experts sets up your
            delicious dinner utilizing the best and freshest ingredients. Since
            our modest beginnings in 2022 in Houston's stylish Yorkville locale,
            Hen's Kitchen development has been enlivened with the energy to cook
            and serve solid food to the people of Houston and the surrounding
            areas. Despite all the ups and downs that come with running a
            restaurant, we hold fast to the fundamental belief that great food,
            great service, and a laid-back air is the ideal end to a hard day of
            work or play. We trust you taste it in each bite!
          </div>
        </div>
      </div>
      <div className="py-4 h-max w-full flex justify-center items-center bg-black text-white">
        <div className="show-on-scroll flex flex-col justify-around items-center h-max w-5/6 gap-y-5">
          <div className="text-2xl text-yellow-400">Meet the Team!</div>
          <div className="font-bold text-base text-center tracking-widest md:text-2xl">
            The people at Hen's Kitchen who make us great!
          </div>
          <div className="flex flex-col justify-center items-center gap-x-8  md:flex-row md:flex-wrap">
            {employees.map((employee) => {
              return (
                <>
                  <div className="h-[460px] max-w-[400px] md:w-[400px]">
                    <img
                      alt={employee.image}
                      className="object-cover h-5/6 w-full"
                      src={employee.image}
                    />
                    <div className="h-1/6 text-center p-2">
                      {employee.name} - {employee.role}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
