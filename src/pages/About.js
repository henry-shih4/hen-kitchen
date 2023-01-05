import chefs4 from "../images/chefs4.jpg";

export default function About() {
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
    </>
  );
}

{
  /* <div className="absolute left-1/2 w-[500px] h-[300px] bg-chef2 bg-cover bg-center bg-no-repeat z-20 -translate-x-1/2 overflow-hidden brightness-100 scale-[2.0]">
        </div> */
}
