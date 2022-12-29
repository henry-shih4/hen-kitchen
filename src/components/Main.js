export default function Main() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute w-full h-full bg-main bg-cover brightness-50 -z-10"></div>
      <div className="flex flex-col w-full justify-center items-center text-white text-4xl font-bold  p-3 space-y-3 text-center">
        <div>Delicious.</div>
        <div>Modern.</div>
        <div>Fresh.</div>
        <div className="text-base w-1/2 font-normal italic">
          Hen's Kitchen is a new restaurant located in Houston, Texas. Offering
          a variety of cuisines, we pride ourselves on exploring new ideas and
          tastes. We hope to see you here!
        </div>
      </div>
    </div>
  );
}
