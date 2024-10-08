


import React from 'react';
import '../App.css';
import PhaserGame from './PhaserGame';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';

const socket = io('https://ball-backend.onrender.com'); 

function AdminPage() {
    const handleButtonClick = (direction) => {
        PhaserGame.moveBall(direction); 
        socket.emit('buttonPress', direction);
    };

    return (
        <div className="container">
            <Link to='/guest' className='guest-btn'>GuestPage</Link>
            <div className="button-container top">
                <button onClick={() => handleButtonClick('top-left')}>Top left</button>
                <button onClick={() => handleButtonClick('top-right')}>Top right</button>
            </div>
            <div className="content">
                <div className="button-container left">
                    <button onClick={() => handleButtonClick('left-top')}>Left top</button>
                    <button onClick={() => handleButtonClick('left-bottom')}>Left bottom</button>
                </div>
                <PhaserGame />
                <div className="button-container right">
                    <button onClick={() => handleButtonClick('right-top')}>Right top</button>
                    <button onClick={() => handleButtonClick('right-bottom')}>Right bottom</button>
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

