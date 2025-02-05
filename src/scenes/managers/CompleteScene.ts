import gameManager from '../../controls/GameManager'

class CompleteScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CompleteScene' })
  }

  create({ nextPhase, bonus }: { nextPhase: string; bonus: number }) {
    const enterKey = this.input.keyboard?.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER,
    )

    this.scene.bringToTop('CompleteScene')

    enterKey?.on('down', () => {
      gameManager.setCoin(0)
      this.scene.stop()
      this.scene.start(nextPhase)
    })

    this.add
      .text(this.cameras.main.centerX, 150, 'LEVEL COMPLETE! ', {
        font: '20px emulogic',
        color: '#fff',
      })
      .setDepth(1000)
      .setOrigin(0.5, 0.5)

    this.add
      .text(this.cameras.main.centerX, 200, `TIME BONUS: ${bonus}`, {
        font: '20px emulogic',
        color: '#fff',
      })
      .setOrigin(0.5, 0.5)

    this.add
      .text(
        this.cameras.main.centerX,
        250,
        `FINAL SCORE:  ${gameManager.getScore()}`,
        {
          font: '20px emulogic',
          color: '#fff',
        },
      )
      .setOrigin(0.5, 0.5)
  }
}

export default CompleteScene
