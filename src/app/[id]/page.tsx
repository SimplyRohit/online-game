"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { StateCheckerAction } from "../actions/(state)/StateChecker";
import { StateUpdaterAction } from "../actions/(state)/StateUpdater";
import { CheckCookiesAction } from "../actions/(cookies)/checkCokkies";
import Team from "@/components/id/Team";
import Playing from "@/components/id/Playing";
import Result from "@/components/id/Result";

// checking cookies if exist if not this will redirct to /name

const CheckCookies = async () => {
  try {
    const response = await CheckCookiesAction();

    if (response === "no") {
      window.location.href = "/name";
    }
  } catch (error) {
    console.log(error);
  }
};

export default function Page() {
  const { id } = useParams();
  const [state, setState] = useState<string>("");

  //this will check state and render components
  useEffect(() => {
    CheckCookies();
    const StateChecker = async () => {
      const roomId = id as string;
      try {
        const res = await StateCheckerAction(roomId);
        setState(res.state as string);
        if (res.message === "Room does not exist") {
          window.location.href = "/";
        }
      } catch (error) {
        console.log(error);
      }
    };

    StateChecker();
  });

  // stateupdater + /PLAYING

  const StateUpdaterplaying = async () => {
    const newstate = "playing";
    const roomId = id;
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
    const roomId = id;
    const newstate = "result";
    const res = await StateUpdaterAction(roomId as string, newstate);
    if (res.message === "Room updated") {
      setState("result");
    }
    console.log(res);
  };

  return (
    <>
      {state === "team" && <Team StateUpdaterplaying={StateUpdaterplaying} />}
      {state === "playing" && (
        <Playing StateUpdaterresult={StateUpdaterresult} />
      )}
      {state === "result" && <Result />}
    </>
  );
}
