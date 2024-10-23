// src/components/id/Team.tsx
"use client";
import { useParams } from "next/navigation";
import { TeamAction } from "../../app/actions/(db)/team";
import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// const socket = io("http://localhost:3000/api/teamSocket/socket.ts");

export default function Team({
  StateUpdaterplaying,
}: {
  StateUpdaterplaying: () => void;
}) {
  const { id } = useParams();
  const roomId = id;
  const [room, setRoom] = useState<{
    teamRed: {
      players: {
        id: string;
        name: string;
      }[];
      points: number;
    };
    teamBlue: {
      players: {
        id: string;
        name: string;
      }[];
      points: number;
    };
  }>();

  // gonna use websocket for update player teams
  // useEffect(() => {
  //   socket.emit("joinRoom", roomId);
  //   socket.emit("startWatchingRoom", roomId);
  //   socket.on("roomUpdate", (updatedRoom) => {
  //     console.log("Room updated:", updatedRoom);
  //     setRoom(updatedRoom);
  //   });
  //   return () => {
  //     socket.disconnect();
  //   };
  // });

  const TeamRed = async () => {
    const teamName = "teamRed";
    await TeamAction(roomId as string, teamName);
  };
  const TeamBlue = async () => {
    const teamName = "teamBlue";
    await TeamAction(roomId as string, teamName);
  };

  return (
    <div className="flex flex-col h-full w-full mt-10 items-center justify-center">
      <h1 className="text-5xl text-center text-[#8B5E5E]">draw battle!</h1>
      <p className="opacity-40 text-center mb-16">
        two teams of drawers face off with a frantic final round
      </p>

      <div className="flex h-full justify-evenly w-full  flex-row items-end ">
        <div className="flex flex-col ">
          <h1 className="text-[#8B5E5E] text-3xl  mb-3">Team 1</h1>
          {room?.teamRed.players.map((player, index) => (
            <p
              className="p-1 text-xl tracking-wider font-bold opacity-50"
              key={index}
            >
              {player.name}
            </p>
          ))}
          <button
            onClick={TeamRed as () => void}
            className=" mt-3 bg-[#FAC7FF] p-2  rounded-md transition-transform duration-200 hover:scale-110"
          >
            join team
          </button>
        </div>
        <div className="flex  flex-col  ">
          <h1 className="text-[#8B5E5E] text-3xl mb-3">Team 2</h1>
          {room?.teamBlue.players.map((player, index) => (
            <p
              className="p-1 text-xl  tracking-wider font-bold opacity-50"
              key={index}
            >
              {player.name}
            </p>
          ))}
          <button
            onClick={TeamBlue as () => void}
            className=" mt-3 bg-[#FAC7FF] p-2  rounded-md transition-transform duration-200 hover:scale-110"
          >
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
