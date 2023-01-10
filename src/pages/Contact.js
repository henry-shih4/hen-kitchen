export default function Contact() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-70v bg-yellow-300">
        <div className="absolute w-full h-screen bg-interior bg-cover bg-center bg-no-repeat clip-bg"></div>
        <div className="z-40 text-white flex justify-center items-center flex-col">
          <div className="text-3xl font-dosis tracking-widest">
            Any questions?
          </div>
          <div className="text-6xl text-center font-dosis tracking-widest">
            Contact us
          </div>
        </div>
      </div>

      <div className="h-max w-full bg-yellow-300 flex justify-center items-center pb-4">
        <div className="w-3/4 flex flex-col justify-center h-3/4 z-40 md:flex-row">
          <div className="w-full h-full p-4 bg-black flex justify-center items-start text-white">
            <form className="w-3/4 space-y-8">
              <div className="flex flex-col">
                <label for="name">Name</label>
                <input
                  className="bg-slate-300 h-[40px] text-lg text-black md:text-2xl md:h-[60px]"
                  id="name"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label for="name">Email</label>
                <input
                  className="bg-slate-300 h-[40px] text-lg text-black md:text-2xl md:h-[60px]"
                  id="email"
                  type="email"
                />
              </div>
              <div className="flex flex-col">
                <label for="name">Message</label>
                <textarea
                  className="bg-slate-300 text-black"
                  id="message"
                  rows="10"
                  cols="10"
                />
              </div>
              <div>
                <button className="bg-yellow-400 w-full p-4 text-black">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          <div className="w-full bg-black flex flex-col justify-center items-center text-white">
            <div className="w-full flex justify-center items-center flex-col md:items-start">
              <div>
                <div className="font-dosis tracking-widest mx-3 my-2 flex justify-start items-center text-2xl font-bold md:text-4xl">
                  Connect
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-start items-center md:flex-row">
                  <div className="min-w-[60px] m-2 flex justify-center cursor-pointer">
                    <img alt="mail-icon" src="/mail.svg" />
                  </div>
                  <div className="break-all">henskitchen@gmail.com</div>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-start items-center md:flex-row">
                  <div className="min-w-[60px] m-2 flex justify-center cursor-pointer">
                    <img alt="phone-icon" src="/phone.svg" />
                  </div>
                  <div>+123-456-7890</div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center flex-col md:items-start">
                <div>
                  <div className="font-dosis tracking-widest mx-3 my-2 flex justify-start items-center text-2xl font-bold md:text-4xl">
                    Follow us
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center w-full bg-black flex-wrap md:justify-start ">
                    <div className="min-w-[60px] m-2 flex justify-center items-center cursor-pointer">
                      <img
                        alt="facebook"
                        className="h-[48px] w-[48px]"
                        src="/facebook.svg"
                      />
                    </div>
                    <div className="min-w-[60px] m-2 flex justify-center cursor-pointer">
                      <img
                        alt="twitter-icon"
                        className="h-[48px] w-[48px]"
                        src="/twitter.svg"
                      />
                    </div>
                    <div className="min-w-[60px] m-2 flex justify-center cursor-pointer">
                      <img
                        alt="instagram-icon"
                        className="h-[48px] w-[48px]"
                        src="/instagram.svg"
                      />
                    </div>
                    <div className="min-w-[60px] m-2 flex justify-center cursor-pointer">
                      <img
                        alt="youtube-icon"
                        className="h-[48px] w-[48px]"
                        src="/youtube.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
