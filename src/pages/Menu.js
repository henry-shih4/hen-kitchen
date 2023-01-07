import intersectHelper from "../util/Helper";
import { useEffect } from "react";

export default function Menu() {
  useEffect(() => {
    intersectHelper();
  }, []);

  const appetizers = [
    {
      item: "Tater Tots",
      price: "$8.50",
      description:
        "Crispy double fried tater tots tossed with house sriracha mayo sauce.",
    },
    {
      item: "Calamari",
      price: "$9.50",
      description:
        "Fried calamari pieces served with a side of fresh mozzarella and tomato sauce.",
    },
    {
      item: "Tater Tots",
      price: "$8.50",
      description:
        "Crispy double fried tater tots tossed with house sriracha mayo sauce.",
    },
    {
      item: "Calamari",
      price: "$9.50",
      description:
        "Fried calamari pieces served with a side of fresh mozzarella and tomato sauce.",
    },
    {
      item: "Tater Tots",
      price: "$8.50",
      description:
        "Crispy double fried tater tots tossed with house sriracha mayo sauce.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center h-80v bg-black">
        <div className="absolute w-screen h-screen bg-chef bg-cover bg-center bg-no-repeat clip-bg"></div>
        <div className="z-10 flex flex-col w-full justify-center items-center text-white font-bold  p-3 space-y-3 text-center md:w-1/2">
          <div className="font-dosis text-5xl">Our Menu</div>
          <div className="bg-white w-1/2 h-[6px]"></div>
          <div className="text-base w-1/2 font-normal italic">
            We are proud to serve many different types of cuisines and flavors
            from all around the world. Feel free to ask our staff about our
            recommendations or any new items on the menu!
          </div>
        </div>
      </div>
      {/*menu start */}
      <div className="flex flex-col justify-center items-center w-screen h-max mb-8 bg-white">
        <div className="grid grid-cols-1 m-auto bg-black w-full text-black md:grid-cols-2 gap-x-2 gap-y-16">
          <div className="z-40 m-auto h-max w-5/6 bg-slate-100 flex flex-col  shadow-sm shadow-slate-700 rounded-lg show-on-scroll">
            <div className="flex flex-col  divide-black divide-y-2 divide-dashed">
              <div className="flex justify-center items-center m-3 p-2 text-3xl text-red-400 font-bold font-dosis tracking-widest">
                APPETIZERS
              </div>
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center mx-2 h-[140px]">
                    <div className="flex w-full justify-between">
                      <div className="m-2 text-lg">{item.item}</div>
                      <div className="m-2">{item.price}</div>
                    </div>
                    <div className="m-2 text-center">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="z-40 m-auto h-max w-5/6 bg-slate-100 flex flex-col shadow-sm shadow-slate-700 rounded-lg show-on-scroll">
            <div className="flex flex-col  divide-black divide-y-2 divide-dashed">
              <div className="flex justify-center items-center m-3 p-2 text-3xl text-yellow-400 font-bold font-dosis tracking-widest">
                DRINKS
              </div>
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center mx-2 h-[140px]">
                    <div className="flex w-full justify-between">
                      <div className="m-2 text-lg">{item.item}</div>
                      <div className="m-2">{item.price}</div>
                    </div>
                    <div className="m-2 text-center">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="z-40 m-auto h-max w-5/6 bg-slate-100 flex flex-col  shadow-sm shadow-slate-700 rounded-lg show-on-scroll">
            <div className="flex flex-col  divide-black divide-y-2 divide-dashed">
              <div className="flex justify-center items-center m-3 p-2 text-3xl text-green-400 font-bold font-dosis tracking-widest">
                SOUPS AND SALADS
              </div>
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center mx-2 h-[140px]">
                    <div className="flex w-full justify-between">
                      <div className="m-2 text-lg">{item.item}</div>
                      <div className="m-2">{item.price}</div>
                    </div>
                    <div className="m-2 text-center">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="z-40 m-auto h-max w-5/6 bg-slate-100 flex flex-col  shadow-sm shadow-slate-700 rounded-lg show-on-scroll">
            <div className="flex flex-col  divide-black divide-y-2 divide-dashed">
              <div className="flex justify-center items-center m-3 p-2 text-3xl text-sky-600 font-bold font-dosis tracking-widest">
                ENTREES
              </div>
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center mx-2 h-[140px]">
                    <div className="flex w-full justify-between">
                      <div className="m-2 text-lg">{item.item}</div>
                      <div className="m-2">{item.price}</div>
                    </div>
                    <div className="m-2 text-center">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="z-40 m-auto h-max w-5/6 bg-slate-100 flex flex-col shadow-sm shadow-slate-700 rounded-lg show-on-scroll">
            <div className="flex flex-col  divide-black divide-y-2 divide-dashed">
              <div className="flex justify-center items-center m-3 p-2 text-3xl text-sky-600 font-bold font-dosis tracking-widest">
                ENTREES
              </div>
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center mx-2 h-[140px]">
                    <div className="flex w-full justify-between">
                      <div className="m-2 text-lg">{item.item}</div>
                      <div className="m-2">{item.price}</div>
                    </div>
                    <div className="m-2 text-center">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="z-40 m-auto h-max w-5/6 bg-slate-100 flex flex-col shadow-sm shadow-slate-700 rounded-lg show-on-scroll">
            <div className="flex flex-col  divide-black divide-y-2 divide-dashed">
              <div className="flex justify-center items-center m-3 p-2 text-3xl text-amber-500 font-bold font-dosis tracking-widest">
                DESSERTS
              </div>
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center mx-2 h-[140px]">
                    <div className="flex w-full justify-between">
                      <div className="m-2 text-lg">{item.item}</div>
                      <div className="m-2">{item.price}</div>
                    </div>
                    <div className="m-2 text-center">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
