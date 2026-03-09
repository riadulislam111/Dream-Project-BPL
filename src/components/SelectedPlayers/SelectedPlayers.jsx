import React from 'react';
import SelectedCard from '../SelectedCard/selectedCard';




const SelectedPlayers = ({ purchasedPlayers }) => {
    // console.log(purchasedPlayers)
    return (
        <div className='max-w[1200px] mx-auto'>
           {
            purchasedPlayers.map(player =>
<SelectedCard key={player.id} player={player}></SelectedCard>
)
           }        
           
           
           
           </div>
    );
};

export default SelectedPlayers;