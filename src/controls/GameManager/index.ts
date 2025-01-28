import GameScene from '../../scenes/stages/BaseStage/interfaces'

class GameManager {
  private coins: number = 0
  private gameOver: Boolean = false
  constructor() {}

  addCoin(value: number = 1): void {
    this.coins += value
  }

  removeCoin(value: number = 1): void {
    this.coins -= value
  }

  resetCoins(): void {
    this.coins = 0
  }

  getCoins(): number {
    return this.coins
  }

  setGameOver(gameOver: Boolean, scene: GameScene) {
    this.gameOver = gameOver
    scene.scene.stop()
    scene.scene.start('GameOver')
  }

  restartGame() {
    this.gameOver = false
    this.coins = 0
  }

  getGameOver(): Boolean {
    return this.gameOver
  }
}

const gameManager = new GameManager()
export default gameManager
