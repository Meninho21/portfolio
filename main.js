const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 300 } }
  },
  scene: {
    create() {
      this.add.text(300, 250, 'Hello Phaser!', { fontSize: '32px' });
    }
  }
};

new Phaser.Game(config);
