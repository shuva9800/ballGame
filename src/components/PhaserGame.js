
// PhaserGame.js
import React, { useEffect } from 'react';
import Phaser from 'phaser';
import io from 'socket.io-client';

const socket = io('https://gameappbackend.onrender.com'); // Connect to the Socket.io server

function PhaserGame() {
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 400,
            height: 400,
            backgroundColor: '#87CEEB',
            parent: 'phaser-game',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: false,
                },
            },
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
        };

        const game = new Phaser.Game(config);
        let ball;

        function preload() {
            this.load.image('ball', 'ball.svg');
        }

        function create() {
            ball = this.physics.add.image(200, 200, 'ball');
            ball.setCollideWorldBounds(true);
            ball.setBounce(1, 1);
            ball.setVelocity(200, 200);
        }

        function update() {
            // No additional logic needed here for now
        }

        PhaserGame.moveBall = function (direction) {
            const speed = 200;
            switch (direction) {
                case 'top-left':
                    ball.setVelocity(-speed, -speed);
                    break;
                case 'top-right':
                    ball.setVelocity(speed, -speed);
                    break;
                case 'bottom-left':
                    ball.setVelocity(-speed, speed);
                    break;
                case 'bottom-right':
                    ball.setVelocity(speed, speed);
                    break;
                case 'left-top':
                    ball.setVelocity(-speed, -speed / 2);
                    break;
                case 'left-bottom':
                    ball.setVelocity(-speed, speed / 2);
                    break;
                case 'right-top':
                    ball.setVelocity(speed, -speed / 2);
                    break;
                case 'right-bottom':
                    ball.setVelocity(speed, speed / 2);
                    break;
                default:
                    ball.setVelocity(0, 0);
                    break;
            }
        };

        // Listen for button press events from the server
        socket.on('buttonPress', (direction) => {
            PhaserGame.moveBall(direction);
        });

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div id="phaser-game"></div>;
}

export default PhaserGame;
