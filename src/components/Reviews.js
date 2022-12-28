export default function Reviews() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="flex flex-col justify-around items-center text-center w-5/6 h-5/6">
        <div className="text-2xl">Words from our customers...</div>
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="w-full h-1/3 flex flex-row justify-around items-center space-y-2 border-white border-2 rounded-md md:w-1/3 m-3 md:h-full md:flex-col md:justify-center">
            <div>
              <img src="/quotes.svg" />
            </div>
            <div className="w-2/3 text-sm italic md:text-md lg:text-lg">
              A very friendly welcoming place to spend time. All personnel were
              very well trained,helpful and all done with a smile. Everything
              was handled with efficiency and attention to every detail was
              given. - Haley Robinson
            </div>
          </div>
          <div className="w-full h-1/3 flex flex-row  justify-around items-center space-y-2  border-white border-2 rounded-md md:w-1/3 m-3 md:h-full md:flex-col md:justify-center">
            <div>
              <img src="/quotes.svg" />
            </div>
            <div className="w-2/3 text-sm italic md:text-md lg:text-lg">
              The food was absolutely wonderful, from preparation to
              presentation, very pleasing. We especially enjoyed the special bar
              drinks, the cucumber/cilantro infused vodka martini and the K&P
              was great. - Isaac Jones
            </div>
          </div>
          <div className="w-full h-1/3 flex flex-row justify-around items-center space-y-2  border-white border-2 rounded-md md:w-1/3 m-3 md:h-full md:flex-col md:justify-center">
            <div>
              <img src="/quotes.svg" />
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
