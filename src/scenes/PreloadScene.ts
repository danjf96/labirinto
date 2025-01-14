class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    const txtLoading = this.add.text(
      this.cameras.main.centerX,
      150,
      'LOADING...',
      { font: '15px emulogic', color: '#fff' },
    )
    txtLoading.setOrigin(0.5, 0.5)

    const progressBar = this.add.sprite(
      this.cameras.main.centerX,
      250,
      'progressBar',
    )
    progressBar.setOrigin(0.5, 0.5)

    this.load.on('progress', (value: number) => {
      progressBar.setScale(value, 1)
    })

    this.load.image('logo', '/cdn/images/img.png')
    this.load.image('ground', 'src/assets/game/sprites/ground.png')
    this.load.image('block', 'src/assets/game/sprites/block.png')
    this.load.spritesheet('coin', 'src/assets/items/coin/coin.png', {
      frameWidth: 32,
      frameHeight: 32,
    })

    this.load.spritesheet('player', 'src/assets/player/sprites/player.png', {
      frameWidth: 24,
      frameHeight: 32,
    })

    //songs
    this.load.audio('main_song', 'src/assets/game/sfx/music.ogg')
  }

  create() {
    this.scene.start('MenuScene')
  }
}

export default PreloadScene
