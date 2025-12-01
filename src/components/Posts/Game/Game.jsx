

const Game = ( { game }) => {

    return (
        <article className="game">
            
            <h2 className="game-title">{game.title}</h2>
            
            <ul className="game-details">
                <li className="game-li"><span>Help:</span>{game.help}</li>
                <li className="game-li"><span>Platform:</span>{game.platform}</li>
                <li className="game-li"><span>Description:</span>{game.summary}</li>
                <li className="game-li"><span>Comments:</span>0</li>
            </ul>
        </article>
    );
};

export default Game;
