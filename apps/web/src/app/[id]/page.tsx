// src/app/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { StateCheckerAction } from "../actions/(state)/StateChecker";
import { StateUpdaterAction } from "../actions/(state)/StateUpdater";
import { CheckCookiesAction } from "../actions/(cookies)/checkCokkies";
import Team from "../../components/id/Team";
import Playing from "../../components/id/Playing";
import Result from "../../components/id/Result";
import { io, Socket } from "socket.io-client";
const socket: Socket = io("http://localhost:9000");
export default function Page() {
  const router = useRouter();
  const { id } = useParams();
  const roomId = id as string;
  const [state, setState] = useState<string>("");

  // checking cookies if exist if not this will redirct to /name
  const CheckCookies = async () => {
    try {
      const response = await CheckCookiesAction();

      if (response === "no") {
        router.push("/name");
      } else {
        setPlayerid(response.id);
        setplayername(response.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //this will check state and render components

  const StateChecker = async () => {
    try {
      const res = await StateCheckerAction(roomId as string);
      setState(res.state as string);
      if (res.message === "Room does not exist") {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CheckCookies();
    StateChecker();
  }, [roomId]);
  const [playerid, setPlayerid] = useState<string>("");
  const [playername, setplayername] = useState<string>("");

  // stateupdater + /PLAYING

  const StateUpdaterplaying = async () => {
    const newstate = "playing";
    try {
      const res = await StateUpdaterAction(roomId as string, newstate);
      if (res.message === "Room updated") {
        setState("playing");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // stateupdater + /RESULT
  const StateUpdaterresult = async () => {
    const newstate = "result";
    const res = await StateUpdaterAction(roomId as string, newstate);
    if (res.message === "Room updated") {
      setState("result");
    }
    console.log(res);
  };

  return (
    <>
      {state === "team" && (
        <Team
          socket={socket}
          roomID={roomId}
          playerid={playerid}
          playername={playername}
          StateUpdaterplaying={StateUpdaterplaying}
        />
      )}
      {state === "playing" && (
        <Playing
          playerid={playerid}
          roomID={roomId}
          socket={socket}
          StateUpdaterresult={StateUpdaterresult}
        />
      )}
      {state === "result" && <Result />}
    </>
  );
}
