import logo from "../images/logo.png";

export default function Header() {
  return (
    <div className="fixed top-0 w-full h-16 z-999">
      <div className="flex justify-between text-white bg-black h-full ">
        <div>
          <img className="h-full" src={logo} />
        </div>
        <div>
          <img
            className="fill-white"
            alt="hamburger-menu"
            src="/hamburger.svg"
          />
        </div>
      </div>
    </div>
  );
}
