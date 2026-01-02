import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ PlayerPromise, setAvailableBalance }) => {
  const PlayerData = use(PlayerPromise);
  console.log(PlayerData);

  return (
    <>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {
        PlayerData.map(player => 
      <PlayerCard setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>
        )
      }



      </div>
    </>
  );
};

export default AvailablePlayers;
