

import React from 'react';
import '../App.css';
import PhaserGame from './PhaserGame';
import io from 'socket.io-client';

const socket = io('https://gameappbackend.onrender.com'); // Connect to the Socket.io server

function AdminPage() {
    const handleButtonClick = (direction) => {
        PhaserGame.moveBall(direction);
        socket.emit('buttonPress', direction); // Emit button press to the server
    };

    return (
        <div className="container">
            <div className="button-container top">
                <button onClick={() => handleButtonClick('top-left')}>Top left</button>
                <button onClick={() => handleButtonClick('top-right')}>Top right</button>
            </div>
            <div className="content">
                <div className="button-container left">
                    <button onClick={() => handleButtonClick('left-top')}>Left top</button>
                    <button onClick={() => handleButtonClick('left-bottom')}>Left buttom</button>
                </div>
                <PhaserGame />
                <div className="button-container right">
                    <button onClick={() => handleButtonClick('right-top')}>Right top</button>
                    <button onClick={() => handleButtonClick('right-bottom')}>Right buttom</button>
                </div>
            </div>
            <div className="button-container bottom">
                <button onClick={() => handleButtonClick('bottom-left')}>Bottom left</button>
                <button onClick={() => handleButtonClick('bottom-right')}>Bottom right</button>
            </div>
        </div>
    );
}

export default AdminPage;

