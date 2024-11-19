import { Game as MainGame } from './scenes/Game';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';

const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 512,
    height: 384,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Preloader,
        MainGame,
    ],
    scale: {
        zoom: 2
    },
    physics: {
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    }
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;