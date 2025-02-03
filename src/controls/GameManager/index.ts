import GameScene from '../../scenes/stages/BaseStage/interfaces'

class GameManager {
  private coins: number = 0
  private gameOver: Boolean = false
  private highScore: number = 0
  private score: number = 0

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

  addHighScore(highScore: number): void {
    this.highScore = highScore
  }

  getHighScore(highScore: number): number {
    return this.highScore
  }

  addScore(score: number): void {
    this.score = score
    if (score > this.highScore) {
      this.addHighScore(score)
    }
  }

  getScore(): number {
    return this.score
  }
}

const gameManager = new GameManager()
export default gameManager
