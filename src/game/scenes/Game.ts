import Phaser from "phaser";
import { createCharacterAnims } from "../anims/CharacterAnims";
import { debugDraw } from "../../utils/Debug";


export class Game extends Phaser.Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    wallLayer!: Phaser.Tilemaps.TilemapLayer
    cursors: Phaser.Types.Input.Keyboard.CursorKeys

    private man!: Phaser.Physics.Arcade.Sprite
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

        this.phoneKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A)

        // Create the map
        const map = this.make.tilemap({ key: 'map' });

        // Add tilesets

        // const beachTile = map.addTilesetImage('ground', 'beach_tile', 16, 16);
        const cliffTile = map.addTilesetImage('cliff', 'cliff_tile', 16, 16);
        const fences = map.addTilesetImage('walls', 'fences', 16, 16);
        const tree = map.addTilesetImage('tree', 'tree', 16, 16);
        const smallTree = map.addTilesetImage('trees-small', 'tree_small', 16, 16)
        const waterTile = map.addTilesetImage('river', 'water_tile', 16, 16);
        const interiorTile2 = map.addTilesetImage('interior2', 'interior2', 16, 16)
        const interior = map.addTilesetImage('interior', 'interior', 16, 16, 1, 2)
        const indoor = map.addTilesetImage('indoor', 'indoor', 16, 16, 1, 2)
        const walls = map.addTilesetImage('indoor', 'indoor', 16, 16)
        const bridge = map.addTilesetImage('bridge', 'bridge', 16, 16)

        // Add layers
        // @ts-ignore
        const groundLayer = map.createLayer('ground', [
            // beachTile,
            cliffTile, waterTile, interiorTile2, indoor]);
        // @ts-ignore
        const wallLayer = map.createLayer('walls', [indoor, waterTile, interiorTile2, fences, walls]);
        // @ts-ignore
        const bridgeLayer = map.createLayer('bridge', bridge)

        // @ts-ignore
        const treesLayer = map.createLayer('trees', [tree, smallTree])
        treesLayer?.setDepth(10)
        console.log('st', smallTree)

        map.createLayer('furniture', [interiorTile2, interior])
        map.createLayer('furniture2', interiorTile2)
        map.createLayer('fur3', interiorTile2)


        wallLayer?.setCollisionByProperty({ collider: true })
        bridgeLayer?.setCollisionByProperty({ collider: true })
        // wallLayer?.setCollision([12, 17], false)
        console.log(wallLayer?.getTileAt(12, 17).setCollision(false))
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

        this.man = this.physics.add.sprite(120, 120, 'idle', 'idle-up-8.png')
        this.man.body?.setSize(10, 10)
        this.man.body?.setOffset(4, 20);
        this.man.setDepth(this.man.y)
        this.man.anims.play('idle-down')


        this.camera.startFollow(this.man, true)
        this.physics.add.collider(this.man, wallLayer)

    }

    update(time: number, delta: number): void {
        if (!this.cursors || !this.man) return

        const speed = 100
        if (this.cursors.right.isDown) {
            this.man.anims.play('run-right', true)
            this.man.setVelocity(speed, 0)
        } else if (this.cursors.left.isDown) {
            this.man.anims.play('run-left', true)
            this.man.setVelocity(-speed, 0)
        } else if (this.cursors.up.isDown) {
            this.man.anims.play('run-up', true)
            this.man.setVelocity(0, -speed)
        } else if (this.cursors.down.isDown) {
            this.man.anims.play('run-down', true)
            this.man.setVelocity(0, speed)
        } else if (this.cursors.space.isDown) {
            this.man.anims.play('man-sit1-right')
        } else if (Phaser.Input.Keyboard.JustDown(this.phoneKey)) {
            this.man.anims.play('man-phone')
        } else {
            const currentAnim = this.man.anims.currentAnim;
            if (currentAnim) {
                const direction = currentAnim.key.split('-')[1];
                const idleKey = `idle-${direction}`;

                if (this.man.anims.currentAnim?.key !== idleKey) {
                    this.man.anims.play(idleKey, true);
                }
            }
            this.man.setVelocity(0, 0)
        }


    }
}