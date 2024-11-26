import Phaser from "phaser";
import { EventBus } from "../EventBus";

declare global {
    namespace Phaser.GameObjects {
        interface GameObjectFactory {
            man(
                x: number,
                y: number,
                texture: string,
                frame?: string | number
            ): Man
        }
    }
}


export default class Man extends Phaser.Physics.Arcade.Sprite {


    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: string,
        frame?: string | number
    ) {
        super(scene, x, y, texture, frame)

        this.setDepth(this.y)
        this.anims.play('idle-down')


    }

    update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
        if (!cursors) return

        const speed = 100
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
        // else if (Phaser.Input.Keyboard.JustDown(this.phoneKey)) {
        //     // this.man.anims.play('man-phone')
        //     this.setPosition(this.map.tileToWorldX(27), this.map.tileToWorldY(10))
        // }
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


Phaser.GameObjects.GameObjectFactory.register('man', function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, texture: string, frame?: string | number) {
    let sprite = new Man(this.scene, x, y, texture, frame)

    this.displayList.add(sprite)
    this.updateList.add(sprite)

    this.scene.physics.world.enableBody(sprite, Phaser.Physics.Arcade.DYNAMIC_BODY)
    sprite.body?.setSize(sprite.width * 0.5, sprite.height * 0.8)


    return sprite
})
