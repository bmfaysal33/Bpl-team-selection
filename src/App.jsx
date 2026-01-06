import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import Navbar from "./Components/Navbar";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const PlayerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    // console.log(p)

    const filteredData = purchasedPlayers.filter(
      (ply) => ply["player-name"] !== p["player-name"]
    );
    // console.log(filteredData)
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + parseInt(p.price.split("USD").join("").split(",").join("").split("$").join("")))
  };
  // console.log(purchasedPlayers)

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle
            ? "Available Players"
            : `Selected Player (${purchasedPlayers.length}/6)`}
        </h1>

        <div>
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4  border border-gray-400 rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            PlayerPromise={PlayerPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
    </>
  );
}
export default App;
