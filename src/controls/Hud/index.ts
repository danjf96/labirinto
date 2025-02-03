import GameScene from '../../scenes/stages/BaseStage/interfaces'
import EventManager from '../EventManager'
import gameManager from '../GameManager'

class Hud {
  scene!: GameScene
  private textCoins!: Phaser.GameObjects.Text
  private txtTimer!: Phaser.GameObjects.Text

  constructor(scene: GameScene) {
    this.scene = scene

    this.textCoins = this.scene.add
      .text(
        15,
        15,
        'COINS: ' + gameManager.getCoins().toString().padStart(3, '0'),
        {
          font: '15px emulogic',
          color: '#fff',
        },
      )
      .setDepth(10)

    EventManager.on('updateCoins', this.updateCoins, this)

    this.txtTimer = this.scene.add
      .text(this.scene.game.canvas.width - 15, 15, 'TIME: 00', {
        font: '15px emulogic',
        color: '#fff',
      })
      .setDepth(10)

    const textBounds = this.txtTimer.getBounds()
    this.txtTimer.setX(this.scene.cameras.main.width - textBounds.width - 15)
  }

  updateCoins(coins: number) {
    this.textCoins.text = `COINS: ${coins.toString().padStart(3, '0')}`
  }

  updateTimer(time: number) {
    this.txtTimer.text = `TIME: ${time}`
  }

  destroy() {
    EventManager.off('updateCoins', this.updateCoins, this)
  }
}

export default Hud
