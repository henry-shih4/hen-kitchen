export default function Main() {
  return (
    <div className="flex justify-center items-center h-screen mb-2">
      <div className="absolute w-screen h-screen bg-main bg-cover bg-center bg-no-repeat brightness-50 -z-10"></div>
      <div className="flex flex-col w-full justify-center items-center text-white text-4xl font-bold  p-3 space-y-3 text-center">
        <div className="font-dosis tracking-widest">Delicious.</div>
        <div className="font-dosis tracking-widest">Modern.</div>
        <div className="font-dosis tracking-widest">Fresh.</div>
        <div className="text-base w-1/2 font-normal italic">
          Hen's Kitchen is a new restaurant located in Houston, Texas. Offering
          a variety of cuisines, we pride ourselves on exploring new ideas and
          tastes. We hope to see you here!
        </div>
      </div>
    </div>
  );
}
