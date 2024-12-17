import MusicPlayer from '../controls/MusicPlayer'

class MenuScene extends Phaser.Scene {
  playerMusic!: MusicPlayer

  constructor() {
    super({ key: 'MenuScene' })
  }

  create() {
    this.playerMusic = new MusicPlayer(this, 'main_song')
    this.playerMusic.setVolume(0.1)
    this.playerMusic.play()

    const txtLabirinto = this.add.text(
      this.cameras.main.centerX,
      150,
      'LABIRINTO',
      { font: '40px emulogic', color: '#fff' },
    )
    txtLabirinto.setOrigin(0.5, 0.5)

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

    this.tweens.add({
      targets: txtLabirinto,
      y: this.cameras.main.y + 50,
      duration: 1000,
      ease: 'Power2',
      yoyo: false,
      loop: 0,
    })
  }
}

export default MenuScene
