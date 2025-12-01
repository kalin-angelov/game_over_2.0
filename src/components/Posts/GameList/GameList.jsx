import { useState } from "react";

import Game from "../Game/Game";

import db from "../../../db.json";

const GameList = () => {

    const [gameList, setGameList] = useState(db);
   
    return (
        <>
            {gameList.length !== 0 ? 
            
                gameList.map(game => (
                    <Game key={game._id} game={game}/>
                ))

                :

                <p>No post are found.</p>
            }
        </>
    );
};

export default GameList;
