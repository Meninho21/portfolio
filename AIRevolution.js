export class AIRevolution extends Phaser.Scene {

    constructor() {
        super('AIRevolution');
    }

    preload() {    
        // Player animation
        this.load.spritesheet('player', './Animated_Guy.png', { frameWidth: 160, frameHeight: 160 });
    }

    create() {
        const player = this.add.sprite(640, 360, 'player');

        player.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 1}),
            frameRate: 4,
            repeat: -1
        })

        player.play('idle');
    }
}
