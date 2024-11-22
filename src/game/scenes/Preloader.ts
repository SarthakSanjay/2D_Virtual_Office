import { Scene } from 'phaser';

export class Preloader extends Scene {
    constructor() {
        super('Preloader');
    }

    init() {
    }

    preload() {

        this.load.image('beach_tile', 'outdoor/Beach_Tile.png')
        this.load.image('bridge', 'outdoor/Bridge_Wood.png')
        this.load.image('cliff_tile', 'outdoor/Cliff_Tile.png')
        this.load.image('fences', 'outdoor/Fences.png')
        this.load.image('tree', 'outdoor/Oak_Tree.png')
        this.load.image('tree_small', 'outdoor/Oak_Tree_Small.png')
        this.load.image('outdoor_decor', 'outdoor/Outdoor_Decor_Free.png')
        this.load.image('water_tile', 'outdoor/Water_Tile.png')
        this.load.image('interior2', 'interior/interior2.png')
        this.load.image('indoor', 'interior/room_extruded.png')
        this.load.image('interior', 'interior/interior_extruded.png')

        this.load.tilemapTiledJSON('map', 'map/map.json')

        //man character
        this.load.atlas('idle', 'character/idle.png', 'character/idle.json')

        this.load.atlas('run', 'character/run.png', 'character/run.json')

        this.load.atlas('man-phone', 'character/man_phone.png', 'character/man_phone.json')

        this.load.atlas('sit', 'character/sit1.png', 'character/sit1.json')
        this.load.atlas('sit2', 'character/sit2.png', 'character/sit2.json')
        this.load.atlas('sit3', 'character/sit3.png', 'character/sit3.json')

    }

    create() {
        this.scene.start('Game');
    }
}