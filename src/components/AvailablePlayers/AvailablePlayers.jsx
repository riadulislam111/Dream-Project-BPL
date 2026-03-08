import React, { use } from 'react';
import PlayerCard from '../PlayerCard/playerCard';


const AvailablePlayers = ({playersPromise, setAvailableBalance, availableBalance}) => {

 const playerData = use(playersPromise)
 console.log(playerData)

    return (
        
        <div className="navbar max-w[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
           {
            playerData.map(player=><PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
           }
        </div>
    );
};

export default AvailablePlayers;
