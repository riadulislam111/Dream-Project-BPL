import React, { useState } from 'react';
import userImg from '../../assets/Group.png'
import userFlag from '../../assets/report-1.png'

const PlayerCard = ({ player, setAvailableBalance, availableBalance }) => {
    const [isSelected, setIsSelected] = useState(false)
     const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price.split("$").join("").split(",").join(""));
        if(availableBalance<playerPrice) {
            alert("Not Enough Coins!!")
            return
        }
        setIsSelected(true)
                            setAvailableBalance(availableBalance - playerPrice)
     }


    return (
        <div>
            <div className="card bg-base-100 shadow-sm p-4">
                <figure>
                    <img className='w-full h-[300px] object-cover'
                        src={player.player_image}
                        alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div className='flex'>
                        <img src={userImg} alt="" /><h2 className="card-title ml-2">{player.player_name}</h2>
                    </div>
                    <div className='flex justify-between mt-4 border-b-1 border-gray-400 pb-2'>
                        <div className='flex items-center'>
                            <img className="w-[20px] h-[20px]" src={userFlag} alt="" />
                            <span className='ml-2'>{player.player_country}</span>
                        </div>
                        <button className='btn'>{player.playing_role}</button>
                    </div>
                    <div className='flex justify-between font-bold mt-4'>
                        <span>Rating</span>
                        <span>{player.rating}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-bold'>{player.bating_style}</span>
                        <span>{player.bowling_style}</span>
                    </div>

                    <div className="card-actions mt-4 flex justify-between items-center">
                        <p className='font-bold'>Price: ${player.price}</p>
                        <button disabled={isSelected} onClick={() => {handleSelected(player)
                            
                        }} className="btn">{isSelected === true ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;