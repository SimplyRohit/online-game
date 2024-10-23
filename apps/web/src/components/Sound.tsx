"use client";
import {
  VolumeOff,
  Volume2,
  Headphones,
  HeadphoneOff,
  LogOut,
} from "lucide-react";
import { useState } from "react";
export default function Sound() {
  const [isSound, setSound] = useState(true);
  const [isMusic, setMusic] = useState(true);
  return (
    <div className="z-10 absolute right-0 top-0 m-5">
      <div className=" flex items-center justify-end">
        <h1 className="text-xl md:block hidden opacity-40">Exit</h1>
        <LogOut className="w-6 mb-2 ml-2 text-[#8B5E5E]" />
      </div>
      <div className=" flex items-center justify-end">
        <h1 className="text-xl md:block hidden opacity-40 ">Sound</h1>
        {isSound ? (
          <Volume2
            onClick={() => {
              setSound(false);
            }}
            className="w-6 mb-2 ml-2 text-[#8B5E5E]"
          />
        ) : (
          <VolumeOff
            onClick={() => {
              setSound(true);
            }}
            className="w-6 mb-2 ml-2 text-[#8B5E5E]"
          />
        )}
      </div>
      <div className=" flex items-center justify-end">
        <h1 className="text-xl md:block hidden opacity-40 ">Music</h1>
        {isMusic ? (
          <Headphones
            onClick={() => {
              setMusic(false);
            }}
            className="w-6 mb-2 ml-2 text-[#8B5E5E]"
          />
        ) : (
          <HeadphoneOff
            onClick={() => {
              setMusic(true);
            }}
            className="w-6 mb-2 ml-2 text-[#8B5E5E]"
          />
        )}
      </div>
    </div>
  );
}
