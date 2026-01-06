import React from 'react'

const SelectedCards = ({player, removePlayer}) => {
    // console.log(player)
    const handleRemove = () => {
      removePlayer(player)
    }

  return (
    <div className='w-full border-2 border-gray-400 mt-4 p-3 flex justify-between items-center  rounded-xl'>
      <div className='flex '>
        <div className='mr-2'>
          <img src={player['player-image']} className='h-[55px] w-[55px] rounded-xl' alt="" />
        </div>
        <div>
          <h1>{player["player-name"]}</h1>
          <p>{player["batting-style"]}</p>
        </div>
      </div>
      <div onClick={handleRemove} className='cursor-pointer' >
        <img src="https://i.ibb.co.com/BvwdRx2/Frame.png" alt="" />
      </div>
      </div>
  )
}

export default SelectedCards    