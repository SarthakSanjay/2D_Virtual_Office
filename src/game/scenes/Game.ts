import Phaser from "phaser"
import { createCharacterAnims } from "../anims/CharacterAnims"
import { createMapLayers, setupColliders } from "../layer/Layers"
import { sofaTiles } from "../character/positions"
import Man from "../character/Man"
import '../character/Man'
import { debugDraw } from "../../utils/Debug"

export class Game extends Phaser.Scene {
    camera: Phaser.Cameras.Scene2D.Camera
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    map!: Phaser.Tilemaps.Tilemap
    man!: Man
    layers: any
    graphics: any
    groundLayer: Phaser.Tilemaps.TilemapLayer
    treesLayer: Phaser.Tilemaps.TilemapLayer
    backdrop: Phaser.GameObjects.Graphics
    selected: Phaser.GameObjects.Graphics
    private phoneKey!: Phaser.Input.Keyboard.Key

    constructor() {
        super('Game')
    }

    preload() {
        this.cursors = this.input.keyboard!.createCursorKeys()
    }

    create() {
        this.camera = this.cameras.main
        createCharacterAnims(this.anims)

        this.phoneKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A)

        // Create the map
        this.map = this.make.tilemap({ key: 'map' })

        // Use helper function to create map layers
        this.layers = createMapLayers(this, this.map)

        this.groundLayer = this.layers.groundLayer
        this.treesLayer = this.layers.treesLayer

        // Use helper function to setup colliders
        const { wallLayer, bridgeLayer, furnitureLayer, furnitureLayer2, furnitureLayer3 } = setupColliders(this, this.layers)

        this.man = this.add.man(120, 120, 'man')
        this.man.body?.setSize(10, 10)
        this.man.body?.setOffset(4, 20)

        this.camera.startFollow(this.man, true)
        wallLayer && this.physics.add.collider(this.man, wallLayer)
        bridgeLayer && this.physics.add.collider(this.man, bridgeLayer)
        furnitureLayer && this.physics.add.collider(this.man, furnitureLayer)
        furnitureLayer2 && this.physics.add.collider(this.man, furnitureLayer2)
        furnitureLayer3 && this.physics.add.collider(this.man, furnitureLayer3)

        this.backdrop = this.add.graphics()
        this.backdrop.fillStyle(0x000000, 0)
        this.backdrop.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height)

        this.backdrop.setDepth(10)

        this.selected = this.add.graphics()
        this.selected.setDepth(15)
        // debugDraw(wallLayer, this)
        // debugDraw(bridgeLayer, this)
        debugDraw(furnitureLayer2, this)
        // console.log('debug', furnitureLayer2)
        // debugDraw(furnitureLayer2, this)
    }
    getAdjacentPositions(center: any) {
        const { x, y } = center
        const adjacentPositions = []

        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx !== 0 || dy !== 0) {
                    adjacentPositions.push({ x: x + dx, y: y + dy })
                }
            }
        }

        return adjacentPositions
    }

    update(time: number, delta: number): void {
        if (!this.cursors || !this.man) return

        this.man.update(this.cursors)

        const tileX = this.map.worldToTileX(this.man.x)
        const tileY = this.map.worldToTileY(this.man.y)

        let isOnSpecifiedTile = false // Flag to track if the character is on a sofa tile

        sofaTiles.forEach((tile) => {
            if (tile.x === tileX && tile.y === tileY) {
                isOnSpecifiedTile = true // Character is on a specified tile

                if (tile.side === 'left') {
                    this.backdrop.clear()
                    this.backdrop.fillStyle(0x000000, 0.5) // Brown tint with 50% opacity
                    this.backdrop.fillRect(0, 0, 1024, 720)

                    this.man.anims.play('sit3-left')
                } else if (tile.side === 'right') {
                    this.man.anims.play('sit3-right')
                }
                let center = { x: tile.x, y: tile.y }
                let excluded = this.getAdjacentPositions(center)
                excluded.forEach(() => {
                    // // this.selected.clear()
                    // this.selected.fillStyle(0x00ff00, 1)
                    // this.selected.fillRect(tile.x, tile.y, 16, 16)

                    console.log('xy',)
                })
            }

        })

        // Revert the tint and background color if the character is not on a sofa tile
        if (!isOnSpecifiedTile) {

            this.backdrop.clear()
            // this.backdrop.fillStyle(0x000000, 0) // Fully transparent backdrop
            // this.backdrop.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height)
        }
    }
}