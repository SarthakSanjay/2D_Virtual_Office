import Phaser from "phaser";
import { EventBus } from "../EventBus";

declare global {
    namespace Phaser.GameObjects {
        interface GameObjectFactory {
            man(
                x: number,
                y: number,
                texture: string,
                map: Phaser.Tilemaps.Tilemap,
                frame?: string | number
            ): Man
        }
    }
}


export default class Man extends Phaser.Physics.Arcade.Sprite {

    private map: Phaser.Tilemaps.Tilemap
    private phoneKey!: Phaser.Input.Keyboard.Key


    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: string,
        map: Phaser.Tilemaps.Tilemap,
        frame?: string | number
    ) {
        super(scene, x, y, texture, frame);

        if (!map) {
            throw new Error("Tilemap is undefined in Man class.");
        }

        this.map = map;
        this.phoneKey = scene.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.setDepth(this.y);
        this.anims.play('idle-down');
    }

    update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
        if (!cursors) return

        const speed = 150
        if (cursors.right.isDown) {
            this.anims.play('run-right', true)
            this.setVelocity(speed, 0)
        } else if (cursors.left.isDown) {
            this.anims.play('run-left', true)
            this.setVelocity(-speed, 0)
        } else if (cursors.up.isDown) {
            this.anims.play('run-up', true)
            this.setVelocity(0, -speed)
        } else if (cursors.down.isDown) {
            this.anims.play('run-down', true)
            this.setVelocity(0, speed)
        } else if (cursors.space.isDown) {
            this.anims.play('sit3-right')
        }
        else if (Phaser.Input.Keyboard.JustDown(this.phoneKey)) {
            if (this.map) {
                const worldX = this.map.tileToWorldX(21);
                const worldY = this.map.tileToWorldY(10);
                this.setPosition(worldX, worldY);
            } else {
                console.error("Tilemap is not defined for Man.");
            }
        }
        else {
            const currentAnim = this.anims.currentAnim;
            if (currentAnim) {
                const direction = currentAnim.key.split('-')[1];
                const idleKey = `idle-${direction}`;

                if (this.anims.currentAnim?.key !== idleKey) {
                    this.anims.play(idleKey, true);
                }
            }
            this.setVelocity(0, 0)
        }

    }
}



Phaser.GameObjects.GameObjectFactory.register(
    'man',
    function (
        this: Phaser.GameObjects.GameObjectFactory,
        x: number,
        y: number,
        texture: string,
        map: Phaser.Tilemaps.Tilemap,
        frame?: string | number
    ) {
        if (!map) {
            throw new Error("Tilemap is required to create a Man object.");
        }

        const sprite = new Man(this.scene, x, y, texture, map, frame);

        this.displayList.add(sprite);
        this.updateList.add(sprite);

        this.scene.physics.world.enableBody(sprite, Phaser.Physics.Arcade.DYNAMIC_BODY);
        sprite.body?.setSize(sprite.width * 0.5, sprite.height * 0.8);

        return sprite;
    }
);
