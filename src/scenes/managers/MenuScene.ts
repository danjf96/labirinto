import gameManager from '../../controls/GameManager'
import MusicPlayer from '../../controls/MusicPlayer'

class MenuScene extends Phaser.Scene {
  private playerMusic!: MusicPlayer
  private enterKey: any

  constructor() {
    super({ key: 'MenuScene' })
  }

  initStage() {
    this.playerMusic.stop()
    gameManager.restartGame()
    this.scene.start('Stage1')
  }

  create() {
    this.playerMusic = new MusicPlayer(this, 'mainSong')
    this.playerMusic.setVolume(0.1)
    this.playerMusic.play()

    const txtLabirinto = this.add.text(
      this.cameras.main.centerX,
      150,
      'LABIRINTO',
      { font: '20px emulogic', color: '#fff' },
    )
    txtLabirinto.setOrigin(0.5, 0.5)

    this.tweens.add({
      targets: txtLabirinto,
      y: this.cameras.main.y + 50,
      duration: 1000,
      ease: 'Power2',
      yoyo: false,
      loop: 0,
    })

    const txtPressStart = this.add.text(
      this.cameras.main.centerX,
      550,
      'PRESS START',
      { font: '40px emulogic', color: '#fff' },
    )
    txtPressStart.setOrigin(0.5)

    this.tweens.add({
      targets: txtPressStart,
      y: this.cameras.main.centerY,
      duration: 1000,
      ease: 'Power2',
      yoyo: false,
      loop: 0,
    })

    txtPressStart.setInteractive()

    txtPressStart.on('pointerdown', this.initStage.bind(this))

    this.enterKey = this.input.keyboard?.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER,
    )
  }

  update(time: number, delta: number): void {
    if (Phaser.Input.Keyboard.JustDown(this.enterKey)) {
      this.initStage()
    }
  }
}

export default MenuScene
