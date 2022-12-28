export default function Features() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="flex flex-col justify-around items-center text-center w-5/6 h-5/6">
        <div className="text-2xl">What our menu offers</div>
        <div className="flex flex-col gap-y-3 md:flex-row">
          <div className="w-full h-1/3 flex flex-row justify-center items-center space-y-3 md:w-1/3 md:flex-col md:h-full">
            <div className="m-2 flex flex-col justify-center items-center w-1/3 md:h-1/3">
              <img alt="tomato" src="/tomato.svg" />
              <div>Always Fresh</div>
            </div>
            <div className="text-sm w-4/5 md:h-2/3 md:md:text-base">
              Freshness is something we strive for in our food. We believe fresh
              cuisine is best for the body and mind. We keep that in mind while
              we prepare your food.
            </div>
          </div>

          <div className="w-full h-1/3 flex flex-row justify-center items-center space-y-3 md:w-1/3 md:flex-col md:h-full">
            <div className="m-2 flex flex-col justify-center items-center w-1/3 md:h-1/3">
              <img className="w-[60px] " src="/plant.svg" />
              <div>Premium Ingredients</div>
            </div>
            <div className="text-sm w-4/5 md:h-2/3 md:md:text-base">
              Great ingredients are a must to take taste and health to the next
              level so that's why we only use oragnic ingredients to bring out
              the best in our ingredients.
            </div>
          </div>

          <div className="w-full h-1/3 flex flex-row justify-center items-center space-y-3 md:w-1/3 md:flex-col md:h-full">
            <div className=" m-2 flex flex-col justify-center items-center w-1/3 md:h-1/3">
              <img src="/trophy.svg" />
              <div>Exquisite Taste</div>
            </div>
            <div className="text-sm w-4/5 md:h-2/3 md:text-base ">
              Serving delicious food is something we wish to provide for you
              each visit. We make sure the taste is packed with flavor,
              consistant and nutritious.
            </div>
          </div>
        </div>
        <div>
          <button>See Menu</button>
        </div>
      </div>
    </div>
  );
}
