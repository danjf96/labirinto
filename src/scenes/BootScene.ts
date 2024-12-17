class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' })
  }

  preload() {
    this.load.image('progressBar', '../scenes/game/progressBar.png')
  }

  create() {
    this.scene.start('PreloadScene')
  }
}

export default BootScene
