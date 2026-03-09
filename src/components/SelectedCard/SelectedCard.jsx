import React from 'react';

const SelectedCard = ({player}) => {
    // console.log(player)
    return (
         <div className='border-2 my-5 rounded-xl border-gray-300 flex justify-between items-center p-3'>
                <div className='flex items-center'>
                <img src={player.player_image} className='[50px] w-[50px] rounded-xl' alt="" />
                <div className='ml-2'>
                    <h1>{player.player_name}</h1>
                    <p className='text-xs'>{player.playing_role}</p>
                </div>
            </div>
            <div> 
                <img src="https://i.ibb.co.com/vCxQ4pHK/Frame.png" alt="" />
            </div>
            </div>
    );
};

export default SelectedCard;