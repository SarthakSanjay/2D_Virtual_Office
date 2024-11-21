import Phaser from "phaser";

export const createCharacterAnims = (anims: Phaser.Animations.AnimationManager) => {

    anims.create({
        key: 'idle-right',
        frames: anims.generateFrameNames('idle', {
            start: 0,
            end: 5,
            prefix: 'idle-right-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })

    anims.create({
        key: 'idle-up',
        frames: anims.generateFrameNames('idle', {
            start: 6,
            end: 11,
            prefix: 'idle-up-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })

    anims.create({
        key: 'idle-left',
        frames: anims.generateFrameNames('idle', {
            start: 12,
            end: 17,
            prefix: 'idle-left-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })

    anims.create({
        key: 'idle-down',
        frames: anims.generateFrameNames('idle', {
            start: 18,
            end: 23,
            prefix: 'idle-down-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })

    anims.create({
        key: 'run-right',
        frames: anims.generateFrameNames('run', {
            start: 0,
            end: 5,
            prefix: 'run-right-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })

    anims.create({
        key: 'run-up',
        frames: anims.generateFrameNames('run', {
            start: 6,
            end: 11,
            prefix: 'run-up-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1

    })
    anims.create({
        key: 'run-left',
        frames: anims.generateFrameNames('run', {
            start: 12,
            end: 17,
            prefix: 'run-left-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1

    })
    anims.create({
        key: 'run-down',
        frames: anims.generateFrameNames('run', {
            start: 18,
            end: 23,
            prefix: 'run-down-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1

    })

    anims.create({
        key: 'man-phone',
        frames: anims.generateFrameNames('man-phone', {
            start: 0,
            end: 8,
            prefix: 'man-phone-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1

    })

    anims.create({
        key: 'sit-left',
        frames: anims.generateFrameNames('sit', {
            start: 0,
            end: 5,
            prefix: 'sit-left-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })

    anims.create({
        key: 'sit-right',
        frames: anims.generateFrameNames('sit', {
            start: 6,
            end: 11,
            prefix: 'sit-right-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })
    anims.create({
        key: 'sit2-left',
        frames: anims.generateFrameNames('sit2', {
            start: 0,
            end: 5,
            prefix: 'sit2-left-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })

    anims.create({
        key: 'sit2-right',
        frames: anims.generateFrameNames('sit2', {
            start: 6,
            end: 11,
            prefix: 'sit2-right-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })

    anims.create({
        key: 'sit3-left',
        frames: anims.generateFrameNames('sit3', {
            start: 0,
            end: 5,
            prefix: 'sit3-left-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })

    anims.create({
        key: 'sit3-right',
        frames: anims.generateFrameNames('sit3', {
            start: 6,
            end: 11,
            prefix: 'sit3-right-',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    })
}
