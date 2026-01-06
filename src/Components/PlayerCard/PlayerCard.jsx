import React, { useState } from "react";
import { toast } from "react-toastify";

const PlayerCard = ({ player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);
  // console.log(player)
  const handleSelected = (playerData) => {
    const playerPrice =  parseInt(playerData.price.split("USD").join("").split(",").join("").split("$").join(""));
    if(availableBalance<playerPrice){
      toast("Not enough coins");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, playerData])
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          className=" rounded-xl object-cover h-[300px] w-full"
          src={player["player-image"]}
          alt="Player"
        />
      </figure>

      <div className="card-body">
        <div className="flex items-center ">
          <img src="public/user-1.png" alt="" />
          <h2 className="ml-4">{player["player-name"]}</h2>
        </div>

        <div className="flex items-center justify-between border-b pb-2 border-gray-300">
          <div className="flex items-center">
            <img src="public/report-1.png" alt="" />
            <p className="ml-4">{player["player-country"]}</p>
          </div>
          <button className="btn">{player["playing-role"]}</button>
        </div>

        <div className="flex justify-between font-bold">
          <span>Rating</span>
          <span>{player["player-rating"]}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-bold">{player["batting-style"]}</span>
          <span>{player["bowling-style"]}</span>
        </div>
        <div className="flex justify-between font-bold"></div>

        <div className="card-actions flex justify-between items-center">
          <span className="font-bold">Price: {player["price"]}</span>
          <button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn ">
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
