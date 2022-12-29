export default function Map() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute w-full h-full bg-city brightness-25 bg-cover -z-10"></div>
      <div className="flex justify-center items-center bg-slate-500 w-[360px] h-[240px] rounded-md">
        <div className="w-1/3 flex justify-center items-center">
          <img src="/location.svg" />
        </div>
        <div className="text-white">
          <div className="text-3xl">Find us @</div>
          <div className="text-2xl">448 W Little York Rd, Houston</div>
          <div className="text-2xl">Texas, 77076</div>
        </div>
      </div>
    </div>
  );
}
