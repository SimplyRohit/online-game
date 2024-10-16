//src/app/page.tsx
"use client";
import axios from "axios";

// checking cookies if exist if not this will redirct to /name
const CheckCookies = async () => {
  try {
    const response = await axios.get("/api/checkCokkies");

    if (response.data === "no") {
      window.location.href = "/name";
    }
  } catch (error) {
    console.log(error);
  }
};
CheckCookies();

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full mt-10 items-center justify-center">
      <h1 className="text-5xl  text-[#8B5E5E]">draw battle!</h1>
      <p className="opacity-40 mb-16">
        two teams of drawers face off with a frantic final round
      </p>
      <svg
        width="193"
        height="178"
        viewBox="0 0 193 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.199 31.9742C13.5008 24.133 7.81727 15.8375 5.67636 10.7852C3.53545 5.7329 2.1401 2.06105 3.60358 2.00115C5.46158 1.92512 10.4124 5.63147 12.1498 6.42897C18.3608 9.2801 24.6784 14.0413 30.6504 16.7558"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="64.15715026855469"
          strokeDashoffset="0"
          style={{ transition: `stroke-dashoffset 0.4s` }}
        ></path>
        <path
          d="M16.5 32.5001C26.2725 40.6423 47.809 56.5124 60.839 69.5424C66.078 74.7814 85.8746 91.2975 91.1245 95.6024C96.8325 100.771 108.847 112.664 117.845 121.663C129.572 133.389 146.374 148.532 151 152.5C148.763 154.805 143.256 158.581 137.283 164.01C148.687 166.499 155.981 164.3 160.5 160.5C163.987 156.43 170.5 149.5 173.5 146C176.5 142.5 181.903 133.539 174.854 122.748C169.968 128.178 167.961 132.503 163.996 136.864C157.295 131.546 148.572 124.651 142.277 117.863C131.421 106.157 119.707 96.5901 108.498 85.83C100.155 78.228 77.635 57.4975 68.9828 49.9985C62.6416 44.5024 38.5793 21.7656 30.9514 17.2817"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="464.05126953125"
          strokeDashoffset="0"
          style={{
            transition: `strokeDashoffset 1.2s cubic-bezier(0.515, 0.335, 0.505, 0.8)`,
          }}
        ></path>
        <path
          d="M174.868 145.936C180.84 151.366 191.809 158.491 189.795 161.232C185.503 167.071 182.548 170.329 177.306 174.262C169.757 166.893 165.42 163.421 161.868 160.436"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="60.934593200683594"
          strokeDashoffset="0"
          style={{ transition: `stroke-dashoffset 0.5s` }}
        ></path>
        <path
          d="M6.87885 4.00024C6.50798 4.28635 4.98022 6.30961 5.0002 6.32559C5.14301 6.43984 5.60816 6.3054 5.74468 6.27596C6.54372 6.10362 6.33803 6.86905 7.12701 6.65556C7.79868 6.47381 9.49375 6.21446 9.894 5.51402C10.1263 5.10751 9.77689 7.0846 9.50002 7.46216C8.93608 8.23116 8.54567 8.68266 8.00002 9.46216C7.65625 9.95325 7.18745 11.3999 7.00002 11.9622"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="15.692303657531738"
          strokeDashoffset="0"
          style={{ transition: `stroke-dashoffset 0.3s` }}
        ></path>
        <path
          d="M16.9419 33.2183C18.4419 29.7182 21.7526 26.0814 23.2765 24.6571C25.6417 22.4466 27.9337 18.5284 31.3933 18"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="21.410846710205078"
          strokeDashoffset="0"
          style={{ transition: `stroke-dashoffset 0.3s` }}
        ></path>
        <path
          d="M81.245 88.4556C70.0362 99.2157 60.069 107.243 49.2128 118.949C42.6664 126.008 35.0146 131.981 27.4937 137.95C23.5282 133.589 21.5218 129.263 16.6352 123.834C9.58626 134.625 17.1806 145.299 18.916 147.18C24.053 152.712 29.4355 157.838 32.9228 161.908C37.4423 165.708 42.8023 167.584 54.2062 165.096C48.2341 159.667 42.8706 156 40.6332 153.695C45.2595 149.727 61.9176 134.475 73.6441 122.748C82.6428 113.75 91.8245 107.113 97.5326 101.945"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="253.5518035888672"
          strokeDashoffset="0"
          style={{
            transition:
              "strokeDashoffset 1.4s cubic-bezier(0.515, 0.335, 0.505, 0.8)",
          }}
        ></path>
        <path
          d="M17.1806 146.095C11.2085 151.524 1.04804 159.64 3.06253 162.381C7.35446 168.22 10.3097 171.478 15.5519 175.411C23.1004 168.042 27.7444 164.092 31.2965 161.107"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="61.668243408203125"
          strokeDashoffset="0"
          style={{ transition: `stroke-dashoffset 0.3s` }}
        ></path>
        <path
          d="M112.164 86.5129C117.414 82.208 125.385 75.4643 130.624 70.2254C143.654 57.1953 165.227 41.6423 175 33.5001C177.698 25.6589 183.344 17.0465 185.485 11.9942C187.626 6.94188 189.022 3.27003 187.558 3.21014C185.7 3.1341 180.749 6.84043 179.012 7.63793C172.801 10.4891 166.483 15.2502 160.511 17.9648C152.883 22.4486 128.821 45.1853 122.48 50.6814C113.828 58.1805 105.848 64.8088 97.5057 72.4107"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="229.99270629882812"
          strokeDashoffset="0"
          style={{ transition: `stroke-dashoffset 0.5s` }}
        ></path>
        <path
          d="M184.121 5.53784C184.492 5.82395 186.02 7.84721 186 7.86319C185.857 7.97744 185.392 7.843 185.255 7.81356C184.456 7.64121 184.662 8.40664 183.873 8.19316C183.201 8.01141 181.506 7.75205 181.106 7.05162C180.874 6.64511 181.223 8.6222 181.5 8.99976C182.064 9.76875 182.454 10.2203 183 10.9998C183.344 11.4909 183.813 12.9375 184 13.4998"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="15.692878723144531"
          strokeDashoffset="0"
          style={{ transition: `stroke-dashoffset 0.2s` }}
        ></path>
        <path
          d="M173.477 34.5351C173.477 34.5351 170 29.9998 167.105 25.6568C164.21 21.3138 158.988 18.9998 158.988 18.9998"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="21.54645347595215"
          strokeDashoffset="0"
          style={{ transition: `stroke-dashoffset 0.2s` }}
        ></path>
      </svg>

      <div className="flex h-full justify-evenly w-full pt-20 flex-row items-end ">
        <button className="text-white bg-[#07689E] p-2  rounded-md transition-transform duration-200 hover:scale-110">
          join game
        </button>
        <div className="flex flex-col  ">
          <input
            type="text"
            placeholder="code"
            className="outline-none border-4 w-[100px] mb-5 border-[#8B5E5E]  font-jetbrains-mono-paragraph text-gray-400 p-1 rounded-md"
          />
          <button className="text-white bg-[#8B5E5E] p-2 rounded-md transition-transform duration-200 hover:scale-110">
            make game
          </button>
        </div>
      </div>

      <h1 className="text-xl  text-[#8B5E5E] mt-10">how to play </h1>
      <div className="flex flex-col border-4 w-[400px] tracking-tighter border-opacity-50   border-[#8B5E5E]   text-gray-400 p-2 rounded-md">
        <p>split up into two teams of 2 or more players</p>
        <p>draw and guess each word before the other team</p>
        <p>replay the same words again in a frantic final round</p>
      </div>
    </div>
  );
}
