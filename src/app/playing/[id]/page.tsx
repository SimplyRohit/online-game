import { team1playing } from "@/utils/Constant";

export default function Playing() {
  return (
    <div className="flex flex-row h-full w-full mt-10 justify-center">
      <div className="flex flex-row">
        <div className="flex flex-col ">
          <div className="flex justify-between flex-row">
            <h1>_ _ _ _ _ _ _</h1>
            <h1>Timer</h1>
          </div>
          <div className="flex w-[400px] h-[400px] bg-white"></div>
        </div>
        <div className="flex flex-col ml-10 ">
          <div className="flex  flex-row">
            <h1>team name</h1>
          </div>

          <div
            className="flex flex-col
         w-full h-full overflow-y-auto"
          >
            <h1>{team1playing[0].draw?.name} is drawing</h1>

            {team1playing.map((team, index) => (
              <div key={index}>
                {team.guesser?.map((player, i) => (
                  <p key={i}>{player} is guessing</p>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-row">
            <input
              className="outline-none border-4 w-[200px] mb-5 border-[#8B5E5E] rotate-3 font-jetbrains-mono-paragraph text-gray-400 p-2 rounded-md"
              type="text"
            />
            <button className="ml-2 mt-3 bg-[#FAC7FF] p-2  rounded-md transition-transform duration-200 hover:scale-110">
              guess
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="h-[400px] border-[1px] border-[#8B5E5E] mx-10"></div>
        <div className="flex w-[400px] h-[400px] bg-white"></div>
      </div>
    </div>
  );
}
