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
        this.load.atlas('man', 'character/idle.png', 'character/idle.json')

        this.load.atlas('run', 'character/run.png', 'character/run.json')

        this.load.atlas('man-phone', 'character/man_phone.png', 'character/man_phone.json')

        this.load.atlas('man-sit1', 'character/sit1.png', 'character/sit1.json')
        this.load.atlas('man-sit2', 'character/sit2.png', 'character/sit2.json')
        this.load.atlas('man-sit3', 'character/sit3.png', 'character/sit3.json')

    }

    create() {
        this.scene.start('Game');
    }
}