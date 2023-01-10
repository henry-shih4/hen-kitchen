import intersectHelper from "../util/Helper";
import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    intersectHelper();
  }, []);

  return (
    <div className=" flex justify-center items-center h-max text-white mb-2 md:h-max md:min-h-[80v]">
      <div className="show-on-scroll flex flex-col justify-center items-center text-center w-[80%] h-4/5 gap-y-4">
        <div className="text-2xl h-max flex justify-center items-center space-x-4">
          <div className="tracking-widest font-dosis">
            Kind words from our customers!
          </div>
          <div>
            <img alt="smiley-face" src="/smiley.svg" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-max gap-y-4 md:flex-row ">
          <div className="bg-review bg-cover bg-center bg-no-repeat w-full h-1/3 flex flex-row justify-around items-center space-y-2 border-white border-2 rounded-md md:min-w-1/3 m-3 md:h-2/3 md:min-h-[2/3] md:flex-col md:justify-center">
            <div>
              <img alt="quotes" src="/quotes.svg" />
            </div>
            <div className="w-3/4 text-sm italic md:text-base lg:text-lg">
              A very friendly welcoming place to spend time. All personnel were
              very well trained,helpful and all done with a smile. Everything
              was handled with efficiency and attention to every detail was
              given. - <span className="font-bold">Haley Robinson</span>
            </div>
          </div>

          <div className="bg-review bg-cover bg-center bg-no-repeat w-full h-1/3 flex flex-row  justify-around items-center space-y-2  border-white border-2 rounded-md md:min-w-1/3 m-3 md:h-2/3 md:min-h-[2/3] md:flex-col md:justify-center">
            <div>
              <img alt="quotes" src="/quotes.svg" />
            </div>
            <div className="w-3/4 text-sm italic md:text-base lg:text-lg">
              The food was absolutely wonderful, from preparation to
              presentation, very pleasing. We especially enjoyed the special bar
              drinks, the cucumber/cilantro infused vodka martini was great. -{" "}
              <span className="font-bold">Isaac Jones</span>
            </div>
          </div>
          <div className="bg-review bg-cover bg-center bg-no-repeat w-full h-1/3 flex flex-row justify-around items-center space-y-2  border-white border-2 rounded-md md:min-w-1/3 m-3 md:h-2/3 md:min-h-[2/3] md:flex-col md:justify-center">
            <div>
              <img alt="quotes" src="/quotes.svg" />
            </div>
            <div className="w-3/4 text-sm italic md:text-base lg:text-lg">
              Excellent eating experience.. from walking in the door and being
              greeted by employee, seated and drink order taken, was maybe 5
              minutes. Meal was served hot and excellent taste. Server was very
              friendly. - <span className="font-bold">James Lee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
