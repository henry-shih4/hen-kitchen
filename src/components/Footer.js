import logo from "../images/logo.png";

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-90v bg-black">
      <div className="text-white flex flex-col justify-center items-center">
        <div className="w-[300px] h-[300px]">
          <img alt="hens-kitchen logo" src={logo} />
        </div>
        <div className="flex space-x-6">
          <div>
            <svg
              className="cursor-pointer hover:stroke-[#4267B2] duration-300"
              stroke="#fff"
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 6.47714 17.5229 1.99999 12 1.99999C6.47715 1.99999 2 6.47714 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79687C10.4375 7.29062 11.9304 5.90624 14.2146 5.90624C15.3087 5.90624 16.4531 6.10155 16.4531 6.10155V8.56249H15.1921C13.9499 8.56249 13.5625 9.33333 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              className="cursor-pointer hover:stroke-[#1DA1F2] duration-300"
              stroke="#fff"
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9999 5.9246C21.2644 6.25051 20.4744 6.47071 19.6437 6.57025C20.4911 6.06289 21.1411 5.25782 21.4477 4.29948C20.6549 4.76984 19.7767 5.1116 18.8422 5.29481C18.0935 4.49855 17.0277 4 15.8474 4C13.5819 4 11.7445 5.8374 11.7445 8.10464C11.7445 8.42526 11.7815 8.73707 11.8502 9.03832C8.43877 8.86656 5.41666 7.23263 3.39252 4.75046C3.04019 5.35823 2.8376 6.06289 2.8376 6.81335C2.8376 8.23677 3.56252 9.4937 4.66267 10.2292C3.98972 10.2072 3.35729 10.0231 2.80413 9.71567V9.76852C2.80413 11.7565 4.21786 13.4151 6.09577 13.7921C5.75049 13.8855 5.38847 13.9348 5.015 13.9348C4.75075 13.9348 4.49267 13.9102 4.24252 13.8626C4.76485 15.4921 6.27987 16.6795 8.07587 16.7112C6.67095 17.8122 4.90137 18.4684 2.97942 18.4684C2.64823 18.4684 2.32144 18.449 1.99994 18.4112C3.8162 19.5765 5.97246 20.2547 8.28903 20.2547C15.8377 20.2547 19.9644 14.0026 19.9644 8.58029C19.9644 8.40412 19.9599 8.2262 19.952 8.05003C20.7536 7.47045 21.4494 6.74905 21.9982 5.92724L21.9999 5.9246Z"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              className="cursor-pointer hover:stroke-[#E1306C] duration-300"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                stroke-linejoin="round"
                d="M3.062 7.245c.046-1.022.206-1.681.423-2.241l.003-.008c.214-.57.55-1.085.984-1.511l.006-.006.006-.006c.427-.435.943-.77 1.512-.984l.01-.004c.558-.217 1.216-.377 2.238-.423M3.062 7.245C3.012 8.337 3 8.675 3 11.506c0 2.832.012 3.17.062 4.262m0-8.523v.275m.427 10.497a4.18 4.18 0 0 0 .984 1.511l.006.006.006.006c.426.434.942.77 1.511.985l.009.003c.559.217 1.217.376 2.24.423m-4.756-2.934-.004-.01c-.217-.558-.377-1.216-.423-2.239m.427 2.249-.013-.068m-.414-2.181.016.088m-.016-.088v-.276m.414 2.457-.398-2.093m.398 2.093c-.169-.446-.343-1.068-.398-2.093m.398 2.093.018.046c.214.578.553 1.1.993 1.53.43.44.952.78 1.53.994.462.18 1.115.369 2.227.42 1.123.05 1.47.061 4.262.061 2.793 0 3.14-.01 4.262-.061 1.114-.052 1.766-.241 2.227-.42a4.166 4.166 0 0 0 1.53-.993c.44-.43.78-.953.994-1.53.18-.463.369-1.115.42-2.228.05-1.123.061-1.47.061-4.262 0-2.791-.01-3.14-.062-4.262-.05-1.12-.242-1.772-.422-2.234a4.159 4.159 0 0 0-.991-1.524 4.164 4.164 0 0 0-1.522-.99c-.463-.18-1.116-.37-2.235-.422a170.15 170.15 0 0 0-.276-.012M3.078 15.856a165.497 165.497 0 0 1-.017-.364m5.183-13.43C9.337 2.012 9.675 2 12.506 2c2.831 0 3.17.013 4.261.062m-8.523 0h.277m8.246 0h-.275m.275 0c1.023.046 1.682.206 2.242.423l.007.003c.57.214 1.085.55 1.512.984l.006.006.006.006c.434.427.77.942.984 1.512l.003.01c.218.558.377 1.216.424 2.239M8.52 2.062h7.971m-7.971 0c.924-.04 1.436-.05 3.985-.05 2.55 0 3.061.01 3.986.05m-7.971 0-.277.012c-1.114.051-1.766.24-2.227.42a4.166 4.166 0 0 0-1.535.998c-.454.456-.751.912-.985 1.517-.182.464-.372 1.117-.423 2.235l-.012.276m18.889 8.248c-.047 1.023-.206 1.681-.423 2.24l-.003.008a4.187 4.187 0 0 1-.985 1.512l-.006.006-.006.006a4.18 4.18 0 0 1-1.511.984l-.01.004c-.558.217-1.216.376-2.239.423M3.062 15.49c-.04-.924-.05-1.435-.05-3.985s.01-3.06.05-3.986m0 7.972V7.52m7.754 8.068a4.418 4.418 0 1 0 3.381-8.164 4.418 4.418 0 0 0-3.381 8.164ZM9.372 8.372a4.432 4.432 0 1 1 6.268 6.268 4.432 4.432 0 0 1-6.268-6.268Zm10.062-2.33a1.269 1.269 0 1 1-2.538 0 1.269 1.269 0 0 1 2.538 0Z"
              />
            </svg>
          </div>
          <div>
            <svg
              className="cursor-pointer hover:stroke-red-500 duration-300"
              width="48px"
              height="48px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="3"
              stroke="#fff"
              fill="none"
            >
              <path d="M26.5,39.88V24.12a.37.37,0,0,1,.56-.31l12.4,7.88a.36.36,0,0,1,0,.62l-12.4,7.88A.37.37,0,0,1,26.5,39.88Z" />
              <rect x="6.46" y="14.42" width="51.09" height="35.16" rx="9.06" />
            </svg>
          </div>
        </div>
        <div className="mt-4">© Hen's Kitchen</div>
        <div className="text-xs">developed by Henry Shih</div>
      </div>
    </div>
  );
}
