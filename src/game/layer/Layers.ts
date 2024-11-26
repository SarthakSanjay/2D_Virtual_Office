import Phaser from "phaser";

export function createMapLayers(scene: Phaser.Scene, map: Phaser.Tilemaps.Tilemap) {
    const cliffTile = map.addTilesetImage('cliff', 'cliff_tile', 16, 16);
    const fences = map.addTilesetImage('walls', 'fences', 16, 16);
    const tree = map.addTilesetImage('tree', 'tree', 16, 16);
    const smallTree = map.addTilesetImage('trees-small', 'tree_small', 16, 16);
    const waterTile = map.addTilesetImage('river', 'water_tile', 16, 16);
    const interiorTile2 = map.addTilesetImage('interior2', 'interior2', 16, 16);
    const interior = map.addTilesetImage('interior', 'interior', 16, 16, 1, 2);
    const indoor = map.addTilesetImage('indoor', 'indoor', 16, 16, 1, 2);
    const walls = map.addTilesetImage('indoor', 'indoor', 16, 16);
    const bridge = map.addTilesetImage('bridge', 'bridge', 16, 16);
    const outdoorDecor = map.addTilesetImage('forest_decor', 'outdoor_decor', 16, 16);
    const pathTile = map.addTilesetImage('path', 'path', 16, 16);

    // Add layers
    const groundLayer = map.createLayer('ground', [cliffTile, waterTile, interiorTile2, indoor, pathTile]);
    const wallLayer = map.createLayer('walls', [indoor, waterTile, interiorTile2, fences, walls, pathTile]);
    const bridgeLayer = map.createLayer('bridge', bridge);
    const treesLayer = map.createLayer('trees', [tree, smallTree, outdoorDecor, interiorTile2]);
    const furnitureLayer = map.createLayer('furniture', [interiorTile2, interior]);
    map.createLayer('furniture2', interiorTile2)
    map.createLayer('fur3', interiorTile2)

    treesLayer?.setDepth(10);

    return {
        groundLayer,
        wallLayer,
        bridgeLayer,
        treesLayer,
        furnitureLayer
    };
}

export function setupColliders(scene: Phaser.Scene, layers: { wallLayer?: Phaser.Tilemaps.TilemapLayer; bridgeLayer?: Phaser.Tilemaps.TilemapLayer }) {
    const { wallLayer, bridgeLayer } = layers;

    wallLayer?.setCollisionByProperty({ collider: true });
    bridgeLayer?.setCollisionByProperty({ collider: true });

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
        { x: 12, y: 25 },
        { x: 12, y: 17 }
    ];

    // Loop through and disable collision for these positions
    positions.forEach(pos => {
        const tile = wallLayer?.getTileAt(pos.x, pos.y);
        if (tile) {
            tile.setCollision(false);
        }
    });

    return { wallLayer, bridgeLayer };
}
