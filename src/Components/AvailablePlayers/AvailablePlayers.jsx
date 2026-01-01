import React, { use } from "react";

const AvailablePlayers = ({ PlayerPromise }) => {
  const PlayerData = use(PlayerPromise);
  console.log(PlayerData);

  return (
    <>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {
        PlayerData.map(player => 
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

            <div className="flex items-center justify-between border-b-1 pb-2 border-gray-300">
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
              <button className="btn ">Choose Player</button>
            </div>
          </div>



        </div>

        )
      }



      </div>
    </>
  );
};

export default AvailablePlayers;
