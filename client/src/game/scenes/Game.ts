import Phaser from "phaser"
import { createCharacterAnims } from "../anims/CharacterAnims"
import { createMapLayers, setupColliders } from "../layer/Layers"
import { chairVertex, gardenVertex, presentationRoomVertex, sofaTiles, sofaVertex } from "../character/positions"
import Man from "../character/Man"
import '../character/Man'
import { debugDraw } from "../../utils/Debug"

export class Game extends Phaser.Scene {
    camera: Phaser.Cameras.Scene2D.Camera
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    map!: Phaser.Tilemaps.Tilemap
    man!: Man
    layers: any
    groundLayer: Phaser.Tilemaps.TilemapLayer
    treesLayer: Phaser.Tilemaps.TilemapLayer
    backdrop: Phaser.GameObjects.Graphics
    fnl1: Phaser.Tilemaps.TilemapLayer
    fnl3: Phaser.Tilemaps.TilemapLayer

    private room1EndingTile = 31
    constructor() {
        super('Game')
    }

    preload() {
        this.cursors = this.input.keyboard!.createCursorKeys()
    }

    create() {
        console.log('game scene')
        this.camera = this.cameras.main
        createCharacterAnims(this.anims)

        // Create the map
        this.map = this.make.tilemap({ key: 'map' })

        // Use helper function to create map layers
        this.layers = createMapLayers(this, this.map)

        this.groundLayer = this.layers.groundLayer
        this.treesLayer = this.layers.treesLayer

        const { wallLayer, bridgeLayer, furnitureLayer, furnitureLayer2, furnitureLayer3 } = setupColliders(this, this.layers)

        this.fnl1 = furnitureLayer
        this.fnl3 = furnitureLayer3

        this.man = this.add.man(120, 120, 'man', this.map)
        this.man.body?.setSize(10, 10)
        this.man.body?.setOffset(4, 20)


        this.camera.startFollow(this.man, true)
        wallLayer && this.physics.add.collider(this.man, wallLayer)
        bridgeLayer && this.physics.add.collider(this.man, bridgeLayer)
        // furnitureLayer && this.physics.add.collider(this.man, furnitureLayer)
        // furnitureLayer2 && this.physics.add.collider(this.man, furnitureLayer2)
        // furnitureLayer3 && this.physics.add.collider(this.man, furnitureLayer3)

        this.backdrop = this.add.graphics()
        this.backdrop.setDepth(10)

        debugDraw(wallLayer, this)
        // debugDraw(bridgeLayer, this)
        // debugDraw(furnitureLayer2, this)
        // debugDraw(furnitureLayer2, this)
    }

    // getAdjacentPositions(center: any) {
    //     const { x, y } = center
    //     const adjacentPositions = []
    //
    //     for (let dx = -1; dx <= 1; dx++) {
    //         for (let dy = -1; dy <= 1; dy++) {
    //             if (dx !== 0 || dy !== 0) {
    //                 adjacentPositions.push({ x: x + dx, y: y + dy })
    //             }
    //         }
    //     }
    //
    //     return adjacentPositions
    // }
    //
    createBackdrop(vertex: { x: number, y: number }[], tileX: number, tileY: number) {

        this.backdrop.clear()
        let isOnSpecifiedTile = false // Flag to track if the character is on a sofa tile

        const minX = Math.min(...vertex.map(vtx => vtx.x));
        const maxX = Math.max(...vertex.map(vtx => vtx.x));
        const minY = Math.min(...vertex.map(vtx => vtx.y));
        const maxY = Math.max(...vertex.map(vtx => vtx.y));

        const isInsideVertexArea = tileX >= minX && tileX <= maxX && tileY >= minY && tileY <= maxY;
        if (isInsideVertexArea) {
            isOnSpecifiedTile = true
        }
        for (let i = 0; i <= 99; i++) {
            for (let j = 0; j <= 99; j++) {
                if (i >= minX && i <= maxX && j >= minY && j <= maxY) {
                    continue;
                }
                this.backdrop.fillStyle(0x000000, 0.5)
                this.backdrop.fillRect(
                    this.map.tileToWorldX(i),
                    this.map.tileToWorldY(j),
                    16, 16
                );
            }
        }

        // Revert the tint and background color if the character is not on a sofa tile
        if (!isOnSpecifiedTile) {
            this.backdrop.clear()
        }

    }
    update(time: number, delta: number): void {
        if (!this.cursors || !this.man) return

        this.man.update(this.cursors)

        const tileX = this.map.worldToTileX(this.man.x)
        const tileY = this.map.worldToTileY(this.man.y)



        if (tileX < 31 && tileY < 15) {
            this.createBackdrop(sofaVertex, tileX, tileY)
        } else if (tileX > 32 && tileY < 19) {
            this.createBackdrop(chairVertex, tileX, tileY)
        } else if (tileX < 12 && tileY > 30) {
            this.createBackdrop(presentationRoomVertex, tileX, tileY)
        } else {
            this.createBackdrop(gardenVertex, tileX, tileY)
        }



        sofaTiles.forEach((tile) => {
            if (tile.x === tileX && tile.y === tileY) {
                // this.backdrop.fillStyle(0x00ff00, 0.5)
                // this.backdrop.fillRect(
                //     this.map.tileToWorldX(tile.x),
                //     this.map.tileToWorldY(tile.y),
                //     16, 16
                // );
                // isOnSpecifiedTile = true // Character is on a specified tile

                if (tile.side === 'left') {
                    this.man.anims.play('sit3-left')
                } else if (tile.side === 'right') {
                    this.man.anims.play('sit3-right')
                } else if (tile.side === 'up') {
                    this.man.anims.play('idle-down')
                } else if (tile.side === 'down') {
                    this.man.setDepth(10)
                    this.fnl3.setDepth(12)
                    this.man.anims.play('idle-up')
                } else {
                    this.fnl3.setDepth(0)
                    this.man.setDepth(0)
                }
            }

        })


        if (this.cursors.space.isDown) {
            this.scene.start('Test')
        }
    }
}