import chefs4 from "../images/chefs4.jpg";

export default function About() {
  const employees = [
    {
      name: "Tana Page",
      role: "Restaurant Manager",
    },
    {
      name: "Gemma Noel",
      role: "Head Chef",
    },
    {
      name: "Robin Gibbs",
      role: "",
    },
    {
      name: "Nash Young",
    },
    {
      name: "Emma Byers",
    },
    {
      name: "Lance Alford",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="absolute w-screen h-screen bg-chef2 bg-cover bg-center bg-no-repeat"></div>
        <div className="max-w-[1/2] max-h-[600px] overflow-hidden z-20">
          <img
            className="w-full h-full scale-[2.5] object-cover translate-x-20 -translate-y-10"
            src={chefs4}
          />
        </div>
      </div>
      <div className="h-screen bg-black text-white">About us</div>
      <div className="h-screen bg-black text-white">Our Team</div>
    </>
  );
}

{
  /* <div className="absolute left-1/2 w-[500px] h-[300px] bg-chef2 bg-cover bg-center bg-no-repeat z-20 -translate-x-1/2 overflow-hidden brightness-100 scale-[2.0]">
        </div> */
}
