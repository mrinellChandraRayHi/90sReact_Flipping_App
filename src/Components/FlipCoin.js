import React, { useState } from 'react';
import Coin from './Coin';

const defaultProps = {
    coins: [
        {
        side: 'head',
        imgSrc:
            'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'
        },
        {
        side: 'tail',
        imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
        }
    ]
};

const FlipCoin = () => {
    const [currFace, setCurrFace] = useState(null);
    const [totalFlips, setTotalFlips] = useState(0);
    const [heads, setHeads] = useState(0);

    const choice = (arr) => {
        const randomIdx = Math.floor(Math.random() * arr.length);
        return arr[randomIdx];
    };

    const flipCoin = () => {
        const newFace = choice(defaultProps.coins);
        setCurrFace(newFace);
        setTotalFlips((prevTotalFlips) => prevTotalFlips + 1);
        setHeads((prevHeads) => prevHeads + (newFace.side === 'head' ? 1 : 0));
    };

    return (
        <div>
        <h2>Let's flip a coin</h2>
        {currFace && <Coin info={currFace} />}
        <button onClick={flipCoin}>Flip Me!</button>
        <p>
            Out of {totalFlips} flips, there have been {heads} heads and {totalFlips - heads} tails
        </p>
        </div>
    );
};

export default FlipCoin;
