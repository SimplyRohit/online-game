import { team1score, team2score } from "@/utils/Constant";
export default function Result() {
  return (
    <div className="flex h-screen w-screen mt-10  items-center flex-col">
      <h1 className="text-5xl pb-5">Result</h1>
      <div className="flex flex-row justify-evenly w-full ">
        <div>
          <h1 className="text-2xl">team name score</h1>
          <div className="flex flex-col md:items-start items-center">
            {team1score.map((score, index) => (
              <p className="text-xl py-2" key={index}>
                {score}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl">team name score</h1>
          <div className="flex flex-col md:items-start items-center">
            {team2score.map((score, index) => (
              <p className="text-xl py-2" key={index}>
                {score}
              </p>
            ))}
          </div>
        </div>
      </div>

      <h1 className="text-5xl pt-10">Winner</h1>
      <p className="text-6xl pt-5"> team name</p>
    </div>
  );
}
