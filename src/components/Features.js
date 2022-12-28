export default function Features() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="flex flex-col justify-around items-center text-center w-5/6 h-5/6">
        <div className="text-2xl">What our menu offers</div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full h-1/3 flex flex-row justify-center items-center space-y-3 md:w-1/3 md:flex-col md:h-full">
            <div className="m-3 flex flex-col justify-center items-center w-1/3">
              <img alt="tomato" src="/tomato.svg" />
              <div>Always Fresh</div>
            </div>
            <div className="w-2/3">
              We focus on serving fresh food always. Fresh food is always best
              for your precious body and we keep that in mind and that's why we
              like to serve everything fresh
            </div>
          </div>

          <div className="w-full h-1/3 flex flex-row justify-center items-center space-y-3 md:w-1/3 md:flex-col md:h-full">
            <div className="m-3 flex flex-col justify-center items-center w-1/3">
              <img className="w-[60px] " src="/plant.svg" />
              <div>Premium Ingredients</div>
            </div>
            <div className="w-2/3">
              We know great ingredients are must to take the taste and health on
              next level so that's why we focus on using oragnic ingredients so
              you don't have to worry
            </div>
          </div>

          <div className="w-full h-1/3 flex flex-row justify-center items-center space-y-3 md:w-1/3 md:flex-col md:h-full">
            <div className=" m-3 flex flex-col justify-center items-center w-1/3">
              <img src="/trophy.svg" />
              <div>Exquisite Taste</div>
            </div>
            <div className="w-2/3">
              Serving tasty food has always been our first priority and also to
              make sure the taste is constant everytime you consume, you will
              see no difference in taste
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
