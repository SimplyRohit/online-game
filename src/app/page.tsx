"use client";
import axios from "axios";

// checking cookies if exist if not this will redirct to /name
const CheckCookies = async () => {
  try {
    const response = await axios.get("/api/checkCokkies");
    console.log(response.data);
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
    <div>
      <h1 className="text-xl">start</h1>
    </div>
  );
}
