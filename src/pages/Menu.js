export default function Menu() {
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
      <div className="flex flex-col justify-center items-center h-90v mb-2">
        <div className="absolute w-full h-screen bg-main bg-cover brightness-50 -z-10"></div>
        <div className="flex flex-col w-full justify-center items-center text-white text-4xl font-bold  p-3 space-y-3 text-center md:w-1/2">
          <div>Our Menu</div>
          <div className="bg-white w-1/2 h-[6px]"></div>
          <div className="text-base w-1/2 font-normal italic">
            We are proud to serve many different types of cuisines and flavors
            from all around the world. Feel free to ask our staff about our
            recommendations or any new items on the menu!
          </div>
        </div>
      </div>
      {/*menu start */}
      <div className="flex flex-col justify-center items-center w-screen h-max mb-10 bg-white">
        <div className="grid grid-cols-1 m-auto bg-black w-full text-white md:grid-cols-2 gap-x-2 gap-y-10">
          <div className="m-auto h-max w-5/6 bg-black flex flex-col border-solid border-slate-500 border-2 shadow-2xl shadow-slate-700 rounded-lg">
            <div className="flex justify-center items-center m-3 text-3xl text-yellow-300 font-bold">
              APPETIZERS
            </div>
            <div className="flex flex-col  divide-white divide-y-2 divide-dashed gap-y-8">
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center mx-2">
                    <div className="flex w-full justify-between">
                      <div className="m-2">{item.item}</div>
                      <div className="m-2">{item.price}</div>
                    </div>
                    <div className="m-2 text-center">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="m-auto h-max w-5/6 bg-black flex flex-col border-solid border-slate-500 border-2 shadow-2xl shadow-slate-700 rounded-lg">
            <div className="flex justify-center items-center m-3 text-3xl text-yellow-300 font-bold">
              DRINKS
            </div>
            <div className="flex flex-col  divide-white divide-y-2 divide-dashed gap-y-8">
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex w-full justify-between">
                      <div className="m-2">{item.item}</div>
                      <div className="m-2">{item.price}</div>
                    </div>
                    <div className="m-2 text-center">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" m-auto h-max w-5/6 bg-black flex flex-col border-solid border-slate-500 border-2 shadow-2xl shadow-slate-700 rounded-lg">
            <div className="flex justify-center items-center m-3 text-3xl text-yellow-300 font-bold">
              SOUPS + SALADS
            </div>
            <div className="flex flex-col  divide-white divide-y-2 divide-dashed gap-y-8">
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex w-full justify-between">
                      <div className="m-2">{item.item}</div>
                      <div className="m-2">{item.price}</div>
                    </div>
                    <div className="m-2 text-center">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="m-auto h-max w-5/6 bg-black flex flex-col border-solid border-slate-500 border-2 shadow-2xl shadow-slate-700 rounded-lg">
            <div className="flex justify-center items-center m-3 text-3xl text-yellow-300 font-bold">
              ENTREES
            </div>
            <div className="flex flex-col  divide-white divide-y-2 divide-dashed gap-y-8">
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex w-full justify-between">
                      <div className="m-2">{item.item}</div>
                      <div className="m-2">{item.price}</div>
                    </div>
                    <div className="m-2 text-center">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="m-auto h-max w-5/6 bg-black flex flex-col border-solid border-slate-500 border-2 shadow-2xl shadow-slate-700 rounded-lg">
            <div className="flex justify-center items-center m-3 text-3xl text-yellow-300 font-bold">
              DESSERTS
            </div>
            <div className="flex flex-col  divide-white divide-y-2 divide-dashed gap-y-8">
              {appetizers.map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex w-full justify-between">
                      <div className="m-2">{item.item}</div>
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
