import chefs4 from "../images/chefs4.jpg";
import manager from "../images/manager.jpg";
import headchef from "../images/head-chef.jpg";
import souschef from "../images/sous-chef.jpg";
import owner from "../images/owner.jpg";
import hostess from "../images/hostess.jpg";
import bartender from "../images/bartender.jpg";

export default function About() {
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
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="absolute z-30 flex flex-col w-full justify-center items-center text-white text-4xl font-bold  p-3 space-y-3 text-center">
          <div>Delicious.</div>
          <div>Modern.</div>
          <div>Fresh.</div>
        </div>
        <div className="absolute w-screen h-screen bg-chef2 bg-cover bg-center bg-no-repeat"></div>
        <div className="max-w-[1/2] max-h-[600px] overflow-hidden z-20">
          <img
            className="w-full h-full scale-[2.5] object-cover translate-x-20 -translate-y-10"
            src={chefs4}
          />
        </div>
      </div>
      <div className="h-60v bg-black text-white flex justify-center items-center">
        <div className="flex flex-col justify-around items-center w-1/2 h-1/3">
          <div>About Us</div>
          <div className="">
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
      <div className="h-max w-screen bg-black text-white">
        <div className="flex flex-col justify-around items-center h-max">
          <div>Our Team</div>
          <div className="flex flex-col justify-center items-center gap-4 bg-blue-200 md:flex-row md:flex-wrap">
            {employees.map((employee) => {
              return (
                <>
                  <div className="h-[400px] w-[400px]">
                    <img
                      className="object-cover h-full w-full"
                      src={employee.image}
                    />
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
