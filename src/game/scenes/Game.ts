import Phaser from "phaser";


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

        this.phoneKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A)

        const map = this.make.tilemap({
            key: 'room'
        })

        const tileset = map.addTilesetImage('virtualOffice', 'tiles', 16, 16, 1, 2)
        //@ts-ignore
        map.createLayer('ground', tileset)
        // map.createLayer('walls2', tileset)


        this.man = this.physics.add.sprite(120, 120, 'run', 'run-right-2.png')

        this.anims.create({
            key: 'run-right',
            frames: this.anims.generateFrameNames('run', {
                start: 0,
                end: 5,
                prefix: 'run-right-',
                suffix: '.png'
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'run-up',
            frames: this.anims.generateFrameNames('run', {
                start: 6,
                end: 11,
                prefix: 'run-up-',
                suffix: '.png'
            }),
            frameRate: 10,
            repeat: -1

        })
        this.anims.create({
            key: 'run-left',
            frames: this.anims.generateFrameNames('run', {
                start: 12,
                end: 17,
                prefix: 'run-left-',
                suffix: '.png'
            }),
            frameRate: 10,
            repeat: -1

        })
        this.anims.create({
            key: 'run-down',
            frames: this.anims.generateFrameNames('run', {
                start: 18,
                end: 23,
                prefix: 'run-down-',
                suffix: '.png'
            }),
            frameRate: 10,
            repeat: -1

        })

        this.anims.create({
            key: 'man-phone',
            frames: this.anims.generateFrameNames('man-phone', {
                start: 0,
                end: 8,
                prefix: 'man-phone-',
                suffix: '.png'
            }),
            frameRate: 10,
            repeat: -1

        })

        this.anims.create({
            key: 'man-sit1-left',
            frames: this.anims.generateFrameNames('man-sit1', {
                start: 0,
                end: 5,
                prefix: 'sit-left-',
                suffix: '.png'
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'man-sit1-right',
            frames: this.anims.generateFrameNames('man-sit1', {
                start: 6,
                end: 11,
                prefix: 'sit-right-',
                suffix: '.png'
            }),
            frameRate: 10,
            repeat: -1
        })

        //@ts-ignore
        this.wallLayer = map.createLayer('walls', tileset)
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
            // this.man.anims.play('man-sit1-left')
            this.man.anims.play('man-sit1-right')
        } else if (Phaser.Input.Keyboard.JustDown(this.phoneKey)) {
            this.man.anims.play('man-phone')
        } else if (Phaser.Input.Keyboard.JustDown(this.cutPhone)) {
            this.man.anims.stop()
        } else {
            this.man.setVelocity(0, 0)
        }


    }
}