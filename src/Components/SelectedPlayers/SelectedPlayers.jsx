import React, { Suspense } from 'react'
import SelectedCards from '../SelectedCards/SelectedCards'

const SelectedPlayers = ({purchasedPlayers, removePlayer}) => {
  // console.log(purchasedPlayers)
  return (
    <div className='max-w-[1200px] mx-auto'>
      
      {
        purchasedPlayers.map(player => 
          <Suspense fallback={<h1>Wait info is coming...</h1>}>
            <SelectedCards removePlayer={removePlayer} player={player}></SelectedCards>

          </Suspense>
      )
      }


      </div>
  )
}

export default SelectedPlayers