class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' })
  }

  preload() {
    this.load.image('progressBar', 'src/assets/game/sprites/progressBar.png')

    this.load.audio('main_song', 'src/assets/game/sfx/music.ogg')
  }

  create() {
    this.scene.start('PreloadScene')
  }
}

export default BootScene
