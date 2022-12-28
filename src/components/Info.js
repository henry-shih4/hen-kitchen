import burger from "../images/burger.jpg";

export default function Info() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex justify-center items-center w-5/6 h-5/6">
        <div className="flex flex-col justify-center items-start space-y-4 w-1/2 h-full mr-4 text-white">
          <div className="text-slate-200">WHY US</div>
          <div>We aim to serve you</div>
          <div>
            Our mission is to provide a setting where customers can enjoy the
            best food, service, and ambiance for any occassion. Customer
            satisfaction is our first priority and we work hard to achieve that.
          </div>
        </div>
        <div className="min-w-1/2 h-full flex justify-center items-center">
          <img className="object-cover h-full" src={burger} />
        </div>
      </div>
    </div>
  );
}
