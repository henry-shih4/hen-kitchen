export default function Menu() {
  const appetizers = [
    {
      item: "Tater Tots",
      price: "8.50",
      description:
        "Crispy double fried tater tots tossed with house sriracha mayo sauce.",
    },
    {
      item: "Calamari",
      price: "9.50",
      description:
        "Fried calamari pieces served with a side of fresh mozzarella and tomato sauce.",
    },
    {
      item: "Tater Tots",
      price: "8.50",
      description:
        "Crispy double fried tater tots tossed with house sriracha mayo sauce.",
    },
    {
      item: "Calamari",
      price: "9.50",
      description:
        "Fried calamari pieces served with a side of fresh mozzarella and tomato sauce.",
    },
    {
      item: "Tater Tots",
      price: "8.50",
      description:
        "Crispy double fried tater tots tossed with house sriracha mayo sauce.",
    },
    {
      item: "Calamari",
      price: "9.50",
      description:
        "Fried calamari pieces served with a side of fresh mozzarella and tomato sauce.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen mb-2">
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
      <div className="flex flex-col justify-center items-center w-screen h-max">
        <div className="grid grid-cols-1 m-auto bg-black w-5/6">
          <div className="h-screen bg-blue-200">
            <div>Appetizers</div>
            <div className="flex flex-col  divide-white divide-y-2 divide-dashed">
              {appetizers.map((item) => {
                return (
                  <div>
                    <div className="flex w-full justify-between">
                      <div>{item.item}</div>
                      <div>{item.price}</div>
                    </div>
                    <div>{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-screen bg-red-200">Salads</div>
        </div>
      </div>
    </>
  );
}
