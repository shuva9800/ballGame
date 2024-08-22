import React, { useEffect, useState } from 'react';
import PhaserGame from './PhaserGame';
import io from 'socket.io-client';

const socket = io('https://gameappbackend.onrender.com'); // Connect to the Socket.io server



function GuestPage() {
    const [buttonPresses, setButtonPresses] = useState([]);

    useEffect(() => {
        // Listen for button press events from the server
        socket.on('buttonPress', (direction) => {
            setButtonPresses((prev) => [...prev, direction]);
        });
   
        return () => {
            socket.off('buttonPress');
        };
    }, []);

    return (
        <div className="container">
            <PhaserGame />
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
