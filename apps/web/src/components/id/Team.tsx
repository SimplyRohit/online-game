// src/components/id/Team.tsx
"use client";
import { TeamAction } from "@/app/actions/(db)/team";
import { useEffect, useState } from "react";
import socket from "@/lib/socket";

export default function Team({
  StateUpdaterplaying,
  playerid,
  playername,
  roomID,
}: {
  StateUpdaterplaying: () => void;
  playerid: string;
  playername: string;
  roomID: string;
}) {
  type Players = {
    id: string;
    name: string;
    teamName: string;
    roomId: string | null;
  }[];
  const [players, setPlayers] = useState<Players>([]);

  useEffect(() => {
    socket.emit("join-room", roomID);

    socket.on("update-players", (updatedPlayers: Players) => {
      setPlayers(updatedPlayers);
    });
    return () => {
      socket.off("update-players");
    };
  }, [roomID]);

  const joinTeam = async (teamName: "teamRed" | "teamBlue") => {
    await TeamAction(roomID, teamName, playerid, playername);
    socket.emit("join-team", roomID);
  };

  const teamRedPlayers = players?.filter(
    (player) => player.teamName === "teamRed"
  );
  const teamBluePlayers = players?.filter(
    (player) => player.teamName === "teamBlue"
  );
  return (
    <div className="flex flex-col h-full w-full mt-10 items-center justify-center">
      <h1 className="text-5xl text-center text-[#8B5E5E]">draw battle!</h1>
      <p className="opacity-40 text-center mb-16">
        two teams of drawers face off with a frantic final round
      </p>

      <div className="flex h-full justify-evenly w-full  flex-row items-end ">
        <div className="flex flex-col ">
          <h1 className="text-[#8B5E5E] text-3xl  mb-3">Team 1</h1>
          {teamRedPlayers.map((player, index) => (
            <p
              className="p-1 text-xl tracking-wider font-bold opacity-50"
              key={index}
            >
              {player.name}
            </p>
          ))}
          <button
            onClick={() => joinTeam("teamRed")}
            className=" mt-3 bg-[#FAC7FF] p-2  rounded-md transition-transform duration-200 hover:scale-110"
          >
            join team
          </button>
        </div>
        <div className="flex  flex-col  ">
          <h1 className="text-[#8B5E5E] text-3xl mb-3">Team 2</h1>
          {teamBluePlayers.map((player, index) => (
            <p
              className="p-1 text-xl  tracking-wider font-bold opacity-50"
              key={index}
            >
              {player.name}
            </p>
          ))}
          <button
            onClick={() => joinTeam("teamBlue")}
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
