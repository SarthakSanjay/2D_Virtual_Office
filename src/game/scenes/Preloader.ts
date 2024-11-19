import { Scene } from 'phaser';

export class Preloader extends Scene {
    constructor() {
        super('Preloader');
    }

    init() {
    }

    preload() {
        this.load.image('tiles', 'interior/room_extruded.png')
        this.load.tilemapTiledJSON('room', 'interior/room.json')

        //man character

    }

    create() {
        this.scene.start('Game');
    }
}