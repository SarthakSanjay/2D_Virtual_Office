import { Game as MainGame } from './scenes/Game';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import { Test } from './scenes/Test';

const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 503,
    height: 384,
    parent: 'game-container',
    backgroundColor: '#0c103d',
    scene: [
        Preloader,
        MainGame,
        Test
    ],
    scale: {
        zoom: 2
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;