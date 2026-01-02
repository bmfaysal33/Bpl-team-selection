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
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance]=useState(60)
  
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Available Players</h1>

        <div>
          <button onClick={()=> setToggle(true)} className={`py-3 px-4  border border-gray-400 rounded-l-2xl border-r-0 ${toggle===true? "bg-[#E7FE29]":""}`}>Available</button>
          <button onClick={()=> setToggle(false)} className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 ${toggle===false? "bg-[#E7FE29]":""}`}>Selected <span>0</span></button>
        </div>
      </div>


{
  toggle===true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers setAvailableBalance={setAvailableBalance} PlayerPromise={PlayerPromise}></AvailablePlayers>
      </Suspense>: <SelectedPlayers></SelectedPlayers>
}

      


      
    </>
  );
}
export default App;
