class GameOver extends Phaser.Scene {
  private enterKey: any

  constructor() {
    super({ key: 'GameOver' })
  }

  preload() {
    this.load.image('end', 'src/assets/game/sprites/end.png')
  }

  create() {
    this.add.sprite(0, 0, 'end')

    const textStart = this.add.text(
      this.cameras.main.centerX,
      150,
      'PRESS START',
      { font: '40px emulogic', color: '#F00' },
    )
    textStart.setOrigin(0.5, 0.5)
    textStart.setAlpha(0)

    this.time.delayedCall(3000, () => {
      this.tweens.add({
        targets: textStart,
        alpha: { from: 1, to: 0 },
        duration: 500,
        repeat: -1,
        yoyo: true,
      })
    })

    this.enterKey = this.input.keyboard?.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER,
    )
  }

  update(time: number, delta: number): void {
    if (Phaser.Input.Keyboard.JustDown(this.enterKey)) {
      this.scene.stop()
      this.scene.start('MenuScene')
    }
  }
}

export default GameOver
