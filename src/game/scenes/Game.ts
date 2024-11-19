import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameText: Phaser.GameObjects.Text;

    constructor() {
        super('Game');
    }

    create() {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0xB43757);


        const map: any = this.make.tilemap({ key: 'room' })
        const tileset = map.addTilesetImage('virtualOffice', 'tiles', 16, 16, 1, 2)
        map.createLayer("ground", tileset)
        map.createLayer('walls', tileset)
        map.createLayer('walls2', tileset)

        EventBus.emit('current-scene-ready', this);
    }

}