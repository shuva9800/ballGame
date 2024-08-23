import React, { useEffect, useState } from 'react';
import PhaserGame from './PhaserGame';
import io from 'socket.io-client';

const socket = io('https://gameappbackend.onrender.com'); // Connect to the Socket.io server



function GuestPage() {
    const [buttonPresses, setButtonPresses] = useState([]);

    useEffect(() => {
        socket.on('buttonPress', (direction) => {
            setButtonPresses((prev) => [...prev, direction]);
        });
   
        return () => {
            socket.off('buttonPress');
        };
    }, []);
    const handleButtonClick = (direction) => {
        console.log("not allow") 
    };
    return (
        <div className="container">
            <div className="button-container top">
                <button disabled  onClick={() => handleButtonClick('top-left')}>Top left</button>
                <button disabled onClick={() => handleButtonClick('top-right')}>Top right</button>
            </div>
            <div className="content">
                <div className="button-container left">
                    <button disabled onClick={() => handleButtonClick('left-top')}>Left top</button>
                    <button disabled onClick={() => handleButtonClick('left-bottom')}>Left buttom</button>
                </div>
                <PhaserGame />
                <div className="button-container right">
                    <button disabled onClick={() => handleButtonClick('right-top')}>Right top</button>
                    <button disabled onClick={() => handleButtonClick('right-bottom')}>Right buttom</button>
                </div>
            </div>
            <div className="button-container bottom">
                <button disabled onClick={() => handleButtonClick('bottom-left')}>Bottom left</button>
                <button disabled onClick={() => handleButtonClick('bottom-right')}>Bottom right</button>
            </div>
            <div className="button-presses">
                <h3>Button Presses:</h3>
                <ul>
                    {buttonPresses.map((press, index) => (
                        <span key={index}>{press}   ,</span>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default GuestPage;
