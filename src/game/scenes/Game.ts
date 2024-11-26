import Phaser from "phaser";
import { createCharacterAnims } from "../anims/CharacterAnims";
import { createMapLayers, setupColliders } from "../layer/Layers";
import { sofaTiles } from "../character/positions";
import Man from "../character/Man";
import '../character/Man'
import { debugDraw } from "../../utils/Debug";

export class Game extends Phaser.Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    map!: Phaser.Tilemaps.Tilemap;
    man!: Man;

    private phoneKey!: Phaser.Input.Keyboard.Key;

    constructor() {
        super('Game');
    }

    preload() {
        this.cursors = this.input.keyboard!.createCursorKeys();
    }

    create() {
        this.camera = this.cameras.main;
        createCharacterAnims(this.anims);

        this.phoneKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        // Create the map
        this.map = this.make.tilemap({ key: 'map' });

        // Use helper function to create map layers
        const layers = createMapLayers(this, this.map);


        // Use helper function to setup colliders
        const { wallLayer, bridgeLayer } = setupColliders(this, layers);

        this.man = this.add.man(120, 120, 'man');
        this.man.body?.setSize(10, 10)
        this.man.body?.setOffset(4, 20);


        this.camera.startFollow(this.man, true);
        this.physics.add.collider(this.man, layers.wallLayer);
        this.physics.add.collider(this.man, layers.bridgeLayer);

        debugDraw(wallLayer, this)
        debugDraw(bridgeLayer, this)
    }

    update(time: number, delta: number): void {
        if (!this.cursors || !this.man) return;

        this.man.update(this.cursors);

        const tileX = this.map.worldToTileX(this.man.x);
        const tileY = this.map.worldToTileY(this.man.y);

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