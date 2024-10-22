"use client";
import { team1, team2 } from "@/utils/Constant";

export default function Team({
  StateUpdaterplaying,
}: {
  StateUpdaterplaying: () => void;
}) {
  return (
    <div className="flex flex-col h-full w-full mt-10 items-center justify-center">
      <h1 className="text-5xl text-center text-[#8B5E5E]">draw battle!</h1>
      <p className="opacity-40 text-center mb-16">
        two teams of drawers face off with a frantic final round
      </p>

      <div className="flex h-full justify-evenly w-full  flex-row items-end ">
        <div className="flex flex-col ">
          <h1 className="text-[#8B5E5E] text-3xl  mb-3">Team 1</h1>
          {team1.map((team, index) => (
            <p
              className="p-1 text-xl tracking-wider font-bold opacity-50"
              key={index}
            >
              {team}
            </p>
          ))}
          <button className=" mt-3 bg-[#FAC7FF] p-2  rounded-md transition-transform duration-200 hover:scale-110">
            join team
          </button>
        </div>
        <div className="flex  flex-col  ">
          <h1 className="text-[#8B5E5E] text-3xl mb-3">Team 2</h1>
          {team2.map((team, index) => (
            <p
              className="p-1 text-xl  tracking-wider font-bold opacity-50"
              key={index}
            >
              {team}
            </p>
          ))}
          <button className=" mt-3 bg-[#FAC7FF] p-2  rounded-md transition-transform duration-200 hover:scale-110">
            join team
          </button>
        </div>
      </div>
      <button
        onClick={() => StateUpdaterplaying()}
        className="text-white bg-[#8B5E5E] mt-20 p-2 rounded-md transition-transform duration-200 hover:scale-110"
      >
        Start Game
      </button>
    </div>
  );
}
