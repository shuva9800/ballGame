// AdminPage.js
// import React from 'react';
// import '../App.css';
// import PhaserGame from './PhaserGame';
// import io from 'socket.io-client';

// const socket = io('http://localhost:4000'); // Connect to the Socket.io server

// function AdminPage() {
//     const handleButtonClick = (direction) => {
//         PhaserGame.moveBall(direction);
//         socket.emit('buttonPress', direction); // Emit button press to the server
//     };

//     return (
//         <div className="container">
//             <div className="button-container top">
//                 <button onClick={() => handleButtonClick('top-left')}>Top 1</button>
//                 <button onClick={() => handleButtonClick('top-right')}>Top 2</button>
//             </div>
//             <div className="content">
//                 <div className="button-container left">
//                     <button onClick={() => handleButtonClick('left-top')}>Left 1</button>
//                     <button onClick={() => handleButtonClick('left-bottom')}>Left 2</button>
//                 </div>
//                 <PhaserGame />
//                 <div className="button-container right">
//                     <button onClick={() => handleButtonClick('right-top')}>Right 1</button>
//                     <button onClick={() => handleButtonClick('right-bottom')}>Right 2</button>
//                 </div>
//             </div>
//             <div className="button-container bottom">
//                 <button onClick={() => handleButtonClick('bottom-left')}>Bottom 1</button>
//                 <button onClick={() => handleButtonClick('bottom-right')}>Bottom 2</button>
//             </div>
//         </div>
//     );
// }

// export default AdminPage;
// AdminPage.js
import React from 'react';
import '../App.css';
import PhaserGame from './PhaserGame';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Connect to the Socket.io server

function AdminPage() {
    const handleButtonClick = (direction) => {
        PhaserGame.moveBall(direction);
        socket.emit('buttonPress', direction); // Emit button press to the server
    };

    return (
        <div className="container">
            <div className="button-container top">
                <button onClick={() => handleButtonClick('top-left')}>Top 1</button>
                <button onClick={() => handleButtonClick('top-right')}>Top 2</button>
            </div>
            <div className="content">
                <div className="button-container left">
                    <button onClick={() => handleButtonClick('left-top')}>Left 1</button>
                    <button onClick={() => handleButtonClick('left-bottom')}>Left 2</button>
                </div>
                <PhaserGame />
                <div className="button-container right">
                    <button onClick={() => handleButtonClick('right-top')}>Right 1</button>
                    <button onClick={() => handleButtonClick('right-bottom')}>Right 2</button>
                </div>
            </div>
            <div className="button-container bottom">
                <button onClick={() => handleButtonClick('bottom-left')}>Bottom 1</button>
                <button onClick={() => handleButtonClick('bottom-right')}>Bottom 2</button>
            </div>
        </div>
    );
}

export default AdminPage;


