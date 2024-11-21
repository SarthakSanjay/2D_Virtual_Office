import Phaser from "phaser";
import { createCharacterAnims } from "../anims/CharacterAnims";


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

        const map = this.make.tilemap({
            key: 'room'
        })

        const tileset = map.addTilesetImage('virtualOffice', 'tiles', 16, 16, 1, 2)
        const tileset2 = map.addTilesetImage('outside', 'outside', 16, 16, 1, 2)
        //@ts-ignore
        map.createLayer('ground', [tileset, tileset2])
        // map.createLayer('walls2', tileset)


        this.man = this.physics.add.sprite(120, 120, 'idle', 'idle-up-8.png')
        this.man.body?.setSize(16, 16)
        this.man.body?.setOffset(0, 16);
        this.man.setDepth(this.man.y)
        this.man.anims.play('idle-down')

        //@ts-ignore
        this.wallLayer = map.createLayer('walls', [tileset, tileset2])
        this.wallLayer?.setCollisionByProperty({ collider: true })

        this.camera.startFollow(this.man, true)
        this.physics.add.collider(this.man, this.wallLayer)

        // man.anims.play('run-right')
        // man.anims.play('run-left')
        // this.man.anims.play('run-up')
        // man.anims.play('run-down')

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