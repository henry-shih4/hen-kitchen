import intersectHelper from "../util/Helper";
import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    intersectHelper();
  }, []);

  return (
    <div className=" flex justify-center items-center h-screen bg-black text-white">
      <div className="show-on-scroll flex flex-col justify-around items-center text-center w-5/6 h-full">
        <div className="text-2xl flex space-x-2 justify-center items-center ">
          <div>Kind words from our customers!</div>
          <div>
            <img alt="smiley-face" src="/smiley.svg" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 h-full md:flex-row md:mt-3">
          <div className="bg-review bg-cover w-full h-1/3 flex flex-row justify-around items-center space-y-2 border-white border-2 rounded-md md:w-1/3 m-3 md:h-3/4 md:flex-col md:justify-center">
            <div>
              <img alt="quotes" src="/quotes.svg" />
            </div>
            <div className="w-2/3 text-sm italic md:text-md lg:text-lg">
              A very friendly welcoming place to spend time. All personnel were
              very well trained,helpful and all done with a smile. Everything
              was handled with efficiency and attention to every detail was
              given. - Haley Robinson
            </div>
          </div>

          <div className="bg-review bg-cover w-full h-1/3 flex flex-row  justify-around items-center space-y-2  border-white border-2 rounded-md md:w-1/3 m-3 md:h-3/4 md:flex-col md:justify-center">
            <div>
              <img alt="quotes" src="/quotes.svg" />
            </div>
            <div className="w-2/3 text-sm italic md:text-md lg:text-lg">
              The food was absolutely wonderful, from preparation to
              presentation, very pleasing. We especially enjoyed the special bar
              drinks, the cucumber/cilantro infused vodka martini and the K&P
              was great. - Isaac Jones
            </div>
          </div>
          <div className="bg-review bg-cover w-full h-1/3 flex flex-row justify-around items-center space-y-2  border-white border-2 rounded-md md:w-1/3 m-3 md:h-3/4 md:flex-col md:justify-center">
            <div>
              <img alt="quotes" src="/quotes.svg" />
            </div>
            <div className="w-2/3 text-sm italic md:text-md lg:text-lg">
              Excellent eating experience.. from walking in the door and being
              greeted by employee, seated and drink order taken, was maybe 5
              minutes. Meal was served hot and excellent taste. Server was very
              friendly. - James Lee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
