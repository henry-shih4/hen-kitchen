import burger from "../images/burger.jpg";

export default function Info() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex justify-center items-center w-5/6 h-5/6">
        <div className="flex flex-col justify-center items-start space-y-4 w-1/2 h-full mr-4 text-white">
          <div className="text-3xl">So...why us?</div>
          <div className="text-xl">
            We aim to serve
            <span className="font-bold text-3xl m-1 text-yellow-300">you</span>!
          </div>
          <div className="text-sm w-3/4 lg:text-lg">
            Our mission is to provide a setting where customers can enjoy the
            best food, service, and ambiance for any occassion. Customer
            satisfaction is our first priority and we work hard to achieve that.
          </div>
          <div className="flex justify-center items-center">
            <button className="mt-8 bg-yellow-300 text-black text-center p-2 w-[160px] h-[60px] rounded-md ease-in-out hover:opacity-80 duration-300">
              <div className="text-xl">About Us</div>
            </button>
          </div>
        </div>
        <div className="min-w-1/2 h-full flex justify-center items-center">
          <img className="object-cover h-full" src={burger} />
        </div>
      </div>
    </div>
  );
}
