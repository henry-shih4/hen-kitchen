import logo from "../images/logo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showModal, setShowModal] = useState();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let Yscroll = window.scrollY;
      setScrollPosition(Yscroll);
    });
  });

  useEffect(() => {
    console.log(scrollPosition);
  });

  return (
    <>
      <div
        className={
          scrollPosition > 260
            ? "fixed top-0 w-full h-24 z-50 flex justify-center items-center bg-black transition-colors duration-500"
            : "fixed top-0 w-full h-24 z-50 flex justify-center items-center bg-transparent transition-colors duration-500"
        }
      >
        <div className="flex justify-between  text-white h-full w-full md:w-[80%]">
          <div
            className="h-16 m-4 hover:cursor-pointer hover:scale-110 duration-500"
            onClick={() => {
              navigate("/");
            }}
          >
            <img alt="hen-kitchen-logo" className="h-full" src={logo} />
          </div>
          <div
            onClick={() => {
              setShowModal(true);
            }}
            className={
              showModal
                ? "rotate-90 cursor-pointer h-16 m-4 transition duration-500 hover:scale-105"
                : "rotate-0 cursor-pointer h-16 m-4 transition duration-500 hover:scale-105"
            }
          >
            <img
              className="fill-white"
              alt="hamburger-menu"
              src="/hamburger.svg"
            />
          </div>
        </div>
        {/* nav bar modal*/}
        <div
          className={
            showModal
              ? "fixed top-0 w-full h-full bg-black flex justify-center items-center translate-x-0 transiton duration-700"
              : "invisible translate-x-[-100%] fixed top-0 w-full h-full bg-black flex justify-center items-center transiton duration-700"
          }
        >
          <div
            className="absolute top-0 right-0 m-3 cursor-pointer hover:scale-105 duration-300"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <svg
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7Z"
                stroke="#fff"
                stroke-width="2"
              />
              <path
                d="M9 9L15 15M15 9L9 15"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-10 text-white text-center text-3xl">
            <div
              className="w-max p-3 rounded-lg hover:text-black hover:bg-white duration-300 cursor-pointer"
              onClick={() => {
                navigate("/");
                setShowModal(false);
              }}
            >
              HOME
            </div>
            <div
              className="w-max p-3 rounded-lg hover:text-black hover:bg-white duration-300 cursor-pointer"
              onClick={() => {
                navigate("/menu");
                setShowModal(false);
              }}
            >
              MENU
            </div>
            <div
              className="w-max p-3 rounded-lg hover:text-black hover:bg-white duration-300 cursor-pointer"
              onClick={() => {
                navigate("/about");
                setShowModal(false);
              }}
            >
              ABOUT
            </div>
            <div
              className="w-max p-3 rounded-lg hover:text-black hover:bg-white duration-300 cursor-pointer"
              onClick={() => {
                navigate("/contact");
                setShowModal(false);
              }}
            >
              CONTACT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
