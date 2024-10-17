//src/app/page.tsx
"use client";
import axios from "axios";
import SvgIcon from "../../public/svg/Mainpage";
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
      <p className="opacity-40 text-center mb-16">
        two teams of drawers face off with a frantic final round
      </p>
      <div>
        <SvgIcon />
      </div>
      <div className="flex h-full justify-evenly w-full pt-20 flex-row items-end ">
        <button className="text-white bg-[#07689E] p-2  rounded-md transition-transform duration-200 hover:scale-110">
          make game
        </button>
        <div className="flex flex-col  ">
          <input
            type="text"
            placeholder="code"
            className="outline-none border-b-4 bg-[#E6D5BC] w-[100px] mb-3 border-[#bb9494] px-5  font-jetbrains-mono-paragraph text-center text-gray-400 p-1 "
          />
          <button className="text-white bg-[#8B5E5E] p-2 rounded-md transition-transform duration-200 hover:scale-110">
            join game
          </button>
        </div>
      </div>

      <h1 className="text-xl  text-[#8B5E5E] mt-8">how to play </h1>
      <div className="flex flex-col border-4 mx-2 tracking-tighter border-opacity-50 gap-3 text-[13px] border-[#8B5E5E]   text-gray-600 p-2 rounded-md">
        <p>split up into two teams of 2 or more players</p>
        <p>draw and guess each word before the other team</p>
        <p>replay the same words again in a frantic final round</p>
      </div>
    </div>
  );
}
