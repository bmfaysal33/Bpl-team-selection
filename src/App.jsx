import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import Navbar from "./Components/Navbar";
import { Suspense } from "react";

function App() {
  const fetchPlayers = async () => {
    const res = await fetch("/players.json");
    return res.json();
  };
  const PlayerPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers PlayerPromise={PlayerPromise}></AvailablePlayers>
      </Suspense>


      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}
export default App;
