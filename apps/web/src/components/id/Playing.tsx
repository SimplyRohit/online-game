// src/components/id/Playing.tsx
import { useEffect, useState } from "react";
import { team1playing } from "../../utils/Constant";
import { ResultAction } from "@/app/actions/(db)/result";
import socket from "@/lib/socket";
export default function Playing({
  StateUpdaterresult,
  roomID,
  playerid,
}: {
  StateUpdaterresult: () => void;
  roomID: string;
  playerid: string;
}) {
  type Players =
    | {
        id: number;
        playerid: string;
        name: string;
        teamName: string;
        roomId: string;
      }[]
    | undefined;
  const [players, setPlayers] = useState<Players>([]);
  useEffect(() => {
    const Playerdata = async () => {
      const players = await ResultAction(roomID);
      setPlayers(players);
    };
    Playerdata();
  }, [roomID]);

  const teamRedPlayers = players?.filter(
    (player) => player.teamName === "teamRed"
  );
  const teamBluePlayers = players?.filter(
    (player) => player.teamName === "teamBlue"
  );

  return (
    <div className="flex w-screen h-screen xl:flex-row flex-col  ">
      <div className="flex md:flex-row flex-col xl:w-[75%] w-full h-full justify-center  md:mb-0 mb-5 md:p-5 p-2 md:mt-14 ">
        <div className="flex flex-col md:w-[700px] md:h-[500px] w-full min-h-[400px]  ">
          <div className="flex justify-between">
            <h1>_ _ _ _ _ _ _</h1>
            <button onClick={StateUpdaterresult}>Timer</button>
          </div>
          <div className="flex w-full h-full border-[2px]   border-[#8B5E5E] bg-white"></div>
        </div>

        <div className="flex flex-col   md:ml-10   md:h-[500px]  ">
          <div
            className="flex md:justify-center justify-between flex-row md:hidden md:pt-0 pt-2
           "
          >
            <input
              className="outline-none border-4 md:w-[170px] h-[40px] w-full  border-[#8B5E5E] md:rotate-3 font-jetbrains-mono-paragraph text-gray-400 p-2 rounded-md"
              type="text"
            />
            <button className="ml-2 mt-3 md:w-[50px] w-[100px]  bg-[#FAC7FF] p-2  rounded-md transition-transform duration-200 hover:scale-110">
              guess
            </button>
          </div>
          <h1 className="text-3xl text-[#8B5E5E]">team name</h1>

          <div
            className="flex flex-col
         w-full h-full  overflow-y-auto"
          >
            <p>{team1playing[0].draw?.name} is drawing</p>
            {team1playing.map((team, index) => (
              <div key={index}>
                {team.guesser?.map((player, i) => (
                  <p key={i}>{player} is guessing</p>
                ))}
              </div>
            ))}
          </div>
          <div className="md:flex md:justify-center justify-between flex-row  hidden">
            <input
              className="outline-none border-4 md:w-[170px]    border-[#8B5E5E] md:rotate-3 font-jetbrains-mono-paragraph text-gray-400 p-2 rounded-md"
              type="text"
            />
            <button className="ml-2 mt-3  bg-[#FAC7FF] p-2  rounded-md transition-transform duration-200 hover:scale-110">
              guess
            </button>
          </div>
        </div>
      </div>

      <div className="xl:h-full xl:w-0 w-full h-0 border-[1px] md:flex hidden   border-[#8B5E5E]  "></div>

      <div className="flex xl:w-[25%] w-full h-full xl:pl-0 pl-1.5 xl:justify-center  ">
        <div className="flex m-5 w-[300px] h-[300px] border-[2px]   border-[#8B5E5E] bg-white"></div>
      </div>
    </div>
  );
}
