export default function Map() {
  return (
    <div className="flex justify-center items-center h-90v">
      <div className="absolute w-full h-full bg-city brightness-25 bg-cover -z-10"></div>
      <div className="flex justify-center items-center bg-slate-500 max-w-[320px] min-h-[240px] rounded-md">
        <div className="w-1/3 flex justify-center items-center">
          <img alt="location" src="/location.svg" />
        </div>
        <div className="text-white w-2/3 text-base md:text-2xl">
          <div className="">Find us @</div>
          <div className="">448 W Little York Rd, Houston</div>
          <div className="">Texas, 77076</div>
        </div>
      </div>
    </div>
  );
}
