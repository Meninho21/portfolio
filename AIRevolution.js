export class AIRevolution extends Phaser.Scene {

    constructor() {
        super('AIRevolution');
    }

    preload() {    
        // Player animation
        this.load.spritesheet('player', 'assets/Animated Guy.png', { frameWidth: 160, frameHeight: 160 });
    }

    create() {
        this.background = this.add.tileSprite(640, 360, 1280, 720, 'background');

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
