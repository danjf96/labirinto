import GameScene from '../../scenes/stages/BaseStage/interfaces'
import EventManager from '../EventManager'
import gameManager from '../GameManager'

class Hud {
  scene!: GameScene
  private textCoins!: Phaser.GameObjects.Text

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
  }

  updateCoins(coins: number) {
    this.textCoins.text = `COINS: ${coins.toString().padStart(3, '0')}`
  }

  destroy() {
    EventManager.off('updateCoins', this.updateCoins, this)
  }
}

export default Hud
