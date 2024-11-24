import Phaser from "phaser";
import { createCharacterAnims } from "../anims/CharacterAnims";
import { debugDraw } from "../../utils/Debug";
import { sofaTiles } from "../character/positions";
import Man from "../character/Man";
import '../character/Man'


export class Game extends Phaser.Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    wallLayer!: Phaser.Tilemaps.TilemapLayer
    cursors: Phaser.Types.Input.Keyboard.CursorKeys
    map: Phaser.Tilemaps.Tilemap
    furniture!: any
    groundLayer: Phaser.Tilemaps.TilemapLayer
    man!: Man

    private phoneKey!: Phaser.Input.Keyboard.Key

    constructor() {
        super('Game')
    }
    preload() {
        this.cursors = this.input.keyboard!.createCursorKeys()
        // this.key = this.input.keyboard?.addKey('A')

    }

    create() {
        this.camera = this.cameras.main
        createCharacterAnims(this.anims)
        //@ts-ignore
        this.phoneKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A)

        // Create the map
        this.map = this.make.tilemap({ key: 'map' });
        // const beachTile = map.addTilesetImage('ground', 'beach_tile', 16, 16);
        const cliffTile = this.map.addTilesetImage('cliff', 'cliff_tile', 16, 16);
        const fences = this.map.addTilesetImage('walls', 'fences', 16, 16);
        const tree = this.map.addTilesetImage('tree', 'tree', 16, 16);
        const smallTree = this.map.addTilesetImage('trees-small', 'tree_small', 16, 16)
        const waterTile = this.map.addTilesetImage('river', 'water_tile', 16, 16);
        const interiorTile2 = this.map.addTilesetImage('interior2', 'interior2', 16, 16)
        const interior = this.map.addTilesetImage('interior', 'interior', 16, 16, 1, 2)
        const indoor = this.map.addTilesetImage('indoor', 'indoor', 16, 16, 1, 2)
        const walls = this.map.addTilesetImage('indoor', 'indoor', 16, 16)
        const bridge = this.map.addTilesetImage('bridge', 'bridge', 16, 16)
        const outdoorDecor = this.map.addTilesetImage('forest_decor', 'outdoor_decor', 16, 16)
        const pathTile = this.map.addTilesetImage('path', 'path', 16, 16)
        // Add layers
        // @ts-ignore
        this.groundLayer = this.map.createLayer('ground', [
            // beachTile,
            cliffTile, waterTile, interiorTile2, indoor, pathTile])
        // @ts-ignore
        const wallLayer = this.map.createLayer('walls', [indoor, waterTile, interiorTile2, fences, walls, pathTile]);
        // @ts-ignore
        const bridgeLayer = this.map.createLayer('bridge', bridge)

        // @ts-ignore
        const treesLayer = this.map.createLayer('trees', [tree, smallTree, outdoorDecor])
        treesLayer?.setDepth(10)
        // console.log('st', smallTree)

        this.furniture = this.map.createLayer('furniture', [interiorTile2, interior])
        this.map.createLayer('furniture2', interiorTile2)
        this.map.createLayer('fur3', interiorTile2)


        wallLayer?.setCollisionByProperty({ collider: true })
        bridgeLayer?.setCollisionByProperty({ collider: true })

        const positions = [
            { x: 12, y: 19 },
            { x: 13, y: 17 },
            { x: 13, y: 19 },
            { x: 13, y: 21 },
            { x: 12, y: 22 },
            { x: 13, y: 25 },
            { x: 10, y: 21 },
            { x: 3, y: 21 },
            { x: 3, y: 20 },
            { x: 12, y: 21 },
            { x: 12, y: 25 }
        ];

        // Loop through and disable collision for these positions
        positions.forEach(pos => {
            const tile = wallLayer?.getTileAt(pos.x, pos.y);
            if (tile) {
                tile.setCollision(false);
            }
        })

        // debugDraw(wallLayer, this)
        // debugDraw(bridgeLayer, this)

        this.man = this.add.man(120, 120, 'man')

        this.camera.startFollow(this.man, true)
        this.physics.add.collider(this.man, wallLayer)
        this.physics.add.collider(this.man, bridgeLayer)

    }


    update(time: number, delta: number): void {
        if (!this.cursors || !this.man) return

        if (this.man) {
            this.man.update(this.cursors)
        }

        // Get current tile position
        const tileX = this.map.worldToTileX(this.man.x);
        const tileY = this.map.worldToTileY(this.man.y);

        // Update backdrop based on character position

        // Your existing sofa interaction code ...
        sofaTiles.forEach((tile) => {
            if (tile.side === 'left' && tileX === tile.x && tileY === tile.y) {
                this.man.anims.play('sit3-left');
            }
            if (tile.side === 'right' && tileX === tile.x && tileY === tile.y) {
                this.man.anims.play('sit3-right');
            }
        });

    }


}