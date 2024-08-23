import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import io from 'socket.io-client';

const socket = io('https://gameappbackend.onrender.com'); 

function PhaserGame() {
    const gameRef = useRef(null);
    const ballRef = useRef(null);
    const isMovingRef = useRef(false); 

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
                preload,
                create,
                update,
            },
        };

        gameRef.current = new Phaser.Game(config);

        function preload() {
            this.load.image('ball', 'ball.svg');
        }

        function create() {
            ballRef.current = this.physics.add.image(200, 200, 'ball');
            ballRef.current.setCollideWorldBounds(true);
            ballRef.current.setBounce(1, 1);
            ballRef.current.setVelocity(200, 200);
        }

        function update() {
           
        }

        PhaserGame.moveBall = (direction) => {
            if (isMovingRef.current) return; 

            isMovingRef.current = true; 
            const ball = ballRef.current;
            const speed = 300;

            switch (direction) {
                case 'top-left':
                    ball.setPosition(100, 50);
                    ball.setVelocity(-speed, -speed);
                    break;
                case 'top-right':
                    ball.setPosition(300, 50);
                    ball.setVelocity(speed, -speed);
                    break;
                case 'bottom-left':
                    ball.setPosition(50, 350);
                    ball.setVelocity(-speed, speed);
                    break;
                case 'bottom-right':
                    ball.setPosition(350, 350);
                    ball.setVelocity(speed, speed);
                    break;
                case 'left-top':
                    ball.setPosition(50, 50);
                    ball.setVelocity(-speed, -speed / 2);
                    break;
                case 'left-bottom':
                    ball.setPosition(50, 350);
                    ball.setVelocity(-speed, speed / 2);
                    break;
                case 'right-top':
                    ball.setPosition(350, 50);
                    ball.setVelocity(speed, -speed / 2);
                    break;
                case 'right-bottom':
                    ball.setPosition(350, 350);
                    ball.setVelocity(speed, speed / 2);
                    break;
                default:
                    ball.setVelocity(0, 0);
                    break;
            }

            // Reset the moving flag after a short delay 
            setTimeout(() => {
                isMovingRef.current = false;
            }, 300);
        };

        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
            }
        };
    }, []);

    useEffect(() => {
        const handleButtonPress = (direction) => {
            PhaserGame.moveBall(direction);
        };

        socket.on('buttonPress', handleButtonPress);

        return () => {
            socket.off('buttonPress', handleButtonPress);
        };
    }, []);

    return <div id="phaser-game"></div>;
}

export default PhaserGame;




