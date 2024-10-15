"use client";
import axios from "axios";
import { useState } from "react";
import { cn } from "@/lib/utils";
export default function Name() {
  const [name, setName] = useState("");

  // this will make a api call to /api/SetCookies and setname in cookies
  const SetCookies = async () => {
    try {
      const response = await axios.post("/api/SetCookies", { name });
      if (response.data.message === "Cookie set successfully") {
        window.location.href = "/";
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col mt-[150px] items-center justify-center">
      <h1 className="text-xl text-[#8B5E5E] mb-3">What is Your Name ?</h1>
      <input
        className="outline-none border-4 w-[200px] mb-5 border-[#8B5E5E] rotate-3 font-jetbrains-mono-paragraph text-gray-400 p-2 rounded-md"
        type="text"
        placeholder="type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          SetCookies();
        }}
        className={cn(
          `text-white bg-[#07689E] p-2 rounded-md transition-transform duration-200 hover:scale-110`
        )}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}
